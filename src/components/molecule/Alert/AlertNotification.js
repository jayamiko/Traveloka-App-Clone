import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors} from '../../../constants';

function AlertNotification({text, icon}) {
  return (
    <View style={styles.alertContainer}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alertContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFEFD5',
    borderWidth: 0.5,
    borderColor: colors.yello,
    borderRadius: 30,
    padding: 4,
    alignItems: 'center',
    marginVertical: 8,
  },
  iconContainer: {
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 14,
  },
});

export default AlertNotification;
