import PropTypes from 'prop-types';
import React, {forwardRef} from 'react';
import {TextInput, View, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../theme';
import styles from './styles/CustomTextInputStyles';

const CustomTextInput = (
  {
    style,
    error,
    rightIcon,
    leftIcon,
    onIconPress,
    placeholderTextColor = Colors.darkGray,
    blurOnSubmit = false,
    returnKeyType = 'next',
    ...otherProps
  },
  ref,
) => {
  const container = StyleSheet.compose(styles.inputContainer, style);
  return (
    <View style={container}>
      {leftIcon}
      {leftIcon && <View style={styles.textSeparator} />}
      <TextInput
        ref={ref}
        style={styles.textInput}
        placeholderTextColor={placeholderTextColor}
        blurOnSubmit={blurOnSubmit}
        returnKeyType={returnKeyType}
        {...otherProps}
      />
      {rightIcon && (
        <Pressable style={styles.rightICon} onPress={onIconPress}>
          {rightIcon}
        </Pressable>
      )}
    </View>
  );
};

CustomTextInput.propTypes = {
  style: PropTypes.object,
  error: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  rightIcon: PropTypes.element,
  leftIcon: PropTypes.element,
  onIconPress: PropTypes.func,
  blurOnSubmit: PropTypes.bool,
  returnKeyType: PropTypes.string,
};

export default forwardRef(CustomTextInput);
