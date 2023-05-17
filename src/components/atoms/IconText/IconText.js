import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import {hp} from '../../../constants';

function IconText({iconSource, text, color, fontSize, fontWeight}) {
  return (
    <View style={styles.boxRow}>
      <Image source={iconSource} style={styles.icon} />
      <Text
        style={{
          color: color,
          fontSize: fontSize,
          fontWeight: fontWeight ?? '400',
        }}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  boxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 14,
    height: hp(3),
    marginRight: 8,
  },
});

export default IconText;
