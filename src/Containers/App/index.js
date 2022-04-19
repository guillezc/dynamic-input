import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Router from '../../Navigation/Router';

const App = () => {
  return (
    <SafeAreaProvider >
      <StatusBar />
      <Router />
    </SafeAreaProvider>
  );
};

export default App;
