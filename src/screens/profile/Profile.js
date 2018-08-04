import React, {Component} from 'react';
import {View, Animated} from 'react-native';
import {styles} from './styles';
import {SocialBar} from "./components/socialBar/SocialBar";
import RatedList from "../../components/rated_list";
import ProfileHeader from "./components/profileHeader";
import {exampleUser, fetchUserData} from "../../utils/ProfileDataAPI";
import {startFadeOutAnimation} from '../../utils/AnimationHelper';
import {pushScreen} from "../../navigation/ScreenManager";

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fadeOutAnimation: new Animated.Value(1),
            user: null,
        };
    }

    async doFetch() {
        const res = await fetchUserData(52843);
        this.setState({user: res});
        console.log("RESPONSE", res)
    }

    componentDidMount() {
        this.doFetch();
    }

    render() {

        if (!this.state.user && !this.state.image) {
            return null;
        }

        return (
            <View style={styles.background}>
                <Animated.View style={[styles.container, {opacity: this.state.fadeOutAnimation}]}>
                    <ProfileHeader userData={this.state.user}/>
                    <SocialBar socialData={exampleUser}/>
                    <RatedList
                        onItemPressed={() => pushScreen('ProductDetail')}/>
                </Animated.View>
            </View>
        );
    }
}

export default Profile;