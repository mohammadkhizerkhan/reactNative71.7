import React, {useCallback, useState} from 'react';
import {Button, Text, TextInput} from 'react-native';
import SampleComponent from './SampleComponent';

const HomeScreen = () => {
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0);

  // const resetCount = useCallback(() => {
  //   setCount(0);
  // }, []);

  const resetCount = () => {
    console.log('=====>');
  };
  // const updateCount = () => {
  //   setCount(prev => prev++);
  // };

  console.log('====>', count);

  return (
    <>
      <Text>this is Home screen</Text>
      <Text>count:{count}</Text>
      <TextInput
        value={title}
        placeholder="enter text"
        onChangeText={val => setTitle(val)}
      />
      <SampleComponent title={title} />
      <Button title="parent btn" onPress={() => setCount(prev => prev + 1)} />
    </>
  );
};

export default HomeScreen;
