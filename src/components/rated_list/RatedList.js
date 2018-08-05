import React from 'react';
import {View, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import RatedListItem from './ratedListItem/index';
import {exampleItemList} from "../../utils/ProfileDataAPI";
import AnimatedContainer from "../animated_container/AnimatedContainer";
import {styles} from "./styles";

export const RatedList = ({onItemPressed, items}) =>
    <AnimatedContainer
        style={styles.container}
        contents={
            <View>
                <Text style={styles.title}>Representative work</Text>
            <FlatList
                data={items}
                renderItem={({item}) => <RatedListItem itemData={item} onPress={onItemPressed}/>}
            />
            </View>
        }
        delay={700}
    />;

RatedList.defaultProps = {
    testID: 'linkButton',
    items: exampleItemList,
};

RatedList.propTypes = {
    testID: PropTypes.string,
    onItemPressed: PropTypes.func,
    items: PropTypes.array,
};

export default RatedList;