import React, {useState} from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import CoreButton from '../../components/button/CoreButton.component';
import CoreText from '../../components/text/CoreText.component';
import {BUTTON_TYPE} from '../../constants';
import {styles} from '../styles/login.styles';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      const users = await response.json();
      console.log('users:', users);
    } catch (error) {
      console.log('error fetching users', error);
    }
  };

  const handlePasswordCheck = () => {
    return password && password.length <= 5;
  };

  const handleUserCheck = () => {
    // const result = userName ! ==''
    return userName !=='' && /\d/.test(userName);
  };
  return (
    <SafeAreaView>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          {userName && <CoreText>User Name:</CoreText>}
          <TextInput
            testID="userNameInput"
            value={userName}
            placeholder="enter the user name"
            style={styles.input}
            onChangeText={value => setUserName(value)}
          />
          {handleUserCheck() && (
            <CoreText textStyle={styles.errorText}>
              user name should not contain any digits.
            </CoreText>
          )}
          {password && <CoreText>Password:</CoreText>}
          <TextInput
            testID="passwordInput"
            value={password}
            placeholder="enter your password"
            style={styles.input}
            onChangeText={value => setPassword(value)}
          />
          {handlePasswordCheck() && (
            <CoreText textStyle={styles.errorText}>
              password should atleast have 5 characters.
            </CoreText>
          )}
        </View>
        <View style={styles.borderLine} />
        <CoreButton
          testID="submit"
          buttonLabel="submit"
          buttonBodyStyle={styles.button}
          buttonType={BUTTON_TYPE.PRIMARY}
          onPress={() => handleSubmit()}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
