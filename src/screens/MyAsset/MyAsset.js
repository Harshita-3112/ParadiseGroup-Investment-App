import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MyAsset = ({route}) => {
  const {image} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 20}}>
      <Text
        style={{
          color: '#000',
          fontSize: 18,
          fontWeight: '500',
          marginTop: 20,
          textAlign: 'center',
        }}>
        My Asset
      </Text>
      <Text style={{color: '#B3B3B3', marginTop: 30}}>
        Your total asset portfolio
      </Text>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Text style={{color: '#000', fontSize: 20}}>N203,935</Text>
        <View style={{flexDirection: 'row'}}>
          <Entypo name="arrow-up" size={18} color={'#00B907'} />
          <Text style={{color: '#00B907'}}>+2%</Text>
        </View>
      </View>
      <Text
        style={{color: '#000', fontSize: 18, fontWeight: '500', marginTop: 30}}>
        Current Plans
      </Text>
      <Image
        source={image}
        style={{
          resizeMode: 'contain',
          height: 160,
          width: 'auto',
          borderRadius: 12,
          marginTop: 20,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>See All Plans</Text>
        <AntDesign
          name="arrowright"
          size={15}
          color={'#FE555D'}
          style={{alignSelf: 'center', marginLeft: 6}}
        />
      </View>
      <Text
        style={{color: '#000', fontSize: 18, fontWeight: '500', marginTop: 20}}>
        History
      </Text>
      <Text style={{color: '#000', fontWeight: '500', marginTop: 20}}>
        Rp 200.000
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 6,
        }}>
        <Text style={{color: '#B3B3B3', fontSize: 12}}>Buy "APPL" Stock </Text>
        <Text style={{color: '#B3B3B3', fontSize: 12}}>TUE 22 Jun 2020</Text>
      </View>
      <View
        style={{
          borderWidth: 0.3,
          borderColor: '#e7e7e7',
          marginTop: 10,
        }}></View>
    </View>
  );
};

export default MyAsset;

const styles = StyleSheet.create({});
