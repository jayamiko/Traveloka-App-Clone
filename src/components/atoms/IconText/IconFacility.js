import React from 'react';
import {View, Text, Image} from 'react-native';
import {colors, hp, wp} from '../../../constants';
import Gap from '../Gap';

function IconFacility({item, index}) {
  return (
    <View
      key={index}
      style={{
        maxWidth: 75,
        alignItems: 'center',
        marginRight: 18,
      }}>
      <Image
        source={item.icon}
        style={{
          width: 40,
          height: hp(8),
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: colors.grayMuda,
          textAlign: 'center',
        }}>
        {item.name}
      </Text>
    </View>
  );
}

export default IconFacility;
