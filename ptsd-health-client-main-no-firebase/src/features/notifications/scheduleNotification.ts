import notifee, {TriggerType, AndroidStyle} from '@notifee/react-native';
import {useString} from '../i18n';
import {BoolStorageKeys, getStorageValue} from '../storage/storage';

export const cancelAllPendingNotifications = () =>
  notifee.cancelTriggerNotifications();

export const useNotificationsStrings = (notificationId: string) => {
  return {
    channelName: useString(`notifications.${notificationId}.channelName`),
    title: useString(`notifications.${notificationId}.title`),
    body: useString(`notifications.${notificationId}.body`),
  }
}

export const scheduleNotification = async (notificationStrings: ReturnType<typeof useNotificationsStrings>, afterDays: number) => {
  const areNotificationsEnabled = getStorageValue(BoolStorageKeys.AreNotificationsEnabled);

  if (areNotificationsEnabled) {
    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: `reminder-${notificationStrings.channelName}`,
      name: notificationStrings.channelName,
    });

    // Display a notification
    await notifee.createTriggerNotification(
      {
        title: notificationStrings.title,
        android: {
          channelId,
          // pressAction is needed if you want the notification to open the app when pressed
          pressAction: {
            id: 'default',
          },
          smallIcon: 'ic_notification',
          largeIcon: 'ic_launcher',
          style: { type: AndroidStyle.BIGTEXT,
                   text: notificationStrings.body },
        },
      },
      {
        type: TriggerType.TIMESTAMP,
        timestamp: new Date().getTime() + afterDays * 24 * 60 * 60 * 1000,
        alarmManager: true,
      },
    );
  }
};
