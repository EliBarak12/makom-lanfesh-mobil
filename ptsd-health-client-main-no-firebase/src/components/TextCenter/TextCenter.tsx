import React from 'react';
import {TextProps} from 'react-native';
import {Text} from '../Text/Text';

export const TextCenter = (props: TextProps) => {
  const {style, ...restOfProps} = props;

  return <Text {...restOfProps} style={[{textAlign: 'center'}, style]} />;
};
