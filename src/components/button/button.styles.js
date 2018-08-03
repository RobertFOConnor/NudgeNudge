import {StyleSheet} from "react-native";
import {colors} from '../../common/colors';

const HEIGHT = 50;

export const buttonStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: HEIGHT,
        backgroundColor: colors.button,
        paddingHorizontal: 15,
        borderRadius: HEIGHT / 2,
    },
    leftImage: {
        width: 30,
        height: 30,
        marginRight: 15,
    },
    leftIcon: {
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 18,
    },
});
