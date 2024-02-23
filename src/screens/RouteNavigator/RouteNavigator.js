import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Splash from '../Splash/Splash';
import Onboarding from '../Onboarding/Onboarding';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';
import MyAsset from '../MyAsset/MyAsset';
import Notification from '../Notification/Notification';

const RouteNavigator = () => {
  // const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState(null);
  // if (loading) {
  //   return <Splash />;
  // }
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />

        <Stack.Screen name="MyAsset" component={MyAsset} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigator;

const styles = StyleSheet.create({});
