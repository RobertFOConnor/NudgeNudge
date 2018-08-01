import React, {Component} from 'react';
import {View, Animated} from 'react-native';
import {styles} from './styles';

class ProductDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fadeOutAnimation: new Animated.Value(1),
        };
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

export default ProductDetail;