import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import RatedListItem from './ratedListItem/index';
import {exampleItemList} from "../../utils/ProfileDataAPI";
import AnimatedContainer from "../animated_container/AnimatedContainer";
import {styles} from "./styles";

export const RatedList = ({onItemPressed}) =>
    <AnimatedContainer
        style={styles.container}
        contents={
            <FlatList
                data={exampleItemList}
                renderItem={({item}) => <RatedListItem itemData={item} onPress={onItemPressed}/>}
            />
        }
        delay={700}
    />;

RatedList.defaultProps = {
    testID: 'linkButton',
};

RatedList.propTypes = {
    testID: PropTypes.string,
    onItemPressed: PropTypes.func,
};

export default RatedList;