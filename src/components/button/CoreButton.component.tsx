/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {Styles} from './XB_CoreButton.styles';

enum ButtonTypes {
  'primary',
  'secondary',
  'outline',
}

interface ButtonProps {
  buttonLabel: string;
  buttonType?: string | ButtonTypes;
  buttonColor?: string;
  textColor?: string;
  disabled?: boolean;
  onPress?: () => void;
  buttonBodyStyle?: StyleProp<ViewStyle>;
  fontSize?: number;
  testID?: string;
}

const GetStyleByType = (
  buttonType: string | ButtonTypes,
  disabled?: boolean,
  buttonColor?: string,
  buttonBodyStyle?: StyleProp<ViewStyle>,
) => {
  switch (buttonType) {
    case 'primary':
      return [Styles.buttonBody, buttonBodyStyle];

    case 'secondary':
      return [Styles.buttonBody, buttonBodyStyle];
    case 'outline':
      return [Styles.buttonBody, buttonBodyStyle];
  }
};

const GetTextStyleByType = (
  buttonType: string,
  disabled?: boolean,
  textColor?: string,
) => {
  switch (buttonType) {
    case 'primary':
      return [
        Styles.text,
        // {
        //   color: disabled
        //     ? theme.palette.white
        //     : textColor
        //     ? textColor
        //     : theme.palette.white,
        // },
      ];
    case 'secondary':
      return [
        Styles.text,
        // {
        //   color: disabled
        //     ? theme.palette.secondaryLightGray
        //     : textColor
        //     ? textColor
        //     : theme.palette.orange,
        // },
      ];
    case 'outline':
      return [
        Styles.text,
        // {
        //   color: disabled
        //     ? theme.palette.secondaryLightGray
        //     : theme.palette.orange,
        //   borderColor: disabled
        //     ? theme.palette.secondaryLightGray
        //     : theme.palette.orange,
        // },
      ];
  }
};

const CoreButton = ({
  buttonLabel,
  buttonType,
  textColor,
  disabled,
  buttonColor,
  onPress,
  buttonBodyStyle,
  testID,
  fontSize,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={GetStyleByType(buttonType, disabled, buttonColor, buttonBodyStyle)}
      onPress={onPress}
      disabled={disabled}
      testID={`${testID}-BTN`}>
      <Text
        testID={`${testID}-BTN`}
        allowFontScaling={false}
        style={[
          GetTextStyleByType(buttonType, disabled, textColor),
          {fontSize},
        ]}>
        {buttonLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default CoreButton;
