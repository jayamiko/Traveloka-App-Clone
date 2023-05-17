import React from 'react';
import {Text, StyleSheet} from 'react-native';

function Title({text}) {
  return <Text style={styles.name}>{text}</Text>;
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'capitalize',
  },
});

export default Title;
