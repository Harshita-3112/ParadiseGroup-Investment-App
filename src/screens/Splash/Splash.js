import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/icons/image.png')}
        style={{
          height: 100,
          width: 120,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
