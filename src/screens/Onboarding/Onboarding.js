import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Onboarding = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 24}}>
      <Image
        source={require('../../assets/icons/Asset.png')}
        style={{
          height: 180,
          width: 'auto',
          resizeMode: 'contain',
          marginTop: '50%',
        }}
      />
      <Text
        style={{
          color: '#000',
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>{`Stay on top of your finance with us.`}</Text>
      <Text
        style={{
          color: '#4f4f4f',
          fontSize: 16,
          textAlign: 'center',
          marginTop: 10,
        }}>
        {`We are your new financial Advisors \n to recommend the best investments for\n you.`}
      </Text>
      <TouchableOpacity style={styles.GoogleLogin}>
        <Image
          source={require('../../assets/icons/search.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  GoogleLogin: {
    height: 50,
    width: 'auto',
    borderWidth: 1,
    borderColor: '#9e9e9e',
    borderRadius: 16,
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 40,
    resizeMode: 'contain',
  },
});
