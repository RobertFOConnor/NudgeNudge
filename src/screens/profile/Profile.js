import React, {Component} from 'react';
import {View, Animated} from 'react-native';
import {styles} from './styles';
import {SocialBar} from "./components/socialBar/SocialBar";
import RatedList from "../../components/rated_list";
import ProfileHeader from "./components/profileHeader";
import {exampleUser} from "../../utils/ProfileDataAPI";
import {startFadeOutAnimation} from '../../utils/AnimationHelper';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fadeOutAnimation: new Animated.Value(1),
        };
    }

    render() {
        return (
            <View style={styles.background}>
                <Animated.View style={[styles.container, {opacity: this.state.fadeOutAnimation}]}>
                    <ProfileHeader userData={exampleUser}/>
                    <SocialBar socialData={exampleUser}/>
                    <RatedList onItemPressed={() => startFadeOutAnimation(this.state.fadeOutAnimation)}/>
                </Animated.View>
            </View>
        );
    }
}

export default Profile;