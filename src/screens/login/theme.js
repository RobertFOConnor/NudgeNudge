import {colors} from "../../common/colors";
import {assets} from "../../common/assets";

export const theme = {

    //Background
    marginHorizontal: 40,
    marginVertical: 30,
    backgroundColor: colors.white,
    backgroundImage: assets.background_nature,

    //Text input theme (Email / Password)
    textInputHeight: 50,
    textInputRadius: 25,
    textInputVerticalSpacing: 10,
    textInputAlignment: 'center',
    textInputBorderWidth: 0.5,
    textInputBorderColor: colors.white,
    textInputUnderlineWidth: 0.5,
    textInputUnderlineColor: colors.white,
    textInputColor: null,
    textInputTextColor: colors.white,

    //Button theme (Login)
    buttonHeight: 50,
    buttonRadius: 25,
    buttonVerticalSpacing: 40,
    buttonBorderWidth: 0,
    buttonBorderColor: colors.transparent_white,
    buttonColor: colors.blue,
    buttonTextColor: colors.white,

    //Social Buttons (Google / Facebook)
    allowGoogleSignIn: false,
    allowFacebookSignIn: true,
    socialButtonVerticalSpacing: 20,

    //Bottom Link theme (Register / Forgot password)
    bottomLinkVerticalSpacing: 40,
    bottomLinkColor: colors.white,
};