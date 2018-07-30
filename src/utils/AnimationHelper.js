import React from 'react';
import {Animated} from 'react-native';

export const startFadeInAnimation = (value, delay = 250, duration = 500) => {
    Animated.timing(
        value,
        {
            toValue: 1,
            delay: delay,
            duration: duration,
        }
    ).start();
};

export const startFadeOutAnimation = (value, delay = 0, duration = 400) => {
    Animated.timing(
        value,
        {
            toValue: 0,
            delay: delay,
            duration: duration,
            useNativeDriver: true,
        }
    ).start();
};