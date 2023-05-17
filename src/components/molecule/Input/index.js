import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {colors, hp, wp} from '../../../constants';

const Input = ({
  placeholder,
  onChangeText,
  keyboardType,
  height,
  multiline,
  colorText,
  fontSize,
  widthInput,
  maxLength,
  suffixComponent,
  value,
  onPress,
  disabled,
  paddingHorizontal,
  paddingRight,
  backgroundColor,
  borderRadius,
}) => {
  if (onPress) {
    return (
      <TouchableOpacity
        style={styles.conatinerInput(
          height,
          paddingHorizontal,
          paddingRight,
          backgroundColor,
          borderRadius,
        )}
        disabled={disabled}
        onPress={onPress}>
        {suffixComponent && suffixComponent}
        <TextInput
          style={styles.input(colorText, fontSize, widthInput)}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={colors.grayMuda}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={5}
          maxLength={maxLength}
          editable={false}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={styles.conatinerInput(
        height,
        paddingHorizontal,
        paddingRight,
        backgroundColor,
        borderRadius,
      )}>
      {suffixComponent && suffixComponent}
      <TextInput
        style={styles.input(colorText, fontSize, widthInput)}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.grayMuda}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={5}
        maxLength={maxLength}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  conatinerInput: (
    height,
    paddingHorizontal,
    paddingRight,
    backgroundColor,
    borderRadius,
  ) => ({
    flexDirection: 'row',
    alignItems: 'center',
    height: height ? height : hp(6),
    paddingHorizontal: paddingHorizontal ? paddingHorizontal : wp(3.6),
    paddingRight: paddingRight,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
  }),
  input: (colorText, fontSize, widthInput) => ({
    fontSize: fontSize ? fontSize : hp(2),
    color: colorText ? colorText : colors.placeholder,
    width: widthInput,
  }),
  lengthText: {
    fontSize: hp(1.5),
    color: colors.silver,
    top: hp(1),
  },
});
