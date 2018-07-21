import React, {Component} from 'react';
import {View, ActivityIndicator, Text, Image, Animated} from 'react-native';
import {styles} from './styles';
import {Button} from "../../components/button/Button";
import {LinkButton} from "../../components/link_button/LinkButton";
import {TextField} from "../../components/text_field/TextField";
import {strings} from '../../common/strings';
import {theme} from './theme';
import {assets} from '../../common/assets';
import {setup, facebookSignIn, googleSignIn, firebaseSignIn} from '../../utils/LoginManager';
import { Navigation } from 'react-native-navigation';

export default class Login extends Component<Props> {

    constructor(props) {
        super(props);
        setup();

        this.state = {
            email: '',
            password: '',
            loading: false,
            errorMessage: null,
            fadeAnim: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.startFadeInAnimation();
    }

    startFadeInAnimation() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                delay: 250,
                duration: 1250,
            }
        ).start();
    }

    advanceScreen = () => {
        Navigation.setRoot({
            root: {
                component: {
                    name: 'Profile',
                    passProps: {
                        user: this.state.email,
                    },
                }
            }
        });
    };

    renderLoginTextInputs() {
        return (
            <View>
                <TextField
                    testID='emailInput'
                    style={styles.textInputs}
                    hint={strings.emailHint}
                    onChangeText={(text) => {
                        this.setState({errorMessage: null});
                        this.setState({email: text})
                    }}/>
                <TextField
                    testID='passwordInput'
                    style={styles.textInputs}
                    hint={strings.passwordHint}
                    onChangeText={(text) => {
                        this.setState({errorMessage: null});
                        this.setState({password: text})
                    }}
                    isPassword={true}/>
                {this.state.errorMessage && this.renderErrorMessage(this.state.errorMessage)}
            </View>
        );
    }

    renderSocialButtons = () =>
        <View>
            {/*<Text style={styles.socialOptions}>OR</Text>*/}
            {theme.allowGoogleSignIn &&
            <Button
                testID='googleSignInButton'
                title={strings.googleLogin}
                style={styles.googleLoginButton}
                leftIcon={assets.google_logo}
                textStyle={styles.googleLoginButtonText}
                onPress={() => googleSignIn({onSuccess: this.advanceScreen})}/>}
            {theme.allowFacebookSignIn &&
            <Button
                testID='facebookSignInButton'
                title={strings.facebookLogin}
                style={styles.facebookLoginButton}
                leftIcon={assets.facebook_logo}
                textStyle={styles.facebookLoginButtonText}
                onPress={() => facebookSignIn({onSuccess: this.advanceScreen})}/>}
        </View>;

    renderErrorMessage = (error) => <Text style={styles.errorMessage}>{error}</Text>;

    render() {
        return (
            <View style={styles.container}>
                {theme.backgroundImage &&
                <Image
                    style={styles.backgroundImage}
                    source={{uri: "https://images.wallpaperscraft.com/image/mountains_sky_sunset_peaks_97149_1080x1920.jpg"}}
                />}
                <Animated.View style={[styles.contentContainer, {opacity: this.state.fadeAnim}]}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>{strings.appName}</Text>
                        <Text style={styles.description}>{strings.signInDescription}</Text>
                    </View>
                    <View>
                        <View>
                            {this.renderLoginTextInputs()}
                            <Button
                                testID='signInButton'
                                title={strings.login}
                                style={styles.loginButton}
                                textStyle={styles.loginButtonText}
                                onPress={() => firebaseSignIn({
                                    email: this.state.email,
                                    password: this.state.password,
                                    onSuccess: this.advanceScreen,
                                })}/>
                            {this.renderSocialButtons()}
                            <LinkButton
                                testID='signUpLink'
                                title={strings.signUpLink}
                                style={styles.bottomLink}
                                onPress={googleSignIn}/>
                        </View>
                    </View>
                    {/*<ActivityIndicator style={{padding: 30}} animating={this.state.loading}/>*/}
                </Animated.View>
            </View>
        );
    }
}
