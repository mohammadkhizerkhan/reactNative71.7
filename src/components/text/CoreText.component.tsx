import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {Styles} from './XB_Text.styles';

interface TextProps {
  textStyle?: StyleProp<TextStyle>;
  children: React.ReactNode;
  testID?: string;
  numberOfLines?: number;
  onPress?: () => void;
  isMaskField?: boolean;
}

const CoreText = ({
  textStyle,
  children,
  testID,
  numberOfLines,
  onPress,
  isMaskField,
  ...rest
}: TextProps) => {
  return (
    <Text
      testID={testID}
      style={[Styles.text, textStyle]}
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      {...rest}
      onPress={onPress}>
      {children}
    </Text>
  );
};

export default CoreText;
