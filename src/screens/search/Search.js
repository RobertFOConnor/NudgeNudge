import React, {Component} from 'react';
import {View, Text, Image, Animated} from 'react-native';
import {styles} from './styles';
import {Button} from '../../components/button/Button';
import {TextField} from '../../components/text_field/TextField';
import {strings} from '../../common/strings';
import {assets} from '../../common/assets';

export default class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: null,
            loading: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextField
                        testID='emailInput'
                        style={styles.textInputs}
                        hint={strings.emailHint}
                        onChangeText={(text) => {
                            this.setState({errorMessage: null});
                            this.setState({email: text})
                        }}/>
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
                </View>

            </View>
        );
    }
}
