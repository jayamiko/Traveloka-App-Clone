import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {colors, hp, wp} from '../../../constants';
import {ButtonIconOnly, ButtonIconText, Gap} from '../../atoms';
import Input from '../Input';
import {ICChatMessage, ICBell, ICSearch} from '../../../assets';

const Header = ({onPress, placeholder}) => {
  return (
    <View style={styles.header}>
      <Input
        colorText={colors.grayMuda}
        paddingHorizontal={wp(3)}
        backgroundColor={colors.white}
        placeholder={placeholder}
        fontSize={hp(2)}
        borderRadius={wp(1)}
        height={hp(5)}
        suffixComponent={<ICSearch />}
        widthInput={wp(58)}
        onPress={onPress}
      />
      <Gap width={wp(2.5)} />
      <Image
        source={require('../../../assets/icon/bell.png')}
        style={{width: 32, height: hp(5.5)}}
      />
      <Gap width={wp(2.5)} />
      <Image
        source={require('../../../assets/icon/chat.png')}
        style={{width: 32, height: hp(5.5)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue2,
    height: hp(8),
    paddingHorizontal: wp(2),
    paddingVertical: wp(4),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'flex-start',
    // borderBottomEndRadius: 10,
    // borderBottomStartRadius: 10,
  },
});

export default Header;
