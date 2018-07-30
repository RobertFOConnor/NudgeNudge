import { Navigation } from 'react-native-navigation';
import Login from '../screens/login';
import Profile from '../screens/profile';
import Boggle from '../screens/boggle';

const ENTRY_SCREEN = 'Profile';

const screens = {
    'Login': Login,
    'Profile': Profile,
    'Boggle': Boggle,
};

const registerScreens = () => {
    Object.keys(screens).forEach(key =>
        Navigation.registerComponent(key, () => screens[key]),
    );
};

export const startApp = () => {
    registerScreens();

    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
            root: {
                component: {
                    name: ENTRY_SCREEN
                }
            },
            options: {
                animated: true,
            }
        });
    });
};

export const resetToScreen = screen => {
    Navigation.setRoot({
        root: {
            component: {
                name: screen,
                passProps: {
                    user: this.state.email,
                },
            }
        }
    });
};