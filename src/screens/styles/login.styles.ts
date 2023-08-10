import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderBottomColor: 'darkGrey',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 3,
    marginBottom: 5,
  },
  borderLine: {
    borderBottomColor: 'blue',
    borderWidth: 2,
    marginVertical: 20,
  },
  button: {
    padding: 10,
    borderColor: 'blue',
    borderWidth: 2,
    marginLeft: 0,
    marginRight: 0,
  },
  formContainer: {
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'lightGray',
    borderRadius: 10,
    padding: 20,
  },
  inputContainer: {
    // backgroundColor: 'lightblue',
  },
  errorText: {
    color: 'red',
  },
});
