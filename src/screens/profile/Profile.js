import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export default class Profile extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Success. Welcome in, {this.props.user}</Text>
            </View>
        );
    }
}
