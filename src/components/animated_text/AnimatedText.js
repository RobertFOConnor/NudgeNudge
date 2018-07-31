import React from 'react';
import {
    Text,
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
    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 0]
    });

    startFadeInAnimation(animatedValue, delay);

    return (
        <Animated.View style={{
            opacity: animatedValue,
            transform: [
                {translateX}
            ]
        }}>
            <Text
                numberOfLines={1}
                ellipsizeMode={'clip'}
                style={style}
            >
                {text}
            </Text>
        </Animated.View>
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