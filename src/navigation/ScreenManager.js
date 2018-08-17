import {Navigation} from 'react-native-navigation';
import Login from '../screens/login';
import Profile from '../screens/profile';
import Boggle from '../screens/boggle';
import ProductDetail from '../screens/product_details';
import Search from '../screens/search';

const ENTRY_SCREEN = 'Profile';

const screens = {
    'Login': Login,
    'Profile': Profile,
    'Boggle': Boggle,
    'ProductDetail': ProductDetail,
    'Search': Search,
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
                height: 0,
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
                    drawBehind: true,
                    visible: false,
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

export const pop = (componentId) => {
    Navigation.popToRoot(componentId);
};

export const pushScreen = (screen, props) => {
    Navigation.push(props.componentId, {
        component: {
            name: screen,
            passProps: {
                ...props,
            },
            options: {
                topBar: {
                    drawBehind: true
                },
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
        }
    });
};