import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, hp, wp} from '../../../constants';
import {Gap} from '../../atoms';

const Card = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.picture}>
        {item.external == true ? (
          <Image source={{uri: item.image[0]}} style={styles.image} />
        ) : (
          <Image source={item.image[0]} style={styles.image} />
        )}
        <View style={styles.label}></View>
        <Text style={styles.labelText}>{item.city}</Text>
      </View>
      <View style={styles.contentText}>
        <Gap height={hp(1)} />
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.info}>
          <Text style={styles.rate}>{item.rate}/10</Text>
          <Text style={styles.review}>({item.review})</Text>
        </View>
        <Text style={styles.promo}>{item.normalPrice}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: colors.white,
    marginHorizontal: 8,
    marginVertical: hp(1.5),
    width: wp(45),
    height: hp(32),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  picture: {
    height: '50%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  label: {
    position: 'absolute',
    minWidth: 75,
    height: 22.5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colors.black,
    opacity: 0.5,
  },
  labelText: {
    position: 'absolute',
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 2.5,
    height: 25,
  },
  contentText: {
    flex: 1,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: hp(2.2),
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  info: {
    flexDirection: 'row',
  },
  title: {
    fontSize: hp(2),
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  rate: {
    fontSize: hp(1.9),
    color: colors.blue2,
    textTransform: 'capitalize',
    fontWeight: '600',
  },
  review: {
    fontSize: hp(1.9),
    color: colors.gray,
    textTransform: 'capitalize',
    marginLeft: 4,
    fontWeight: '600',
  },
  promo: {
    fontSize: hp(1.9),
    color: colors.grayMuda,
    textTransform: 'capitalize',
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: hp(2.2),
    textTransform: 'capitalize',
    fontWeight: '500',
    color: colors.orange,
  },
});
