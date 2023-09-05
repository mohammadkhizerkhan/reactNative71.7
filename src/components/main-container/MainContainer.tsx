import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Styles} from './MainContainer.styles';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = (props: MainContainerProps) => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.childContainer}>{props.children}</View>
    </SafeAreaView>
  );
};

export default MainContainer;
