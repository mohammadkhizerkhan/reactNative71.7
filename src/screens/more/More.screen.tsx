import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomeScreen, RewardScreen} from '../index'; // Import your HomeScreen component
import {usePreviousRoute} from '../../hooks';

const MoreScreen = () => {
  const navigation = useNavigation();
  const routeName = usePreviousRoute();

  const previousRoute = routeName.current;
  const closeModal = () => {
    // Hide the modal
    console.log('=========>previousRoute', previousRoute);
    navigation.navigate(previousRoute as never, {} as never);
  };

  // Determine which component to display based on the previous tab
  let previousTabComponent;
  if (routeName.current === 'Home') {
    previousTabComponent = <HomeScreen />;
  } else if (routeName.current === 'Reward') {
    previousTabComponent = <RewardScreen />;
  } else {
    previousTabComponent = null; // You can handle other cases or provide a default component here
  }

  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {previousTabComponent}

      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        <View style={{backgroundColor: 'yellow', width: '100%'}}>
          <Text>Random Modal Text</Text>
          <Button onPress={closeModal} title="close modal" />
        </View>
      </View>
    </View>
  );
};

export default MoreScreen;
