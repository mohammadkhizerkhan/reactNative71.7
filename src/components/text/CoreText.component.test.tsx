import React from 'react';
import {render, screen} from '@testing-library/react-native';
import CoreText from './CoreText.component';

describe('should haveText Component', () => {
  it('render text correctly', () => {
    const Text = render(<CoreText>hello</CoreText>);
    expect(screen.queryByText('hello')).not.toBeNull();
    expect(screen.queryByText('hello'));
    expect(Text.getByText('hello')).toBeTruthy();
    expect(Text).toMatchSnapshot();
  });
});
