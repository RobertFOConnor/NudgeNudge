import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import RatedListItem from './ratedListItem/index';
import {exampleItem} from "../../utils/ProfileDataAPI";

export const RatedList = ({onItemPressed}) =>
    <FlatList
        data={[exampleItem, exampleItem, exampleItem, exampleItem, exampleItem, exampleItem]}
        renderItem={({item}) => <RatedListItem itemData={item} onPress={onItemPressed}/>}
    />;

RatedList.defaultProps = {
    testID: 'linkButton',
};

RatedList.propTypes = {
    testID: PropTypes.string,
    onItemPressed: PropTypes.func,
};

export default RatedList;