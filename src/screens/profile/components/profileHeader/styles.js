import {StyleSheet} from "react-native";
import {colors} from '../../../../common/colors';
import {theme} from '../../theme';

const defaultStyles = {
    container: {
        // TODO add profile bg support.
    },
    contentContainer: {
        marginTop: 80,
        marginHorizontal: theme.marginHorizontal,
        alignItems: 'center',
    },
    textContainer: {
        marginTop: 5,
    },
    userName: {
        color: colors.profile_text,
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    userLocation: {
        color: colors.profile_text,
        fontSize: 14,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    editButton: {
        marginRight: 10,
        marginTop: 20,
        height: 40,
        backgroundColor: null,
        borderColor: colors.transparent_white,
        borderWidth: 2,
        borderRadius: 5,
    },
    followButton: {
        marginTop: 20,
        height: 40,
        backgroundColor: colors.blue,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 12,
    },
};

const leftStyles = StyleSheet.create({
    ...defaultStyles,
    contentContainer: {
        ...defaultStyles.contentContainer,
        flexDirection: 'row',
    },
    textContainer: {
        ...defaultStyles.textContainer,
        flex: 1,
        marginLeft: 20,
    },
    buttonContainer: {
        ...defaultStyles.buttonContainer,
        flex: 1,
    },
});

const centeredStyles = StyleSheet.create({
    ...defaultStyles,
    userName: {
        ...defaultStyles.userName,
        textAlign: 'center',
    },
    userLocation: {
        ...defaultStyles.userLocation,
        textAlign: 'center',
    },
});

export const styles = theme.centeredProfile ? centeredStyles : leftStyles;
