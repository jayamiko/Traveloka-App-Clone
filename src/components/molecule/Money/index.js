import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {ICPayLater, ICPindai, ICPoint, ICWallet} from '../../../assets';
import {colors, hp, wp} from '../../../constants';
import {ButtonIconText, Gap} from '../../atoms';

export const Money = () => {
  return (
    <View style={styles.container_point}>
      <ButtonIconText
        icon={<ICPoint width={wp(7)} height={wp(7)} />}
        title={'Points'}
        titleColor={colors.grayMuda}
        fontWeight={'bold'}
        fontSize={12}
      />
      <Gap width={wp(2.5)} />
      <ButtonIconText
        icon={<ICWallet width={wp(6)} height={wp(6)} />}
        title={'UANGKU'}
        titleColor={colors.grayMuda}
        fontWeight={'bold'}
        fontSize={12}
      />
      <Gap width={wp(2.5)} />
      <ButtonIconText
        icon={<ICPayLater width={wp(6)} height={wp(6)} />}
        title={'PayLater'}
        titleColor={colors.grayMuda}
        fontWeight={'bold'}
        fontSize={12}
      />
      <Gap width={wp(2.5)} />
      <TouchableOpacity>
        <Image
          source={require('../../../assets/icon/qrcode.png')}
          style={{width: wp(8), height: wp(8)}}
        />
        <Text style={styles.text}>Bayar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container_point: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingBottom: hp(1),
  },
  text: {
    color: colors.grayMuda,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
