import React from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {linkButtonStyles} from "./linkButton.styles";

export const LinkButton = ({onPress, title, style}) =>
    <TouchableOpacity onPress={onPress}>
        <Text style={[linkButtonStyles.buttonText, style]}>{title}</Text>
    </TouchableOpacity>;

LinkButton.defaultProps = {
    testID: 'linkButton',
    title: 'LinkButton',
};

LinkButton.propTypes = {
    testID: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string,
    style: PropTypes.number,
};