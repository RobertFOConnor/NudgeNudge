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

                </View>

            </View>
        );
    }
}
