import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {buttonStyles} from "./button.styles";
import Icon from 'react-native-vector-icons/FontAwesome';

export const Button = ({
                           testID,
                           onPress,
                           title,
                           style,
                           leftImage,
                           leftIcon,
                           leftIconSize,
                           textStyle,
                           textColor,
                       }) =>
    <TouchableOpacity testID={testID} onPress={onPress}>
        <View style={[buttonStyles.container, style]}>
            {leftImage && <Image style={buttonStyles.leftImage} source={leftImage}/>}
            {leftIcon && <Icon style={buttonStyles.leftIcon} name={leftIcon} size={leftIconSize} color={textColor}/>}
            {!!title && <Text style={[buttonStyles.text, textStyle, textColor && {color: textColor}]}>{title}</Text>}
        </View>
    </TouchableOpacity>;

Button.defaultProps = {
    testID: 'button',
    title: null,
    textColor: '#FFF',
    leftIconSize: 15,
};

Button.propTypes = {
    testID: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string,
    leftImage: PropTypes.number,
    leftIcon: PropTypes.string,
    leftIconSize: PropTypes.number,
    style: PropTypes.number,
    textStyle: PropTypes.number,
    textColor: PropTypes.string,
};

export default Button;