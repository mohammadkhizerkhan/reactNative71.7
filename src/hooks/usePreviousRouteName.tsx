import {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function usePreviousRoute() {
  const navigation = useNavigation();
  const [prevRoute, setPrevRoute] = useState('');
  const previousRoute = useRef('');

  useEffect(() => {
    previousRoute.current = prevRoute;
  }, [prevRoute]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', e => {
      const currentRoute = e.data.state.routes[e.data.state.index].name;
      setPrevRoute(currentRoute);
    });

    return unsubscribe;
  }, [navigation]);

  return previousRoute;
}
