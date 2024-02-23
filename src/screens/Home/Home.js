import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PlanCard from '../../components/PlanCard/PlanCard';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const image1 = require('../../assets/icons/Portfolio1.png');
const image2 = require('../../assets/icons/Card2.png');
const image3 = require('../../assets/icons/Card3.png');

const Home = () => {
  const navigation = useNavigation();
  const handleCard1 = () => {
    navigation.navigate('MyAsset', {image: image1});
  };

  const handleCard2 = () => {
    navigation.navigate('MyAsset', {image: image2});
  };

  const handleCard3 = () => {
    navigation.navigate('MyAsset', {image: image3});
  };

  const handleNotification = () => {
    navigation.navigate('Notification');
  };

  return (
    <View style={{backgroundColor: '#fff', paddingHorizontal: 20, flex: 1}}>
      <View style={styles.header}>
        <FontAwesome6 name="bars" size={20} color={'#000'} />
        <TouchableOpacity onPress={handleNotification}>
          <Ionicons name="notifications-outline" size={22} color={'#000'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Welcome, Jessie.</Text>
      <View style={styles.bar}>
        <Text style={{color: '#fff'}}>Your total asset portfolio</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
          }}>
          <Text style={{color: '#fff', fontSize: 20}}>N203,935</Text>
          <View
            style={{
              height: 30,
              width: 100,
              borderRadius: 13,
              backgroundColor: '#FEFFFE',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#2FA187',
                textAlign: 'center',
                fontSize: 12,
              }}>
              Invest now
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
          Best Plans
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#FE555D'}}>See All</Text>
          <AntDesign
            name="arrowright"
            size={15}
            color={'#FE555D'}
            style={{alignSelf: 'center', marginLeft: 6}}
          />
        </View>
      </View>
      <View>
        <ScrollView horizontal>
          <TouchableOpacity onPress={handleCard1}>
            <PlanCard photo={require('../../assets/icons/card.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCard2}>
            <PlanCard photo={require('../../assets/icons/Card2.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCard3}>
            <PlanCard photo={require('../../assets/icons/Card3.png')} />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Text
        style={{
          color: '#000',
          fontSize: 20,
          marginTop: 20,
          fontWeight: '400',
        }}>
        Investment Guide
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: '#4f4f4f',
              fontSize: 15,
              marginTop: 20,
              fontWeight: '500',
            }}>
            Basic type of investments
          </Text>
          <Text
            style={{
              color: '#474747',
              fontSize: 12,
              marginTop: 4,
              fontWeight: '400',
            }}>{`This is how you set your foot for 2020\nStock market recession. What next...`}</Text>
        </View>
        <Image
          source={require('../../assets/icons/Ellipse1.png')}
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
      </View>
      <View
        style={{borderWidth: 0.3, borderColor: '#e7e7e7', marginTop: 8}}></View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: '#4f4f4f',
              fontSize: 15,
              marginTop: 20,
              fontWeight: '500',
            }}>
            How much can you start with..
          </Text>
          <Text
            style={{
              color: '#474747',
              fontSize: 12,
              marginTop: 4,
              fontWeight: '400',
            }}>{`What do you like to see? it's a very\ndifferent market from 2018.The way...`}</Text>
        </View>
        <Image
          source={require('../../assets/icons/Ellipse2.png')}
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  text: {
    fontSize: 24,
    color: '#000',
    fontWeight: '500',
    marginTop: 20,
  },
  bar: {
    height: 100,
    width: 'auto',
    backgroundColor: '#2FA187',
    borderRadius: 16,
    marginTop: 20,
    padding: 16,
  },
});
