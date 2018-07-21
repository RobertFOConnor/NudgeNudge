import {StyleSheet} from "react-native";
import {colors} from '../../common/colors';

const DEFAULT_HEIGHT = 50;

export const textFieldStyles = StyleSheet.create({
    textInput: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.white,
        color: colors.white,
        fontSize: 16,
        opacity: 0.85,
        borderWidth: 0.5,
        paddingHorizontal: 15,
        borderRadius: DEFAULT_HEIGHT / 2,
        height: DEFAULT_HEIGHT,
    },
});
