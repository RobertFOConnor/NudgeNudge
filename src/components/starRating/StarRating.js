import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {styles, STAR_SIZE} from "./styles";
import {colors} from "../../common/colors";
import Icon from 'react-native-vector-icons/FontAwesome';

export const StarRating = ({rating}) =>
    <View style={styles.container}>
        <View style={styles.starContainer}>
            {renderStarRating(rating)}
        </View>
        <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
    </View>;

export const renderStarRating = (rating) => {
    const arr = [];
    for (let i = 1; i < 6; i++) {
        if (i <= rating) {
            arr.push(renderStar(i, colors.star_rating));
        } else if (rating % 1 !== 0 && i === Math.floor(rating) + 1) {
            arr.push(renderHalfStar(i));
        } else {
            arr.push(renderStar(i, colors.star_rating_bg));
        }
    }
    return arr;
};

const renderStar = (key, color) =>
    <Icon key={`star_${key}`} name="star" size={STAR_SIZE} color={color}/>;

const renderHalfStar = key =>
    <View key={key}>
        {renderStar(key, colors.star_rating_bg)}
        <Icon style={{position: 'absolute', left: 0, bottom: 0}} name="star-half"
              size={STAR_SIZE} color={colors.star_rating}/>
    </View>;

StarRating.defaultProps = {
    testID: 'linkButton',
    rating: 5,
};

StarRating.propTypes = {
    testID: PropTypes.string,
    onPress: PropTypes.func,
    rating: PropTypes.number,
};

export default StarRating;