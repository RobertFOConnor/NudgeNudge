import {StyleSheet} from "react-native";
import {colors} from '../../../common/colors';
import {theme} from "../../../screens/profile/theme";

export const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        marginVertical: 15,
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
        marginBottom: 16,
    },
    peopleReadCount: {
        color: colors.blue,
        fontSize: 12,
        textAlign: 'left',
        textDecorationLine: 'none',
    },
});
