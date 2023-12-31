import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Routes} from '../navigation';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextCenter,
  View,
} from '../../components';
import {BoolStorageKeys, setStorageValue} from '../storage/storage';
import {DefaultPageWrapper} from '../../components/default-page-wrapper/DefaultPageWrapper';
import {useString} from '../i18n';

export const UserAgreement = ({navigation}: NativeStackScreenProps<any>) => {
  function onAcceptClick() {
    navigation.replace(Routes.Tutorial);
    setStorageValue(BoolStorageKeys.IsAgreedToTerms, true);
  }

  return (
    <DefaultPageWrapper title={useString('userAgreement.pageTitle')}>
      <View style={styles.mainView}>
        <TextCenter style={styles.headerText}>
          {useString('userAgreement.header')}
        </TextCenter>
        <TextCenter style={styles.appNameText}>
          {useString('userAgreement.appName')}
        </TextCenter>
        <ScrollView>
          <Text style={styles.text}>{useString('userAgreement.text')}</Text>
        </ScrollView>
        <Button
          style={styles.acceptButton}
          onPress={onAcceptClick}
          mode="contained">
          {useString('userAgreement.acceptButton')}
        </Button>
      </View>
    </DefaultPageWrapper>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 40,
    paddingTop: 20,
  },
  text: {
    overflow: 'scroll',
    fontSize: 14,
    lineHeight: 24,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 16,
  },
  appNameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  acceptButton: {
    width: '100%',
    padding: 4,
  },
});
