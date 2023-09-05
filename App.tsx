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
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {downloadPDF, downloadURLPdf} from './src/utils';
import {dummyPdf} from './src/utils/dummypdf';
import {LoginScreen} from './src/screens/login';
import {MMKV} from 'react-native-mmkv';
import PDFView from 'react-native-view-pdf';
import {createNavigationContainerRef} from '@react-navigation/native';
import RootNavigation from './src/root.navigation';
import {HomeScreen} from './src/screens';
import {MainContainer} from './src/components';

export const storage = new MMKV();
export const navigationRef = createNavigationContainerRef<any>();

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

  const resourceType = 'url';
  const resources = {
    file:
      Platform.OS === 'ios'
        ? 'downloadedDocument.pdf'
        : '/sdcard/Download/downloadedDocument.pdf',
    url: 'https://www.sbicard.com/sbi-card-en/assets/docs/pdf/membership_MITC.pdf',
    base64: 'JVBERi0xLjMKJcfs...',
  };

  return (
    <MainContainer>
      {/* <HomeScreen /> */}
      <RootNavigation />
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={{height: 500}}>
          <PDFView
            fadeInDuration={250.0}
            style={{flex: 1}}
            resource={resources[resourceType]}
            resourceType={resourceType}
            onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
            onError={error => console.log('Cannot render PDF', error)}
          />
        </View>

        <Button title="download PDF" onPress={downloadPdf} />
        <Button title="decrement" onPress={decrement} />
        <Button title="get aes" onPress={getAesKey} />
        <Button title="ecrypt payload" onPress={encrypt} />
        <Button title="set mmkv" onPress={() => storage.set('name', 'Marc')} />
        <Button
          title="get mmkv"
          onPress={() => {
            const val = storage.getString('name');
            console.log('========= get mmkv =======<', val);
          }}
        />
        <LoginScreen />
      </ScrollView> */}
    </MainContainer>
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
