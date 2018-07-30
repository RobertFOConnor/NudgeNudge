import {StyleSheet} from "react-native";
import {colors} from '../../../../common/colors';

export const STAR_SIZE = 20;

export const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    starContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        marginRight: 12
    },
    ratingText: {
        color: colors.yellow,
        fontSize: 18,
        fontWeight: 'bold'
    },
});
