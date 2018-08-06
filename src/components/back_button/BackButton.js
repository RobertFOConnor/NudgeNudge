import React from 'react';
import PropTypes from 'prop-types';
import {backButtonStyles} from "./backButton.styles";
import Button from "../button";

export const BackButton = ({onPress}) =>
    <Button
        style={backButtonStyles.backButton}
        leftIcon={"angle-left"}
        leftIconSize={38}
        onPress={onPress}
    />;

BackButton.defaultProps = {

};

BackButton.propTypes = {
    onPress: PropTypes.func,
};

export default BackButton;