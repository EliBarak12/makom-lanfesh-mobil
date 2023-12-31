import {DefaultPageWrapper} from '../../components/default-page-wrapper/DefaultPageWrapper';
import {Pressable, StyleSheet, Text, View} from '../../components';
import {RootStackParamList, Routes} from '../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDeviceBackClick} from '../../hooks/useDeviceBackClick.hook';
import {useString} from '../i18n';
import {
  HelpingHands,
  MedicalSupport,
  Quiz,
  Compass,
} from '../../components/images';

export const GetSupport = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, Routes.GetSupport>) => {
  function onCrisisSupportClick() {
    navigation.replace(Routes.CrisisSupport);
  }

  function onFindProCareClick() {
    navigation.replace(Routes.FindProCare);
  }

  function onAnswerAgainClick() {
    navigation.replace(Routes.Questionnaire);
  }

  function onToolboxClick() {
    navigation.replace(Routes.Toolbox);
  }

  function onBack() {
    navigation.replace(Routes.Results);
  }

  function handleDeviceBackPress() {
    onBack();

    return true;
  }

  useDeviceBackClick(handleDeviceBackPress, [onBack]);

  return (
    <DefaultPageWrapper
      title={useString('getSupport.header')}
      onBackButtonClick={onBack}
      enableScroll>
      <View style={styles.mainView}>
        <Pressable onPress={onCrisisSupportClick} style={styles.button}>
          <HelpingHands width={80} />
          <Text style={styles.text}>
            {useString('getSupport.crisisButton')}
          </Text>
        </Pressable>
        <Pressable onPress={onFindProCareClick} style={styles.button}>
          <MedicalSupport width={80} />
          <Text style={styles.text}>
            {useString('getSupport.findProCareButton')}
          </Text>
        </Pressable>
        <Pressable onPress={onAnswerAgainClick} style={styles.button}>
          <Quiz width={80} />
          <Text style={styles.text}>
            {useString('getSupport.answerAgainButton')}
          </Text>
        </Pressable>
        <Pressable onPress={onToolboxClick} style={styles.button}>
          <Compass width={80} />
          <Text style={styles.text}>{useString('getSupport.toolBox')}</Text>
        </Pressable>
      </View>
    </DefaultPageWrapper>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 20,
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    gap: 24,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    padding: 20,
    height: 120,
    width: '100%',
    maxWidth: 358,
    borderRadius: 12,
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: '600',
    width: '100%',
    flexWrap: 'wrap',
    flex: 1,
  },
});
