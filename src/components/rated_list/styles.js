import {StyleSheet} from "react-native";
import {theme} from "../../screens/profile/theme";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 15,
        marginHorizontal: theme.marginHorizontal,
    },
});
