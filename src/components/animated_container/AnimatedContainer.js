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
                                  }) => {

    const animatedValue = new Animated.Value(0);
    const marginLeft = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 0]
    });
    startFadeInAnimation(animatedValue, delay);

    return (
        <Animated.View style={[style, {opacity: animatedValue, marginLeft}]}>
            {contents}
        </Animated.View>
    );
};

AnimatedContainer.defaultProps = {
    testID: 'button',
    text: 'AnimatedContainer',
};

AnimatedContainer.propTypes = {
    testID: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.number,
    delay: PropTypes.number,
};

export default AnimatedContainer;