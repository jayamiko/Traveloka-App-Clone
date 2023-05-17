import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../../constants';
import {Gap} from '../../atoms';

function IklanBanner({title, sponsor, sponsorName, image}) {
  return (
    <View style={styles.hotel}>
      <View style={styles.column}>
        <Text style={styles.title}>{title}</Text>
        {sponsor && (
          <Text style={styles.sponsor}>Disponsori oleh {sponsorName}</Text>
        )}
      </View>
      <Gap height={hp(2)} />
      <Image source={image} style={styles.iklanBanner} />
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
  },
  sponsor: {
    color: colors.grayMuda,
  },
  hotel: {
    justifyContent: 'center',
    paddingHorizontal: wp(2),
  },
  iklanBanner: {
    width: '100%',
    height: 150,
    borderRadius: 6,
  },
});

export default IklanBanner;
