import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './src/screens/Onboarding/Onboarding';
import Splash from './src/screens/Splash/Splash';
import RouteNavigator from './src/screens/RouteNavigator/RouteNavigator';

const App = () => {
  const Stack = createStackNavigator();
  return <RouteNavigator />;
};

export default App;

const styles = StyleSheet.create({});
