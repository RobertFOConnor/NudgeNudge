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
                           textStyle,
                           textColor,
                       }) =>
    <TouchableOpacity testID={testID} onPress={onPress}>
        <View style={[buttonStyles.container, style]}>
            {leftImage && <Image style={buttonStyles.leftImage} source={leftImage}/>}
            {leftIcon && <Icon style={buttonStyles.leftIcon} name={leftIcon} size={18} color={textColor}/>}
            {!!title && <Text style={[buttonStyles.text, textStyle, textColor && {color: textColor}]}>{title}</Text>}
        </View>
    </TouchableOpacity>;

Button.defaultProps = {
    testID: 'button',
    title: 'button',
    textColor: '#FFF',
};

Button.propTypes = {
    testID: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string,
    leftImage: PropTypes.object,
    leftIcon: PropTypes.string,
    style: PropTypes.number,
    textStyle: PropTypes.number,
    textColor: PropTypes.string,
};

export default Button;