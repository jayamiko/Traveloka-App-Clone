import React from 'react';
import {Text, StyleSheet} from 'react-native';

function Stars() {
  return (
    <>
      <Text style={styles.star}>&#x2605;</Text>
      <Text style={styles.star}>&#x2605;</Text>
      <Text style={styles.star}>&#x2605;</Text>
      <Text style={styles.star}>&#x2605;</Text>
      <Text style={styles.star}>&#x2605;</Text>
    </>
  );
}

const styles = StyleSheet.create({
  star: {
    fontSize: 20,
    color: 'gold',
  },
});

export default Stars;
