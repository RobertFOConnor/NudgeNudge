import firebase from 'react-native-firebase';
import {AccessToken, LoginManager} from "react-native-fbsdk";
import {GoogleSignin} from "react-native-google-signin";

export const setup = () => {
    GoogleSignin.configure({
        iosClientId: '326047336299-m50ilgs22m95sn9i4rpqiorn19295g9c.apps.googleusercontent.com', // only for iOS
    });
    GoogleSignin.signOut();
    LoginManager.logOut();
};

export const facebookSignIn = ({onSuccess}) => {
    try {
        LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
            AccessToken.getCurrentAccessToken().then((data) => {
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                return firebaseSignIn({credential: credential, onSuccess});
            })
        );
    } catch (error) {
        console.error(error);
    }
};

export const googleSignIn = ({onSuccess}) => {
    try {
        GoogleSignin.signIn()
            .then((signInResponse) => {
                const credential = firebase.auth.GoogleAuthProvider.credential(
                    signInResponse.idToken,
                    signInResponse.accessToken
                );
                firebaseSignIn({credential: credential, onSuccess});
            });
    } catch (error) {
        console.error(error);
    }
};

export const firebaseSignIn = ({email, password, credential, onSuccess}) => {
    if (credential) { //Use social login (Facebook / Google)

        firebase.auth().signInAndRetrieveDataWithCredential(credential).then((user) => {
            onSuccess();
        }).catch((error) => {
            console.error(error);
        });

    } else { //Use email and password

        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password).then((user) => {
            onSuccess();
        }).catch((error) => {
            console.error(error);
        });
    }
};