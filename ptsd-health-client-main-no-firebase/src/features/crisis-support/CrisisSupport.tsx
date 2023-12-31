import {DefaultPageWrapper} from '../../components/default-page-wrapper/DefaultPageWrapper';
import {Pressable, StyleSheet, Text, View} from '../../components';
import {useString} from '../i18n';
import {RootStackParamList, Routes} from '../navigation';
import {useDeviceBackClick} from '../../hooks/useDeviceBackClick.hook';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Linking} from 'react-native';

const ERAN_NUMBER = '1201';
const NTL_NUMBER = '1800363363';
const HAMAL_LEV_EHAD_NUMBER = '0722133281';
const MACABI_NUMBER = '*3555';
const CLALIT_NUMBER = '037472010';
const MEHUHEDET_NUMBER = '*3833';
const LEUMIT_NUMBER = '*507';

export const CrisisSupport = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, Routes.CrisisSupport>) => {
  function callCrisisNumber(phoneNumber: string) {
    Linking.openURL(`tel:${phoneNumber}`);
  }

  function onBack() {
    navigation.replace(Routes.GetSupport);
  }

  function handleDeviceBackPress() {
    onBack();

    return true;
  }

  useDeviceBackClick(handleDeviceBackPress, [onBack]);

  return (
    <DefaultPageWrapper
      title={useString('crisisResources.header')}
      onBackButtonClick={onBack}
      enableScroll>
      <View style={styles.mainView}>
        <Text style={styles.text}>
          {useString('crisisResources.eranTitle')}
        </Text>
        <Pressable
          onPress={() => callCrisisNumber(ERAN_NUMBER)}
          style={styles.button}>
          <Text style={styles.text}>
            {useString('crisisResources.eranButton')}
          </Text>
        </Pressable>
        <Text style={styles.text}>
          {useString('crisisResources.suicideAndCrisisTitle')}
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => callCrisisNumber(NTL_NUMBER)}>
          <Text style={styles.text}>
            {useString('crisisResources.ntlButton')}
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => callCrisisNumber(HAMAL_LEV_EHAD_NUMBER)}>
          <Text style={styles.text}>
            {useString('crisisResources.hamalLevEhadButton')}
          </Text>
        </Pressable>
        <Text style={styles.text}>
          {useString('crisisResources.emergencyCentersTitle')}
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => callCrisisNumber(MACABI_NUMBER)}>
          <Text style={styles.text}>
            {useString('crisisResources.macabiButton')}
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => callCrisisNumber(CLALIT_NUMBER)}>
          <Text style={styles.text}>
            {useString('crisisResources.clalitButton')}
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => callCrisisNumber(MEHUHEDET_NUMBER)}>
          <Text style={styles.text}>
            {useString('crisisResources.meuhedetButton')}
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => callCrisisNumber(LEUMIT_NUMBER)}>
          <Text style={styles.text}>
            {useString('crisisResources.leumitButton')}
          </Text>
        </Pressable>
      </View>
    </DefaultPageWrapper>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 36,
    flex: 1,
    gap: 8,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  button: {
    width: '100%',
    maxWidth: 358,
    padding: 8,
    backgroundColor: '#B6DFF2',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#015C7C',
    borderRadius: 12,
    borderStyle: 'solid',
  },
});
