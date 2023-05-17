import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const ButtonIconOnly = ({
  onPress,
  icon,
  padding,
  size,
  backgroundColor,
  borderRadius,
  borderWidth,
  borderColor,
  disabled,
  shadow,
  justifyContent,
  alignItems,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.iconButton(
        padding,
        size,
        backgroundColor,
        borderRadius,
        borderWidth,
        borderColor,
        shadow,
        justifyContent,
        alignItems,
      )}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: (
    padding,
    size,
    backgroundColor,
    borderRadius,
    borderWidth,
    borderColor,
    shadow,
    justifyContent,
    alignItems,
  ) => ({
    height: size ? size : 30,
    width: size ? size : 30,
    borderRadius: borderRadius ? borderRadius : 0,
    borderWidth: borderWidth ? borderWidth : 0,
    borderColor: borderColor ? borderColor : null,
    backgroundColor: backgroundColor ? backgroundColor : null,
    padding: padding ? padding : 0,
    justifyContent: justifyContent ? justifyContent : 'center',
    alignItems: alignItems ? alignItems : 'center',
    shadowColor: shadow && '#000',
    shadowOffset: shadow && {
      width: 0,
      height: 3,
    },
    shadowOpacity: shadow && 0.27,
    shadowRadius: shadow && 4.65,
    elevation: shadow && 6,
  }),
});

export default ButtonIconOnly;
