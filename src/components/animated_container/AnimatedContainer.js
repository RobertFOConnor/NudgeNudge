import React from 'react';
import {
    Text,
    Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import {startFadeInAnimation} from "../../utils/AnimationHelper";


export const AnimatedContainer = ({
                                      style,
                                      contents,
                                      delay,
                                      direction,
                                  }) => {

    const animatedValue = new Animated.Value(0);
    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [
            direction === 'right' ? 50 : -50,
            0
        ]
    });
    startFadeInAnimation(animatedValue, delay);

    return (
        <Animated.View style={[style, {opacity: animatedValue, transform: [{translateX}]}]}>
            {contents}
        </Animated.View>
    );
};

AnimatedContainer.defaultProps = {
    testID: 'button',
    text: 'AnimatedContainer',
    delay: 250,
    direction: 'right',
};

AnimatedContainer.propTypes = {
    testID: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.number,
    delay: PropTypes.number,
    direction: PropTypes.string,
};

export default AnimatedContainer;