import React, {Component} from 'react';
import {View, Text, Image, Animated} from 'react-native';
import {styles} from './styles';
import {Button} from '../../components/button/Button';
import {LinkButton} from '../../components/link_button/LinkButton';
import {TextField} from '../../components/text_field/TextField';
import {strings} from '../../common/strings';
import {theme} from './theme';
import {assets} from '../../common/assets';
import {resetToScreen} from '../../navigation/ScreenManager';
import {startFadeInAnimation} from '../../utils/AnimationHelper';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            loading: false,
            errorMessage: null,
            fadeInAnimatedValue: new Animated.Value(0),
        };
    }

    componentDidMount() {
        startFadeInAnimation(this.state.fadeInAnimatedValue);
    }

    advanceScreen = () => {
        resetToScreen('Profile');
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
            {theme.allowGoogleSignIn &&
            <Button
                testID='googleSignInButton'
                title={strings.googleLogin}
                style={styles.googleLoginButton}
                leftImage={assets.google_logo}
                textStyle={styles.googleLoginButtonText}
                textColor={'#222'}
                onPress={() => console.log("GOOGS")}/>}
            {theme.allowFacebookSignIn &&
            <Button
                testID='facebookSignInButton'
                title={strings.facebookLogin}
                style={styles.facebookLoginButton}
                leftIcon={'facebook-f'}
                leftIconSize={24}
                textStyle={styles.facebookLoginButtonText}
                onPress={() => console.log("MARKFUCKERBURG")}/>}
        </View>;

    renderErrorMessage = (error) => <Text style={styles.errorMessage}>{error}</Text>;

    render() {
        return (
            <View style={styles.container}>
                {theme.backgroundImage &&
                <Image
                    style={styles.backgroundImage}
                    source={assets.background_nature}
                />}
                <Animated.View style={[styles.contentContainer, {opacity: this.state.fadeInAnimatedValue}]}>
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
                                onPress={() => console.log("FIRESHIT")}/>
                            {this.renderSocialButtons()}
                            <LinkButton
                                testID='signUpLink'
                                title={strings.signUpLink}
                                style={styles.bottomLink}
                                onPress={() => console.log("HELPMEIMSCARED")}/>
                        </View>
                    </View>
                </Animated.View>
            </View>
        );
    }
}
