import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, hp} from '../../../constants';
import {
  ICAkun,
  ICAkunBlue,
  ICAwal,
  ICAwalBlue,
  ICInbox,
  ICInboxBlue,
  ICPesanan,
  ICPesananBlue,
  ICSimpan,
  ICSimpanBlue,
} from '../../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Awal') {
      return active ? <ICAwalBlue /> : <ICAwal />;
    }
    if (title === 'Simpan') {
      return active ? <ICSimpanBlue /> : <ICSimpan />;
    }
    if (title === 'Pesanan') {
      return active ? <ICPesananBlue /> : <ICPesanan />;
    }
    if (title === 'Inbox') {
      return active ? <ICInboxBlue /> : <ICInbox />;
    }
    if (title === 'Akun') {
      return active ? <ICAkunBlue /> : <ICAkun />;
    }
    return active ? <ICAwalBlue /> : <ICAwal />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    paddingVertical: hp(1),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  text: active => ({
    fontSize: hp(1.5),
    color: active ? colors.blue3 : colors.grayMuda,
  }),
});
