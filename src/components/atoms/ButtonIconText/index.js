import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, hp, wp} from '../../../constants';
import Gap from '../Gap';

const ButtonIconText = ({
  title,
  icon,
  iconRight,
  flexDirection,
  backgroundColor,
  titleColor,
  borderRadius,
  onPress,
  textAlign,
  paddingVertical,
  paddingHorizontal,
  marginHorizontal,
  widthText,
  leftText,
  height,
  disabled,
  shadow,
  fontWeight,
  justifyContent,
  fontSize,
}) => {
  return (
    <TouchableOpacity
      style={styles.conatiner(
        flexDirection,
        backgroundColor,
        borderRadius,
        paddingVertical,
        paddingHorizontal,
        marginHorizontal,
        height,
        shadow,
        justifyContent,
      )}
      onPress={onPress}
      disabled={disabled}>
      {icon && icon}
      <Gap width={wp(1)} />
      <Text
        style={styles.title(
          titleColor,
          textAlign,
          widthText,
          leftText,
          fontWeight,
          fontSize,
        )}>
        {title}
      </Text>

      {iconRight && iconRight}
    </TouchableOpacity>
  );
};

export default ButtonIconText;

const styles = StyleSheet.create({
  conatiner: (
    flexDirection,
    backgroundColor,
    borderRadius,
    paddingVertical,
    paddingHorizontal,
    marginHorizontal,
    height,
    shadow,
    justifyContent,
  ) => ({
    backgroundColor: backgroundColor ? backgroundColor : colors.white,
    paddingVertical: height
      ? null
      : paddingVertical
      ? paddingVertical
      : hp(0.5),
    paddingHorizontal: paddingHorizontal ? paddingHorizontal : wp(2),
    height: height ? height : null,
    borderRadius: borderRadius ? borderRadius : 8,
    flexDirection: flexDirection ? flexDirection : 'row',
    alignItems: 'center',
    justifyContent: justifyContent ? justifyContent : 'space-between',
    marginHorizontal: marginHorizontal,
    shadowColor: shadow && '#000',
    shadowOffset: shadow && {
      width: 0,
      height: 2,
    },
    shadowOpacity: shadow && 0.25,
    shadowRadius: shadow && 3.84,
    elevation: shadow && 5,
  }),
  title: (
    titleColor,
    textAlign,
    widthText,
    leftText,
    fontWeight,
    fontSize,
  ) => ({
    fontSize: fontSize ? fontSize : hp(1.5),
    color: titleColor ? titleColor : colors.white,
    width: widthText ? widthText : null,
    left: leftText ? leftText : null,
    fontWeight: fontWeight,
    textAlign: textAlign,
    marginTop: 2,
  }),
});
