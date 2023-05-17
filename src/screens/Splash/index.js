import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {LifeYourWay, TravelokaSplash} from '../../assets';
import {colors} from '../../constants';

export const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Introduction');
    }, 3000);
  }, []);

  return (
    <View style={styles.page_padding}>
      <Image source={TravelokaSplash} style={styles.image} />
      <Image source={LifeYourWay} style={styles.slogan} />
    </View>
  );
};

const styles = StyleSheet.create({
  page_padding: {
    backgroundColor: colors.blue2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 280,
  },
  slogan: {
    position: 'absolute',
    width: 320,
    height: 80,
    bottom: 10,
  },
});
