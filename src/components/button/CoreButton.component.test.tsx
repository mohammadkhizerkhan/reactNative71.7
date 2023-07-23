import React from 'react';
import CoreButton from './CoreButton.component';
import {fireEvent, render} from '@testing-library/react-native';

describe('Button Component', () => {
  it('render primary button correctly', () => {
    const onPress = jest.fn();
    const primary = render(
      <CoreButton
        buttonLabel={'primry'}
        buttonType={'primary'}
        buttonColor={'red'}
        textColor={'white'}
        testID="BUTTON"
        onPress={() => onPress()}
      />,
    );
    const button = primary.getAllByTestId('BUTTON-BTN');
    expect(button).toHaveLength(2);
    fireEvent.press(button[0]);
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(primary).toMatchSnapshot();
  });

  it('render primary button correctly', () => {
    const primary = render(
      <CoreButton
        buttonLabel={'primary'}
        buttonType={'outline'}
        testID="BUTTON"
        disabled={true}
      />,
    );
    expect(primary).toMatchSnapshot();
  });

  it('render secondary button correctly', () => {
    const onPress = jest.fn();
    const secondary = render(
      <CoreButton
        buttonLabel="secondary"
        buttonType="secondary"
        buttonColor={'red'}
        textColor={'white'}
        onPress={() => onPress()}
        testID="BUTTON"
      />,
    );
    const button = secondary.getAllByTestId('BUTTON-BTN');
    expect(button).toHaveLength(2);
    fireEvent.press(button[0]);
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(secondary).toMatchSnapshot();
  });

  it('disabled button should work correctly', () => {
    const onPress = jest.fn();
    const disabled = render(
      <CoreButton
        buttonLabel="secondary"
        buttonType="secondary"
        buttonColor={'red'}
        textColor={'white'}
        testID="BUTTON"
        onPress={() => onPress()}
        disabled={true}
      />,
    );

    const button = disabled.getAllByTestId('BUTTON-BTN');
    expect(button).toHaveLength(2);
    expect(button).toBeTruthy();
    fireEvent.press(button[0]);
    expect(onPress).not.toHaveBeenCalled();
    expect(disabled).toMatchSnapshot();
  });
});
