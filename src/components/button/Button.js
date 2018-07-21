import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {buttonStyles} from "./button.styles";

export const Button = ({
                           testID,
                           onPress,
                           title,
                           style,
                           leftIcon,
                           textStyle,
                       }) =>
    <TouchableOpacity testID={testID} onPress={onPress}>
        <View style={[buttonStyles.container, style]}>
            {leftIcon &&
            <Image
                style={buttonStyles.leftIcon}
                source={leftIcon}
            />}
            {!!title && <Text style={[buttonStyles.text, textStyle]}>{title}</Text>}
        </View>
    </TouchableOpacity>;

Button.defaultProps = {
    testID: 'button',
};

Button.propTypes = {
    testID: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string,
    leftIcon: PropTypes.object,
    style: PropTypes.number,
    textStyle: PropTypes.number,
};