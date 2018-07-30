import {StyleSheet} from "react-native";
import {colors} from '../../../../common/colors';
import {theme} from "../../theme";


export const styles = StyleSheet.create({

    container: {
        paddingVertical: 3,
        marginVertical: 30,
        borderRadius: 10,
        marginHorizontal: theme.marginHorizontal,
        backgroundColor: colors.socialBar,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        margin: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        backgroundColor: colors.transparent_white,
        width: 1,
        height: 40,
    },
    title: {
        color: colors.profile_text,
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    count: {
        color: colors.profile_text,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});
