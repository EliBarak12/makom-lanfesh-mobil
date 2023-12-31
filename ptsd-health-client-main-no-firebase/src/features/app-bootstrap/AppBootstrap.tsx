import {View} from '../../components';
import {useCallback, useEffect} from 'react';
import {
  BoolStorageKeys,
  getStorageValue,
  initStorage,
  NumberStorageKeys,
} from '../storage/storage';
import {Routes} from '../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const AppBootstrap = ({navigation}: NativeStackScreenProps<any>) => {
  const redirectToInitialRoute = useCallback(() => {
    const isAgreedToTerms = getStorageValue(BoolStorageKeys.IsAgreedToTerms);
    const isTutorialFinished = getStorageValue(
      BoolStorageKeys.IsTutorialFinished,
    );

    if (!isAgreedToTerms) {
      navigation.replace(Routes.UserAgreement);

      return;
    }

    const userScore = getStorageValue(NumberStorageKeys.LastUserScore);
    const isUserScore =
      userScore >= 0 && userScore !== null && userScore !== undefined;

    navigation.replace(
      !isTutorialFinished
        ? Routes.Tutorial
        : isUserScore
        ? Routes.GetSupport
        : Routes.Questionnaire,
    );
  }, [navigation]);

  useEffect(() => {
    initStorage();
    redirectToInitialRoute();
  }, [redirectToInitialRoute]);

  return <View />;
};
