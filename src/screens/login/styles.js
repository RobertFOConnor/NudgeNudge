import {StyleSheet} from "react-native";
import {colors} from '../../common/colors';
import {theme} from './theme';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: !theme.backgroundImage ? theme.backgroundColor : colors.black,
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
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        opacity: 0.9,
    },
    contentContainer: {
        marginTop: 50,
        marginHorizontal: theme.marginHorizontal,
        marginVertical: theme.marginVertical,
    },
    textInputs: {
        height: theme.textInputHeight,
        borderRadius: theme.textInputRadius,
        textAlign: theme.textInputAlignment,
        marginBottom: theme.textInputVerticalSpacing,
        borderBottomWidth: theme.textInputUnderlineWidth,
        borderBottomColor: theme.textInputUnderlineColor,
        borderWidth: theme.textInputBorderWidth,
        borderColor: theme.textInputBorderColor,
        backgroundColor: theme.textInputColor,
        color: theme.textInputTextColor,
    },
    loginButton: {
        height: theme.buttonHeight,
        borderRadius: theme.buttonRadius,
        backgroundColor: theme.buttonColor,
        borderWidth: theme.buttonBorderWidth,
        borderColor: theme.buttonBorderColor,
        marginTop: theme.buttonVerticalSpacing - theme.textInputVerticalSpacing,
    },
    loginButtonText: {
        color: theme.buttonTextColor,
    },
    googleLoginButton: {
        height: theme.buttonHeight,
        borderRadius: theme.buttonRadius,
        backgroundColor: colors.white,
        borderWidth: theme.buttonBorderWidth,
        borderColor: colors.white,
        marginTop: theme.socialButtonVerticalSpacing,
    },
    googleLoginButtonText: {
        color: colors.black,
    },
    facebookLoginButton: {
        height: theme.buttonHeight,
        borderRadius: theme.buttonRadius,
        backgroundColor: colors.facebookBlue,
        borderWidth: theme.buttonBorderWidth,
        borderColor: colors.white,
        marginTop: theme.socialButtonVerticalSpacing,
    },
    facebookLoginButtonText: {
        color: colors.white,
    },
    bottomLink: {
        marginTop: theme.bottomLinkVerticalSpacing,
        color: theme.bottomLinkColor,
    },
    errorMessage: {
        textAlign: 'center',
        color: colors.error,
    },
    socialOptions: {
        textAlign: 'center',
        color: colors.white,
        margin: 10,
    },
});
