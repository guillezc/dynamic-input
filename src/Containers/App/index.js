import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import { getTrackingStatus, requestTrackingPermission } from 'react-native-tracking-transparency'
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Router from '../../Navigation/Router';

const App = () => {
  useEffect(() => {
    const _getTrackingStatus = async () => {
      const trackingStatus = await getTrackingStatus();
      if (trackingStatus === 'not-determined') {
        requestTrackingPermission()
      }
    }
    _getTrackingStatus()
  }, [])

  return (
    <SafeAreaProvider >
      <StatusBar barStyle='dark-content' />
      <Router />
    </SafeAreaProvider>
  );
};

export default App;
