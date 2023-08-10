/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  NativeModules,
  Button,
  Platform,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {downloadURLPdf} from './src/utils';
import {LoginScreen} from './src/screens/login';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('=====>', NativeModules.Counter);
  if (Platform.OS === 'ios') {
    NativeModules.Counter.increment(value => {
      console.log('------ getting from native side', value);
    });
    console.log('------>', NativeModules.Counter.getConstants());
  }
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const decrement = async () => {
    // try {
    //   const response = await NativeModules.Counter.decrement();
    //   console.log('====decrement>>', response);
    // } catch (error) {
    //   console.log('====decrementError>>', error);
    // }
    const object = {mobileNo: '345', name: 'khan'};
    NativeModules.Counter.processObject(object);
    NativeModules.Counter.greeting('khan');
  };

  const getAesKey = async () => {
    const key = await NativeModules.Counter.aesSecretKey();
    console.log('aes symetric key', key);
    return key;
  };

  const encrypt = async () => {
    const aesKey = await getAesKey();
    const payload = JSON.stringify({
      user_id: 'clik5ap3900060i5a72ojcrqw',
    });
    const encrypted = await NativeModules.Counter.aesEncrypt(payload, aesKey);
    console.log('======+>', encrypted);
  };

  const downloadPdf = async () => {
    // await downloadPDF(dummyPdf, 'dummyPDF');
    await downloadURLPdf(
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Button title="decrement" onPress={decrement} />
        <Button title="download PDF" onPress={downloadPdf} />
        <Button title="get aes" onPress={getAesKey} />
        <Button title="ecrypt payload" onPress={encrypt} />

        <LoginScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
