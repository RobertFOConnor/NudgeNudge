import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {backButtonStyles} from "./backButton.styles";
import IconButton from "../icon_button/IconButton";

export const BackButton = ({onPress}) =>
    <View style={backButtonStyles.backButton}>
        <IconButton
            icon={"angle-left"}
            iconSize={38}
            onPress={onPress}
        />
    </View>;

BackButton.defaultProps = {};

BackButton.propTypes = {
    onPress: PropTypes.func,
};

export default BackButton;