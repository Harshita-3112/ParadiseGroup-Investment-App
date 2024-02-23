import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Transaction from '../Transaction/Transaction';
import Account from '../Account/Account';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <AntDesign name={'home'} size={22} color={'#000'} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <AntDesign name={'search1'} size={22} color={'#000'} />
          ),
        }}
        name="Products"
        component={Products}
      />
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name={'account-outline'}
              size={22}
              color={'#000'}
            />
          ),
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
