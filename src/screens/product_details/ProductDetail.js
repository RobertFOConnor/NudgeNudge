import React, {Component} from 'react';
import {View, ScrollView, StatusBar, Text, Image, Animated} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {assets} from "../../common/assets";
import StarRating from "../../components/starRating";
import {exampleItem} from "../../utils/ProfileDataAPI";
import Button from "../../components/button/Button";
import {Navigation} from 'react-native-navigation';

class ProductDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fadeOutAnimation: new Animated.Value(1),
        };
    }

    renderHeader = product =>
        <View style={styles.itemContainer}>
            <Image
                style={styles.itemImage}
                source={product.image ? {uri: product.image} : assets.book}
            />
            <View style={styles.itemTextContainer}>
                <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
                <Text style={styles.description} numberOfLines={1}>{product.genres}</Text>
                <Text style={styles.description} numberOfLines={1}>{product.year}</Text>
                <StarRating rating={product.rating}/>
            </View>
        </View>;

    renderInteractionBar = () =>
        <View style={styles.interactionBarContainer}>
            {this.renderInteractionButton('heart', 'Like')}
            {this.renderInteractionButton('share-alt', 'Share')}
            {this.renderInteractionButton('list', 'Add to list')}
        </View>;

    renderInteractionButton = (iconName, text) => <Button
        leftIconSize={20}
        leftIcon={iconName}
        title={text}
        textStyle={styles.interactionBarButtonText}
        style={styles.interactionBarButton}/>;


    renderDivider = () => <View style={styles.divider}/>;

    render() {
        const {product} = this.props;

        return (
            <ScrollView style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.container}>
                    {product.bg_image &&
                    <Image
                        style={styles.backgroundImage}
                        source={{uri: product.bg_image}}
                        blurRadius={0.5}
                    />}
                    <Button
                        style={styles.backButton}
                        leftIcon={"angle-left"}
                        leftIconSize={38}
                        onPress={() => Navigation.pop('TEST')}
                    />

                    {this.renderHeader(product)}
                    {this.renderDivider()}
                    {this.renderInteractionBar()}
                    {this.renderDivider()}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsTitle} numberOfLines={1}>Details</Text>
                        <Text style={styles.detailsText} numberOfLines={4}>{product.description}</Text>
                    </View>
                    {this.renderDivider()}
                    <Text style={styles.trailerText} numberOfLines={1}>Watch the trailer</Text>
                    {this.renderDivider()}
                </View>
            </ScrollView>
        );
    }
}

ProductDetail.defaultProps = {
    product: exampleItem,
};

ProductDetail.propTypes = {
    product: PropTypes.object,
};

export default ProductDetail;