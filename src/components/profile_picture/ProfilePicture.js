import React from 'react';
import {
    TouchableOpacity,
    Animated,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {profilePictureStyles} from "./profilePicture.styles";
import {assets} from '../../common/assets';


const spring = (animatedValue) => {
    Animated.spring(
        animatedValue,
        {
            toValue: 1,
            friction: 6,
            duration: 600,
            delay: 300,
            useNativeDriver: true,
        }
    ).start();
};

export const ProfilePicture = ({
                                   testID,
                                   onPress,
                                   size,
                                   radius,
                               }) => {

    const animatedValue = new Animated.Value(0);
    spring(animatedValue);

    return (
        <TouchableOpacity testID={testID} onPress={onPress}>
            <Animated.View style={{transform: [{scale: animatedValue}]}}>
                <Image
                    style={[profilePictureStyles.container, {
                        width: size,
                        height: size,
                        borderRadius: radius,
                    }]}
                    source={assets.profilePic}
                />
            </Animated.View>
        </TouchableOpacity>)
};

ProfilePicture.defaultProps = {
    testID: 'button',
    title: 'button',
    size: 120,
    radius: 60,
};

ProfilePicture.propTypes = {
    testID: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string,
    leftImage: PropTypes.object,
    style: PropTypes.number,
    textStyle: PropTypes.number,
};

export default ProfilePicture;