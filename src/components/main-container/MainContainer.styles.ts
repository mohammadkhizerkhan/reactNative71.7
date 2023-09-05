import {Dimensions, StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  childContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
