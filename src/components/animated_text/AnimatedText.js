import React from 'react';
import {
    Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import {startFadeInAnimation} from "../../utils/AnimationHelper";


export const AnimatedText = ({
                                 text,
                                 style,
                                 delay,
                             }) => {

    const animatedValue = new Animated.Value(0);
    const marginLeft = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 0]
    });

    startFadeInAnimation(animatedValue, delay);

    return (
        <Animated.Text
            numberOfLines={1}
            ellipsizeMode={'clip'}
            style={[style, {
                opacity: animatedValue,
                marginLeft
            }]}
        >
            {text}
        </Animated.Text>
    );
};

AnimatedText.defaultProps = {
    testID: 'button',
    text: 'AnimatedText',
};

AnimatedText.propTypes = {
    testID: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.number,
    delay: PropTypes.number,
};

export default AnimatedText;