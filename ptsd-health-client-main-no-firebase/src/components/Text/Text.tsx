import React from 'react';
import {Text as RNText, TextProps} from 'react-native';

export const Text = (props: TextProps) => {
  const {style, ...restOfProps} = props;

  return (
    <RNText
      {...restOfProps}
      style={[{color: '#36454f', fontSize: 16}, style]}
    />
  );
};
