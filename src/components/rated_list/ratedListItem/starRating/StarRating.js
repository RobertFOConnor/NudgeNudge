import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {styles, STAR_SIZE} from "./styles";
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
            arr.push(renderStar(i, "#E66"));
        } else if (rating % 1 !== 0 && i === Math.floor(rating) + 1) {
            arr.push(renderHalfStar(i));
        } else {
            arr.push(renderStar(i, "#555"));
        }
    }
    return arr;
};

const renderStar = (key, color) =>
    <Icon key={`star_${key}`} name="star" size={STAR_SIZE} color={color}/>;

const renderHalfStar = key =>
    <View>
        {renderStar(key, "#555")}
        <Icon style={{position: 'absolute', left: 0, bottom: 0}} name="star-half"
              size={STAR_SIZE} color={"#e66"}/>
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