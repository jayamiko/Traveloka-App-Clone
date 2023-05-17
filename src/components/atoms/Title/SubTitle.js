import React from 'react';
import {Text, StyleSheet} from 'react-native';

function SubTitle({text}) {
  return <Text style={styles.fontMedium}>{text}</Text>;
}

const styles = StyleSheet.create({
  fontMedium: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SubTitle;
