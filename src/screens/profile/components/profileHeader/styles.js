import {StyleSheet} from "react-native";
import {colors} from '../../../../common/colors';
import {theme} from '../../theme';

const TOP_MARGIN = 50;

const defaultStyles = {
    backgroundImage: {
        position: 'absolute',
        backgroundColor: 'blue',
        top: 0,
        left: 0,
        resizeMode: 'cover',
        width: '100%',
        height: TOP_MARGIN+theme.profileImageSize/2,
        justifyContent: 'center',
        opacity: 0.9,
    },
    contentContainer: {
        marginTop: TOP_MARGIN,
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
        marginTop: 20,
        height: 32,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    shareButton: {
        flex: 1,
        backgroundColor: null,
        borderColor: colors.share_button,
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5,
    },
    followButton: {
        flex: 1,
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
    editButton: {
        ...defaultStyles.editButton,
        marginRight: 5,
    },
});

export const styles = theme.centeredProfile ? centeredStyles : leftStyles;
