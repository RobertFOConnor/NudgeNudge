import React from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import {linkButtonStyles} from "./linkButton.styles";

export const LinkButton = ({onPress, title, style}) =>
    <TouchableOpacity onPress={onPress}>
        <Text style={[linkButtonStyles.buttonText, style]}>{title}</Text>
    </TouchableOpacity>;