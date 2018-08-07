import {StyleSheet} from "react-native";
import {colors} from '../../common/colors';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.black,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        textAlign: 'center',
        fontSize: 50,
        color: colors.white,
    },
    description: {
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 20,
        color: colors.white,
    },

});
