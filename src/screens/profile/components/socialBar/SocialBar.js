import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from "./styles";
import {exampleUser} from "../../../../utils/ProfileDataAPI";

export const SocialBar = ({onPress, socialData}) =>
    <View style={styles.container}>
        {renderSection({title: "Following", count: socialData.following.length})}
        <View style={styles.divider}/>
        {renderSection({title: "Followers", count: socialData.followers.length})}
        <View style={styles.divider}/>
        {renderSection({title: "Likes", count: socialData.likes.length})}
    </View>;

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