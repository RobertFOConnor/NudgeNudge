import React, {Component} from 'react';
import {View, ScrollView, StatusBar, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {assets} from "../../common/assets";
import StarRating from "../../components/starRating";
import {exampleItem} from "../../utils/ProfileDataAPI";
import Button from "../../components/button/Button";
import AnimatedText from "../../components/animated_text/AnimatedText";
import {Navigation} from 'react-native-navigation';
import BackButton from "../../components/back_button/BackButton";
import IconButton from "../../components/icon_button/IconButton";

class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.onBackPress = this.onBackPress.bind(this);
    }

    renderHeader = product =>
        <View style={styles.itemContainer}>
            <Navigation.Element elementId='image2'>
                <Image
                    style={styles.itemImage}
                    source={product.image ? {uri: product.image} : assets.book}
                />
            </Navigation.Element>
            <View style={styles.itemTextContainer}>
                <AnimatedText style={styles.title} numberOfLines={3} text={product.title}/>
                <AnimatedText style={styles.description} numberOfLines={1} text={product.genres}/>
                <AnimatedText style={styles.description} numberOfLines={1} text={product.year}/>
                <StarRating rating={product.rating}/>
            </View>
        </View>;

    renderInteractionBar = () =>
        <View style={styles.interactionBarContainer}>
            {this.renderInteractionButton('heart', 'Like')}
            {this.renderInteractionButton('share-alt', 'Share')}
            {this.renderInteractionButton('list', 'Add to list')}
        </View>;

    renderInteractionButton = (iconName, text) =>
        <Button
            leftIconSize={20}
            leftIcon={iconName}
            title={text}
            textStyle={styles.interactionBarButtonText}
            style={styles.interactionBarButton}
        />;


    async onBackPress() {
        console.log("WAIT_BACK");
        await Navigation.pop(this.props.componentId);
        console.log("BACK");
    }

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

                    <BackButton onPress={this.onBackPress}/>

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
    componentId: PropTypes.string,
};

export default ProductDetail;