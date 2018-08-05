import {Navigation} from 'react-native-navigation';
import Login from '../screens/login';
import Profile from '../screens/profile';
import Boggle from '../screens/boggle';
import ProductDetail from '../screens/product_details';

const ENTRY_SCREEN = 'Profile';

const screens = {
    'Login': Login,
    'Profile': Profile,
    'Boggle': Boggle,
    'ProductDetail': ProductDetail,
};

const registerScreens = () => {
    Object.keys(screens).forEach(key =>
        Navigation.registerComponent(key, () => screens[key]),
    );
};

export const startApp = () => {
    registerScreens();


    Navigation.events().registerAppLaunchedListener(() => {

        Navigation.setDefaultOptions({
            animated: false,
            topBar: {
                visible: false,
            },
        });

        Navigation.setRoot({

            root: {
                stack: {
                    id: 'TEST',
                    children: [
                        {
                            component: {
                                name: ENTRY_SCREEN
                            },

                        }
                    ],
                },
            },

            options: {
                animated: true,
                topBar: {
                    title: {
                        text: 'My Screen'
                    },
                    drawBehind: true,
                    visible: true,
                    animate: false
                },
            }
        });
    });
};

export const resetToScreen = screen => {
    Navigation.setRoot({
        root: {
            component: {
                name: screen,
            }
        }
    });
};

export const pushScreen = (screen, props) => {
    Navigation.push('TEST', {
        component: {
            name: screen,
            passProps: {
                ...props,
            },
        },
        options: {
            topBar: {
                title: {
                    text: 'My Screen'
                },
                drawBehind: true,
                visible: false,
                animate: false
            },
            animated: false,
        }
    });
};