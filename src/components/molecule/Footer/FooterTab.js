import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {HStack} from 'native-base';
import {colors} from '../../../constants';

function FooterTab({drawer, item}) {
  return (
    <HStack bg="white" style={styles.footer} safeAreaBottom shadow={10}>
      <View style={styles.containerFooter}>
        <View>
          <Text style={styles.textGray}>Harga/kamar/malam mulai dari</Text>
          <Text style={styles.textPrice}>{item.price}</Text>
          <Text style={styles.textGrayBold}>Termasuk Pajak</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonRoom}
            onPress={() => drawer.current.openDrawer()}>
            <Text style={styles.textButton}>Pilih Kamar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </HStack>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 75,
    padding: 6,
  },
  containerFooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textGray: {
    color: colors.grayMuda,
    fontSize: 14,
  },
  textPrice: {
    color: colors.orange,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textGrayBold: {
    color: colors.grayMuda,
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    width: 100,
    justifyContent: 'center',
  },
  buttonRoom: {
    width: '100%',
    backgroundColor: colors.orange,
    padding: 8,
    borderRadius: 4,
  },
  textButton: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default FooterTab;
