import React, {Component} from 'react';
import {View, Animated} from 'react-native';
import {styles} from './styles';
import {SocialBar} from "./components/socialBar/SocialBar";
import RatedList from "../../components/rated_list";
import ProfileHeader from "./components/profileHeader";
import {fetchUserData, fetchUserWorks, fetchMovie} from "../../utils/ProfileDataAPI";
import {pushScreen} from "../../navigation/ScreenManager";
import PropTypes from 'prop-types';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fadeOutAnimation: new Animated.Value(1),
            user: null,
            works: null,
        };
    }

    static propTypes = {
        componentId: PropTypes.string
    };

    async doFetch(id) {
        let res = await fetchUserData(id);
        this.setState({user: res});

        if (res.name) {
            res = await fetchUserWorks(id);
            this.setState({works: res});
        }
    }

    componentDidMount() {
        this.doFetch(101);
    }

    render() {

        if (!this.state.user && !this.state.image) {
            return null;
        }

        return (
            <View style={styles.background}>
                <Animated.View style={[styles.container, {opacity: this.state.fadeOutAnimation}]}>
                    <ProfileHeader userData={this.state.user}/>
                    {/*<SocialBar socialData={exampleUser}/>*/}
                    <RatedList
                        items={this.state.works}
                        onItemPressed={(key) => {
                            fetchMovie(key).then(movie =>
                                pushScreen('ProductDetail', {...this.props, product: movie, sharedElement: 'image_'+key})
                            );
                        }}
                    />
                </Animated.View>
            </View>
        );
    }
}

export default Profile;