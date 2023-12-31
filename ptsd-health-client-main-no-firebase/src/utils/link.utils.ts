import {Linking} from 'react-native';

export function openExternalLink(url: string) {
  Linking.openURL(url);
}
