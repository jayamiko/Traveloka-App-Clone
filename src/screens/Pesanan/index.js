import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ICReceipt} from '../../assets';
import {Header} from '../../components';
import {colors, wp} from '../../constants';

export const Pesanan = () => {
  return (
    <View style={styles.page}>
      <Header
        placeholder={'Cari item, destinasi, fitur...'}
        iconRight={<ICReceipt />}
        paddingRight={wp(5)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
