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
                           leftImage,
                           textStyle,
                       }) =>
    <TouchableOpacity testID={testID} onPress={onPress}>
        <View style={[buttonStyles.container, style]}>
            {leftImage &&
            <Image
                style={buttonStyles.leftImage}
                source={leftImage}
            />}
            {!!title && <Text style={[buttonStyles.text, textStyle]}>{title}</Text>}
        </View>
    </TouchableOpacity>;

Button.defaultProps = {
    testID: 'button',
    title: 'button',
};

Button.propTypes = {
    testID: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string,
    leftImage: PropTypes.object,
    style: PropTypes.number,
    textStyle: PropTypes.number,
};

export default Button;