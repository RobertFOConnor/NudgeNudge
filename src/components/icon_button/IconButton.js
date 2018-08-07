import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

export const IconButton = ({
                               testID,
                               onPress,
                               icon,
                               iconSize,
                               iconColor,
                           }) =>
    <TouchableOpacity testID={testID} onPress={onPress}>
        <Icon style={styles.icon} name={icon} size={iconSize} color={iconColor}/>
    </TouchableOpacity>;

IconButton.defaultProps = {
    testID: 'button',
    icon: 'list',
    iconColor: '#FFF',
    iconSize: 30,
};

IconButton.propTypes = {
    testID: PropTypes.string,
    onPress: PropTypes.func,
    icon: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
};

export default IconButton;