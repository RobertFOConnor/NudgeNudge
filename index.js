import { Navigation } from 'react-native-navigation';
import Login from './src/screens/login/Login';
import Profile from './src/screens/profile/Profile';
import Boggle from './src/screens/boggle/Boggle';

Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Profile', () => Profile);
Navigation.registerComponent('Boggle', () => Boggle);

// start the app
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'Login'
            }
        }
    });
});