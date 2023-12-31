import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TextCenter,
  View,
} from '../index';
import {ReactNode} from 'react';
import {LanguageSelector} from '../language-selector/LanguageSelector';
import {AppHeader, ArrowLeft} from '../images';
import {useLocale} from '../../features/i18n/useLocale';

export interface DefaultPageWrapperProps {
  title?: string;
  onBackButtonClick?: () => void;
  children: ReactNode;
  enableScroll?: boolean;
}

const SUB_HEADER_LOGO_HEIGHT = 50;

export const DefaultPageWrapper = ({
  title = '',
  onBackButtonClick,
  children,
  enableScroll = false,
}: DefaultPageWrapperProps) => {
  const showBackButton = !!onBackButtonClick;
  const {isRtl} = useLocale();

  return (
    <View style={styles.root}>
      <AppHeader width="100%" height={132} style={styles.appHeaderIcon} />
      <View style={[styles.header, isRtl && {flexDirection: 'row-reverse'}]}>
        <Pressable
          style={styles.backContainer}
          onPress={showBackButton ? onBackButtonClick : undefined}>
          {showBackButton && <ArrowLeft onPress={onBackButtonClick} />}
        </Pressable>
        <TextCenter
          style={[styles.title, isRtl && {flexDirection: 'row-reverse'}]}>
          {title}
        </TextCenter>
        <LanguageSelector />
      </View>
      <View style={styles.subHeaderLogoContainer}>
        <Image
          source={require('./kfarLogo.png')}
          style={styles.subHeaderLogo}
        />
      </View>
      {enableScroll && (
        <ScrollView>
          <View style={styles.children}>{children}</View>
        </ScrollView>
      )}
      {!enableScroll && <View style={styles.children}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, position: 'relative'},
  appHeaderIcon: {
    position: 'absolute',
  },
  header: {
    marginTop: 20,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backContainer: {
    minHeight: 24,
    minWidth: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FDFEFB',
    marginLeft: 24,
  },
  subHeaderLogoContainer: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeaderLogo: {
    height: 50,
    aspectRatio: 3.3,
  },
  children: {
    flex: 1,
    marginTop: 8,
  },
});
