import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../constants';
import CarouselComponent from '../../components/carousel/carousel';

export const Introduction = ({navigation}) => {
  return (
    <View style={styles.page_padding}>
      <CarouselComponent />
      <View style={styles.bottom}>
        <Text style={styles.text}>Akses Penuh Ke Fitur Yang Lebih Lengkap</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MainApp')}>
          <Text style={styles.textButton}>Gabung ke Traveloka</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page_padding: {
    backgroundColor: colors.blue2,
    flex: 1,
    justifyContent: 'flex-start',
  },
  text: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  bottom: {
    backgroundColor: colors.white,
    height: '25%',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  button: {
    backgroundColor: colors.orange,
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
