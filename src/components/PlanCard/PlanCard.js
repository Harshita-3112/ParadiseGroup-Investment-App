import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PlanCard = ({photo}) => {
  return (
    <View style={styles.card}>
      <Image
        source={photo}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: 12,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

export default PlanCard;

const styles = StyleSheet.create({
  card: {
    height: 130,
    width: 105,
    borderRadius: 12,
    marginRight: 16,
    marginTop: 15,
  },
});
