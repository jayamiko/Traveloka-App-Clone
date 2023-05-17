import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {
  ICAllProduct,
  ICAntarJemput,
  ICAsuransi,
  ICBrowser,
  ICBus,
  ICCar,
  ICExperience,
  ICFinansial,
  ICHotel,
  ICJRPass,
  ICKesehatan,
  ICKuliner,
  ICPayLater,
  ICPlan,
  ICPulsa,
  ICTaxi,
  ICTOUR,
  ICVoucher,
} from '../../../assets';
import {colors, hp, wp} from '../../../constants';
import {ButtonIconText, Gap} from '../../atoms';

export const Menu = () => {
  const height = 0;
  return (
    <>
      {/* Main Menu */}
      <View style={styles.container_main_menu}>
        <ButtonIconText
          icon={
            <View style={styles.icon(colors.blue)}>
              {<ICPlan width={wp(8)} height={wp(8)} />}
            </View>
          }
          title={'Tiket Pesawat'}
          titleColor={colors.grayMuda}
          fontSize={hp(1.7)}
          width={wp(17)}
          flexDirection={'column'}
          textAlign={'center'}
          widthText={wp(20)}
          justifyContent={'flex-start'}
          fontWeight={'600'}
        />
        <ButtonIconText
          icon={
            <View style={styles.icon(colors.blue4)}>
              {<ICHotel width={wp(8)} height={wp(8)} />}
            </View>
          }
          title={'Hotel'}
          titleColor={colors.grayMuda}
          fontSize={hp(1.7)}
          width={wp(17)}
          flexDirection={'column'}
          textAlign={'center'}
          widthText={wp(20)}
          justifyContent={'flex-start'}
          fontWeight={'600'}
        />
        <ButtonIconText
          icon={
            <View style={styles.icon(colors.experience)}>
              {<ICExperience width={wp(8)} height={wp(8)} />}
            </View>
          }
          title={'Xperience'}
          titleColor={colors.grayMuda}
          fontSize={hp(1.7)}
          width={wp(17)}
          flexDirection={'column'}
          textAlign={'center'}
          widthText={wp(20)}
          justifyContent={'flex-start'}
          fontWeight={'600'}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingVertical: height ? null : 0 ? 0 : hp(0.5),
            paddingHorizontal: wp(2),
            borderRadius: 8,
          }}>
          <View style={styles.icon(colors.blue4)}>
            <Image
              source={require('../../../assets/icon/paylater.png')}
              style={{width: wp(11), height: hp(7)}}
            />
          </View>
          <Gap width={wp(1)} />
          <Text
            style={{
              color: colors.grayMuda,
              fontSize: hp(1.7),
              width: wp(20),
              fontWeight: '600',
              textAlign: 'center',
              marginTop: 2,
            }}>
            Pay Later
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
      {/* Menu Lists */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Gap width={wp(1.5)} />
        <View style={styles.menus}>
          <View style={styles.container_menu}>
            <ButtonIconText
              icon={
                <View style={styles.smallICon(colors.concrete)}>
                  {<ICJRPass width={wp(7)} height={hp(7)} />}
                </View>
              }
              title={'Tiket Kereta Api'}
              titleColor={colors.black}
              fontSize={hp(1.7)}
              width={wp(17)}
              flexDirection={'column'}
              textAlign={'center'}
              widthText={wp(17)}
              justifyContent={'flex-start'}
            />
            <ButtonIconText
              icon={
                <View style={styles.smallICon(colors.concrete)}>
                  {<ICFinansial width={wp(7)} height={hp(7)} />}
                </View>
              }
              title={'Finansial'}
              titleColor={colors.black}
              width={wp(17)}
              flexDirection={'column'}
              textAlign={'center'}
              widthText={wp(17)}
              justifyContent={'flex-start'}
              fontSize={hp(1.7)}
            />
            <ButtonIconText
              icon={
                <View style={styles.smallICon(colors.concrete)}>
                  {<ICBrowser width={wp(7)} height={wp(7)} />}
                </View>
              }
              title={'Internet Luar Negri'}
              titleColor={colors.black}
              width={wp(17)}
              flexDirection={'column'}
              textAlign={'center'}
              widthText={wp(17)}
              justifyContent={'flex-start'}
              fontSize={hp(1.7)}
            />
            <ButtonIconText
              icon={
                <View style={styles.smallICon(colors.concrete)}>
                  {<ICKuliner width={wp(7)} height={wp(7)} />}
                </View>
              }
              title={'Kuliner'}
              titleColor={colors.black}
              fontSize={hp(1.7)}
              width={wp(17)}
              flexDirection={'column'}
              textAlign={'center'}
              widthText={wp(17)}
              justifyContent={'flex-start'}
            />
            <ButtonIconText
              icon={
                <View style={styles.smallICon(colors.concrete)}>
                  <ICKesehatan width={wp(7)} height={wp(7)} />
                </View>
              }
              title={'Kesehatan'}
              titleColor={colors.black}
              fontSize={hp(1.7)}
              width={wp(17)}
              flexDirection={'column'}
              textAlign={'center'}
              widthText={wp(17)}
              justifyContent={'flex-start'}
            />
            <ButtonIconText
              icon={
                <View style={styles.smallICon(colors.concrete)}>
                  <ICTOUR width={wp(7)} height={wp(7)} />
                </View>
              }
              title={'Tur'}
              titleColor={colors.black}
              width={wp(17)}
              flexDirection={'column'}
              textAlign={'center'}
              widthText={wp(17)}
              justifyContent={'flex-start'}
              fontSize={hp(1.7)}
            />
            <ButtonIconText
              icon={
                <View style={styles.smallICon(colors.concrete)}>
                  <ICPulsa width={wp(7)} height={wp(7)} />
                </View>
              }
              title={'Pulsa & Paket Internet'}
              titleColor={colors.black}
              width={wp(17)}
              flexDirection={'column'}
              textAlign={'center'}
              widthText={wp(17)}
              justifyContent={'flex-start'}
              fontSize={hp(1.7)}
            />
          </View>
          <View style={styles.container_menu}>
            <ButtonIconText
              icon={
                <View style={styles.smallICon(colors.concrete)}>
                  {<ICBus width={wp(8)} height={wp(8)} />}
                </View>
              }
              title={'Tiket Bus & Travel'}
              titleColor={colors.black}
              width={wp(17)}
              flexDirection={'column'}
              textAlign={'center'}
              widthText={wp(17)}
              justifyContent={'flex-start'}
              fontSize={hp(1.7)}
            />
            <ButtonIconText
              icon={
                <View style={styles.smallICon(colors.concrete)}>
                  {<ICCar width={wp(8)} height={wp(8)} />}
                </View>
              }
              title={'Mobil'}
              titleColor={colors.black}
              width={wp(17)}
              flexDirection={'column'}
              textAlign={'center'}
              widthText={wp(17)}
              justifyContent={'flex-start'}
              fontSize={hp(1.7)}
            />
            <ButtonIconText
              icon={
                <View style={styles.smallICon(colors.concrete)}>
                  <ICAsuransi width={wp(8)} height={wp(8)} />
                </View>
              }
              title={'Asuransi'}
              titleColor={colors.black}
              width={wp(17)}
              flexDirection={'column'}
              textAlign={'center'}
              widthText={wp(17)}
              justifyContent={'flex-start'}
              fontSize={hp(1.7)}
            />
            <ButtonIconText
              icon={
                <View style={styles.smallICon(colors.concrete)}>
                  <ICAntarJemput width={wp(7)} height={wp(7)} />
                </View>
              }
              title={'Antar Jemput'}
              titleColor={colors.black}
              width={wp(17)}
              flexDirection={'column'}
              textAlign={'center'}
              widthText={wp(17)}
              justifyContent={'flex-start'}
              fontSize={hp(1.7)}
            />
            <ButtonIconText
              icon={
                <View style={styles.smallICon(colors.concrete)}>
                  <ICVoucher width={wp(6)} height={wp(6)} />
                </View>
              }
              title={'Gift & Voucher'}
              titleColor={colors.black}
              width={wp(17)}
              flexDirection={'column'}
              textAlign={'center'}
              widthText={wp(17)}
              justifyContent={'flex-start'}
              fontSize={hp(1.7)}
            />
            <ButtonIconText
              icon={
                <View style={styles.smallICon(colors.concrete)}>
                  {<ICTaxi width={wp(6)} height={wp(6)} />}
                </View>
              }
              title={'Taksi'}
              titleColor={colors.black}
              width={wp(17)}
              flexDirection={'column'}
              textAlign={'center'}
              widthText={wp(17)}
              justifyContent={'flex-start'}
              fontSize={hp(1.7)}
            />
            <ButtonIconText
              icon={
                <View style={styles.smallICon(colors.concrete)}>
                  {<ICAllProduct width={wp(6)} height={wp(6)} />}
                </View>
              }
              title={'Semua Produk'}
              titleColor={colors.black}
              width={wp(17)}
              flexDirection={'column'}
              textAlign={'center'}
              widthText={wp(17)}
              justifyContent={'flex-start'}
              fontSize={hp(1.7)}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container_main_menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menus: {
    flexDirection: 'column',
  },
  container_menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: colors.concrete,
    marginVertical: hp(2),
  },
  icon: backgroundColor => ({
    backgroundColor: backgroundColor,
    borderRadius: wp(16) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(16),
    height: wp(16),
    flexDirection: 'row',
  }),
  smallICon: backgroundColor => ({
    backgroundColor: backgroundColor,
    borderRadius: wp(14) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(14),
    height: wp(14),
    flexDirection: 'row',
  }),
});
