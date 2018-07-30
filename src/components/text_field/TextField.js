import React from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {textFieldStyles} from "./textField.styles";
import {colors} from "../../common/colors";

export const TextField = ({
                              testID,
                              hint,
                              onChangeText,
                              isPassword,
                              style,
                              underline,
                          }) =>
    <TextInput
        testID={testID}
        style={[textFieldStyles.textInput, style]}
        placeholder={hint}
        placeholderTextColor={colors.white}
        secureTextEntry={isPassword}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        underlineColorAndroid={underline || 'rgba(0,0,0,0)'}
        onChangeText={onChangeText}
    />;

TextField.propTypes = {
    testID: PropTypes.string,
    hint: PropTypes.string,
    onChangeText: PropTypes.func,
    isPassword: PropTypes.bool,
    style: PropTypes.number,
    underline: PropTypes.string,
};