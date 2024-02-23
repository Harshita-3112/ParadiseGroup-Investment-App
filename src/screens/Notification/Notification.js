import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Notification = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 20}}>
      <MaterialIcons
        name="keyboard-arrow-left"
        size={26}
        color="#000"
        style={{marginTop: 10}}
      />

      <Text
        style={{
          color: '#000',
          fontSize: 26,
          marginTop: 20,
          fontWeight: '500',
        }}>
        Notification
      </Text>

      <View style={{flexDirection: 'row', marginTop: 30}}>
        <Image
          source={require('../../assets/icons/Rectangle.png')}
          style={styles.image}
        />
        {/* <Text style={{justifyContent: 'flex-end'}}> 15 min ago</Text> */}
        <Text
          style={{
            color: '#000',
            marginLeft: 18,
          }}>{`Apple stocks just increased\nCheck it out now.`}</Text>
      </View>

      <View
        style={{borderWidth: 0.3, borderColor: '#e7e7e7', marginTop: 8}}></View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    borderRadius: 16,
    resizeMode: 'contain',
  },
});
