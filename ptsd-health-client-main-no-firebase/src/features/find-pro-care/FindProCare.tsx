import {DefaultPageWrapper} from '../../components/default-page-wrapper/DefaultPageWrapper';
import {Pressable, StyleSheet, Text, View} from '../../components';
import {useString} from '../i18n';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, Routes} from '../navigation';
import {useDeviceBackClick} from '../../hooks/useDeviceBackClick.hook';
import {openExternalLink} from '../../utils';

const NAFSHI_SITE_URL = 'https://www.nafshi.info';
const OTEF_OREF_URL = 'https://www.otef-oref.co.il';
const FILL_FORM_URL = 'https://form.jotform.com/232812662439358';

export const FindProCare = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, Routes.FindProCare>) => {
  function openSite(url: string) {
    openExternalLink(url);
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
      title={useString('findProCare.header')}
      onBackButtonClick={onBack}
      enableScroll>
      <View style={styles.mainView}>
        <Text style={styles.text}>{useString('findProCare.portalsTitle')}</Text>
        <Pressable
          onPress={() => openSite(NAFSHI_SITE_URL)}
          style={styles.button}>
          <Text style={styles.text}>
            {useString('findProCare.nafshiButton')}
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => openSite(OTEF_OREF_URL)}>
          <Text style={styles.text}>
            {useString('findProCare.otefOrefButton')}
          </Text>
        </Pressable>
        <Text style={styles.text}>
          {useString('findProCare.healthFundsTitle')}
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => openSite(FILL_FORM_URL)}>
          <Text style={styles.text}>
            {useString('findProCare.fillFormButton')}
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
    gap: 16,
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
