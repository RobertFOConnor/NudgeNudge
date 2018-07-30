import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from "./styles";
import {theme} from "../../theme";
import ProfilePicture from '../../../../components/profile_picture';
import Button from '../../../../components/button/Button';
import {exampleUser} from "../../../../utils/ProfileDataAPI";
import AnimatedText from "../../../../components/animated_text/AnimatedText";
import AnimatedContainer from "../../../../components/animated_container/AnimatedContainer";

const INIT_DELAY = 500;
const OFFSET_DELAY = 200;

const ProfileHeader = ({onPress, userData}) =>
    <View style={styles.container}>
        <View style={styles.contentContainer}>
            <ProfilePicture
                size={theme.profileImageSize}
                radius={theme.profileImageRadius}
            />
            <View style={styles.textContainer}>
                <AnimatedText style={styles.userName} text={userData.name} delay={INIT_DELAY}/>
                <AnimatedText style={styles.userLocation} text={userData.location} delay={INIT_DELAY+OFFSET_DELAY}/>
                <AnimatedContainer
                    style={styles.buttonContainer}
                    delay={INIT_DELAY+(OFFSET_DELAY*2)}
                    contents={
                        <View style={styles.buttonContainer}>
                            <Button
                                title={"Share"}
                                style={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                            <Button
                                title={"Followers"}
                                style={styles.followButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    }
                />
            </View>
        </View>
    </View>;

ProfileHeader.defaultProps = {
    testID: 'linkButton',
    userData: exampleUser,
};

ProfileHeader.propTypes = {
    testID: PropTypes.string,
    onPress: PropTypes.func,
    userData: PropTypes.object,
};

export default ProfileHeader;