import React, {useRef, useState} from 'react';
import PagerView from 'react-native-pager-view';
import {CirclePagination} from '../../components/circle-pagination/CirclePagination';
import {
  Checkbox,
  StyleSheet,
  TextCenter,
  View,
  Button,
  ScrollView,
} from '../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Routes} from '../navigation';
import {
  BoolStorageKeys,
  DEFAULT_ARE_NOTIFICATIONS_ENABLED,
  setStorageValue,
} from '../storage/storage';
import {DefaultPageWrapper} from '../../components/default-page-wrapper/DefaultPageWrapper';
import {useString} from '../i18n';
import {Door, Safety} from '../../components/images';
import notifee, {AuthorizationStatus} from '@notifee/react-native';
import {useLocale} from '../i18n/useLocale';

const NUM_OF_TUTORIAL_PAGES = 2;

export const Tutorial = ({navigation}: NativeStackScreenProps<any>) => {
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const pagerViewRef = useRef<PagerView>(null);

  const [checkedNotifications, setCheckedNotifications] = React.useState(
    DEFAULT_ARE_NOTIFICATIONS_ENABLED,
  );

  function onPageViewerChange(pageNumber: number) {
    if (pageNumber === selectedPage) {
      return;
    }

    setSelectedPage(pageNumber);
  }

  function onOutsidePageChange(pageNumber: number) {
    pagerViewRef?.current?.setPage(pageNumber);
  }

  async function onTutorialFinish() {
    if (checkedNotifications) {
        const settings = await notifee.requestPermission();
        if (settings.authorizationStatus === AuthorizationStatus.DENIED) {
          setCheckedNotifications(false);
          setStorageValue(BoolStorageKeys.AreNotificationsEnabled, false);
        }
    }

    navigation.replace(Routes.Questionnaire);
    setStorageValue(BoolStorageKeys.IsTutorialFinished, true);
  }

  function onNotificationsCheck() {
    const newValue = !checkedNotifications;

    setCheckedNotifications(!checkedNotifications);
    setStorageValue(BoolStorageKeys.AreNotificationsEnabled, newValue);
  }

  const {isRtl} = useLocale();

  return (
    <DefaultPageWrapper title={useString('tutorial.appHeader')}>
      <PagerView
        ref={pagerViewRef}
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={page => onPageViewerChange(page.nativeEvent.position)}>
        <View style={styles.view} key="0">
          <TextCenter style={styles.title}>
            {useString('tutorial.1.header')}
          </TextCenter>
          <TextCenter style={styles.text}>
            {useString('tutorial.1.text')}
          </TextCenter>
          <Door style={styles.icon} />
        </View>

        <ScrollView>
          <View style={styles.view} key="1">
            <TextCenter style={styles.title}>
              {useString('tutorial.2.header')}
            </TextCenter>
            <TextCenter style={styles.text}>
              {useString('tutorial.2.text')}
            </TextCenter>
            <Safety style={styles.icon} />
            <View
              style={[
                styles.notificationRow,
                isRtl && {flexDirection: 'row-reverse'},
              ]}>
              <Checkbox
                status={checkedNotifications ? 'checked' : 'unchecked'}
                onPress={onNotificationsCheck}
              />
              <TextCenter>{useString('tutorial.3.notifications')}</TextCenter>
            </View>
            <Button
              style={styles.continueButton}
              mode="contained"
              onPress={onTutorialFinish}>
              {useString('tutorial.continue')}
            </Button>
          </View>
        </ScrollView>
      </PagerView>
      <CirclePagination
        selectedPage={selectedPage}
        numOfPages={NUM_OF_TUTORIAL_PAGES}
        onPageClick={onOutsidePageChange}
      />
    </DefaultPageWrapper>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
  },
  view: {
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    gap: 12,
    alignItems: 'center',
  },
  notificationSection: {
    paddingTop: 120,
    width: '100%',
    alignItems: 'center',
    gap: 40,
  },
  icon: {
    marginTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  notificationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  continueButton: {
    width: '100%',
    padding: 2,
  },
});
