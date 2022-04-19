import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from './RootNavigation';

import Pin from '../Containers/Pin'

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer ref={navigationRef}>
    <Stack.Navigator>
      <Stack.Screen name='Pin' component={Pin} />
    </Stack.Navigator>
  </NavigationContainer>
  )
};

export default Router;
