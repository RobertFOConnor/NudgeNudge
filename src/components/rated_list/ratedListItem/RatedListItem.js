import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from "./styles";
import {assets} from "../../../common/assets";
import {LinkButton} from "../../link_button/LinkButton";
import StarRating from "./starRating/StarRating";
import {exampleItem} from "../../../utils/ProfileDataAPI";

class RatedListItem extends Component {

    render() {
        const {itemData, onPress} = this.props;

        return (
            <TouchableWithoutFeedback key={itemData.key} onPress={onPress}>
                <View style={styles.container}>
                    <Image
                        style={styles.itemImage}
                        source={assets.book}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.title} numberOfLines={1}>{itemData.title}</Text>
                        <StarRating rating={itemData.rating}/>
                        <Text style={styles.description} numberOfLines={2}>{itemData.description}</Text>
                        <LinkButton title={itemData.linkText} style={styles.peopleReadCount}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

RatedListItem.defaultProps = {
    testID: 'linkButton',
    itemData: exampleItem,
};

RatedListItem.propTypes = {
    testID: PropTypes.string,
    onPress: PropTypes.func,
    itemData: PropTypes.object,
};

export default RatedListItem;