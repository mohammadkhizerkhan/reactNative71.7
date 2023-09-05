import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {navigationRef} from '../App';
import {HomeScreen, MoreScreen, RewardScreen} from './screens';
const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarLabel: route.name,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Reward" component={RewardScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
