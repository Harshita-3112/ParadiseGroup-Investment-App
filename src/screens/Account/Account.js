import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native-gesture-handler';

const Account = () => {
  const renderUserData = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.bar}>
        <View style={{flexDirection: 'row'}}>
          {item.icon}
          <Text
            style={{
              color: '#000',
              fontWeight: '400',
              fontSize: 15,
              marginLeft: 20,
            }}>
            {item.text}
          </Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={22} color={'#000'} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F9', paddingHorizontal: 20}}>
      <MaterialIcons
        name="keyboard-arrow-left"
        size={26}
        color="#000"
        style={{marginTop: 10}}
      />

      <Text
        style={{
          color: '#000',
          fontSize: 22,
          marginTop: 20,
          fontWeight: '700',
        }}>
        Profile
      </Text>
      <Image
        source={require('../../assets/icons/Ellipse.png')}
        style={{
          height: 100,
          width: 100,
          borderRadius: 50,
          resizeMode: 'contain',
          alignSelf: 'center',
          marginTop: 20,
        }}
      />
      <Text
        style={{
          color: '#000',
          fontSize: 15,
          marginTop: 10,
          fontWeight: '500',
          textAlign: 'center',
        }}>
        Jonas Macroni
      </Text>
      <Text
        style={{
          color: '#000',
          fontSize: 12,
          textAlign: 'center',
        }}>
        Expert
      </Text>

      <FlatList data={UserData} renderItem={renderUserData} />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  bar: {
    height: 45,
    width: 'auto',
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 4,
    padding: 10,
    justifyContent: 'space-between',
  },
});

const UserData = [
  {
    icon: <MaterialIcons name="contact-page" size={22} color={'#333'} />,
    text: 'Contact Info',
  },

  {
    icon: <MaterialIcons name="source" size={22} color={'#333'} />,
    text: 'Source of Funding Info',
  },

  {
    icon: <FontAwesome name="bank" size={22} color={'#333'} />,
    text: 'Bank Account Info',
  },

  {
    icon: (
      <MaterialCommunityIcons name="file-document" size={22} color={'#333'} />
    ),
    text: 'Document Info',
  },

  {
    icon: <MaterialIcons name="settings" size={22} color={'#333'} />,
    text: 'Settings',
  },
];
