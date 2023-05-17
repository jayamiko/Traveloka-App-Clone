import React, {useEffect} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Profile} from '../../assets';
import {colors, hp} from '../../constants';

export const SplashProfile = ({navigation}) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('SplashProfile');
  //   }, 300000);
  // }, []);

  const icons = [
    require('../../assets/icon/whatsapp.png'),
    require('../../assets/icon/telegram.png'),
    require('../../assets/icon/linkedin.png'),
    require('../../assets/icon/instagram.png'),
    require('../../assets/icon/twitter.png'),
    require('../../assets/icon/facebook.png'),
    require('../../assets/icon/youtube.png'),
  ];

  return (
    <View style={styles.page}>
      <Image source={Profile} style={styles.image} />
      <View style={styles.colCenter}>
        <Text style={styles.name}>Jaya Miko Yoga Pratama</Text>
        <View style={styles.rowCenter}>
          {icons.map((icon, i) => {
            return <Image key={i} source={icon} style={styles.icon} />;
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.blue2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 160,
    borderWidth: 4,
    borderColor: colors.white,
    borderRadius: 160,
  },
  colCenter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 22,
    height: hp(3),
    marginRight: 8,
    borderWidth: 1,
    shadowColor: colors.black,
    shadowOffset: {width: 2, height: 8},
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 8,
  },
  name: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
