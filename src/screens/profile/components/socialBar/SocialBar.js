import React from 'react';
import {View, Text, Animated} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from "./styles";
import {exampleUser} from "../../../../utils/ProfileDataAPI";
import {startFadeInAnimation} from "../../../../utils/AnimationHelper";

export const SocialBar = ({onPress, socialData}) => {

    const opacity = new Animated.Value(0);
    startFadeInAnimation(opacity, 600);

    return (
        <Animated.View style={[styles.container, {opacity}]}>
            {renderSection({title: "Following", count: socialData.following.length})}
            <View style={styles.divider}/>
            {renderSection({title: "Followers", count: socialData.followers.length})}
            <View style={styles.divider}/>
            {renderSection({title: "Likes", count: socialData.likes.length})}
        </Animated.View>
    );
};

const renderSection = ({title, count}) =>
    <View style={styles.section}>
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.title}>{title}</Text>
    </View>;

SocialBar.defaultProps = {
    testID: 'linkButton',
    socialData: exampleUser,
};

SocialBar.propTypes = {
    testID: PropTypes.string,
    onPress: PropTypes.func,
    socialData: PropTypes.object,
};