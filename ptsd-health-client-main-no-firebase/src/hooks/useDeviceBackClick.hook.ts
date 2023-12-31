import {useEffect} from 'react';
import {BackHandler} from 'react-native';

export function useDeviceBackClick(
  handleDeviceBackPress: () => boolean,
  deps: Array<any>,
) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleDeviceBackPress);

    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleDeviceBackPress,
      );
    };
  }, deps);
}
