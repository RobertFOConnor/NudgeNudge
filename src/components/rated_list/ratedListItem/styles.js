import {StyleSheet} from "react-native";
import {colors} from '../../../common/colors';
import {theme} from "../../../screens/profile/theme";

export const styles = StyleSheet.create({

    container: {
        paddingVertical: 20,
        flexDirection: 'row',
        marginHorizontal: theme.marginHorizontal,
    },
    itemImage: {
        width: 80,
        height: 120,
        borderRadius: 5,
    },
    textContainer: {
        flexShrink: 1,
        marginTop: 10,
        marginLeft: 20,
    },
    title: {
        color: colors.profile_text,
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        color: colors.profile_text,
        fontSize: 10,
        lineHeight: 16,
        marginBottom: 10,
    },
    peopleReadCount: {
        color: colors.blue,
        fontSize: 12,
        textAlign: 'left',
        textDecorationLine: 'none',
    },
    divider: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 1,
        backgroundColor: colors.transparent_white,
    },
});
