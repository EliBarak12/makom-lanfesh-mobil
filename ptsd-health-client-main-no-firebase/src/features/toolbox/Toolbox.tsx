import {DefaultPageWrapper} from '../../components/default-page-wrapper/DefaultPageWrapper';
import {Pressable, StyleSheet, Text, View, ScrollView} from '../../components';
import {useString} from '../i18n';
import {RootStackParamList, Routes} from '../navigation';
import {useDeviceBackClick} from '../../hooks/useDeviceBackClick.hook';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {openExternalLink} from '../../utils';
import {useLocale} from '../i18n/useLocale';

const RELAX_MUSCLE_SITE_URL = 'https://www.youtube.com/watch?v=z2ZY1VEveU4';
const RELAX_BODY_SITE_URL = 'https://www.youtube.com/watch?v=vv2BourVYUM';
const CHAT_BOT_HEBREW_SITE_URL = 'https://wa.link/oh70id';
const CHAT_BOT_ENGLISH_SITE_URL = 'https://t.me/friend_first_aid_bot';

export const Toolbox = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, Routes.Toolbox>) => {
  function openSiteLink(siteUrl: string) {
    openExternalLink(siteUrl);
  }

  function onBack() {
    navigation.replace(Routes.GetSupport);
  }

  function handleDeviceBackPress() {
    onBack();

    return true;
  }

  useDeviceBackClick(handleDeviceBackPress, [onBack]);

  const {locale} = useLocale();

  return (
    <DefaultPageWrapper
      title={useString('toolbox.header')}
      onBackButtonClick={onBack}>
      <ScrollView>
        <View style={styles.mainView}>
          <Text style={styles.text}>{useString('toolbox.toolsHelpTitle')}</Text>

          <View>
            <Text style={styles.sectionTitle}>
              {useString('toolbox.relaxMuscleTitle')}
            </Text>
            <Text style={styles.text}>
              {useString('toolbox.relaxMuscleText')}
            </Text>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => openSiteLink(RELAX_MUSCLE_SITE_URL)}>
            <Text style={styles.buttonText}>
              {useString('toolbox.relaxMuscleButton')}
            </Text>
          </Pressable>

          <View>
            <Text style={styles.sectionTitle}>
              {useString('toolbox.relaxBodyTitle')}
            </Text>
            <Text style={styles.text}>
              {useString('toolbox.relaxBodyText')}
            </Text>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => openSiteLink(RELAX_BODY_SITE_URL)}>
            <Text style={styles.buttonText}>
              {useString('toolbox.relaxBodyButton')}
            </Text>
          </Pressable>

          <View>
            <Text style={styles.sectionTitle}>
              {useString('toolbox.botTitle')}
            </Text>
            <Text style={styles.text}>{useString('toolbox.botText')}</Text>
          </View>
          <Pressable
            style={styles.button}
            onPress={() =>
              openSiteLink(
                locale === 'en-US'
                  ? CHAT_BOT_ENGLISH_SITE_URL
                  : CHAT_BOT_HEBREW_SITE_URL,
              )
            }>
            <Text style={styles.buttonText}>
              {useString('toolbox.botButton')}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </DefaultPageWrapper>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 32,
    paddingTop: 12,
    alignItems: 'center',
    flex: 1,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 16,
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
