import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, hp, wp} from '../../../constants';

const Button = ({
  title,
  onPress,
  buttonColor,
  textColor,
  paddingHorizontal,
  disabled,
  fontSize,
  fontFamily,
  borderWidth,
  borderColor,
  paddingVertical,
  borderRadius,
  numberOfLines,
  marginHorizontal,
  bottom,
  marginRight,
  shadow,
}) => {
  return (
    <TouchableOpacity
      style={styles.container(
        buttonColor,
        paddingHorizontal,
        borderWidth,
        borderColor,
        paddingVertical,
        borderRadius,
        marginHorizontal,
        bottom,
        marginRight,
        shadow,
      )}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={styles.title(textColor, fontSize)}
        ellipsizeMode={'tail'}
        numberOfLines={numberOfLines ? numberOfLines : null}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (
    buttonColor,
    paddingHorizontal,
    borderWidth,
    borderColor,
    paddingVertical,
    borderRadius,
    marginHorizontal,
    bottom,
    marginRight,
    shadow,
  ) => ({
    padding: 5,
    backgroundColor: buttonColor ? buttonColor : colors.yello,
    borderRadius: borderRadius ? borderRadius : 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: paddingHorizontal ? paddingHorizontal : wp(4),
    marginHorizontal: marginHorizontal,
    borderWidth: borderWidth,
    borderColor: borderColor,
    paddingVertical: paddingVertical,
    bottom: bottom,
    shadowColor: shadow && '#000',
    shadowOffset: shadow && {
      width: 0,
      height: 2,
    },
    shadowOpacity: shadow && 0.23,
    shadowRadius: 2.62,

    elevation: shadow && 4,
    marginRight: marginRight,
  }),
  title: (textColor, fontSize) => ({
    fontSize: fontSize ? fontSize : hp(1.8),
    color: textColor ? textColor : colors.blue,
    fontWeight: '500',
  }),
});
