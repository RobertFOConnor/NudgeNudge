import {Navigation} from 'react-native-navigation';
import Login from '../screens/login';
import Profile from '../screens/profile';
import Boggle from '../screens/boggle';
import ProductDetail from '../screens/product_details';
import Search from '../screens/search';
import {generateImages} from "../utils/IconUtils";
import {assets} from "../common/assets";

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

    this.icons = [
        {name: 'list'},
        {name: 'user'},
    ];

    generateImages(this.icons)
        .then(icons => {
            this.icons = icons;
            const genIcons = icons;

            Navigation.events().registerAppLaunchedListener(() => {

                Navigation.setDefaultOptions({
                    animated: false,
                    topBar: {
                        visible: false,
                    },
                    bottomTabs: {
                        visible: true,
                        animate: false, // Controls whether BottomTabs visibility changes should be animated
                        currentTabIndex: 0,
                        currentTabId: 'currentTabId',
                        testID: 'bottomTabsTestID',
                        drawBehind: false,
                        backgroundColor: 'black',
                        tabColor: 'white',
                        selectedTabColor: 'red',
                    },
                });

                Navigation.setRoot({
                    root: {
                        bottomTabs: {
                            children: [{
                                stack: {
                                    children: [{
                                        component: {
                                            name: 'Login',
                                            passProps: {
                                                text: 'This is tab 1'
                                            },
                                            options: {
                                                bottomTab: {
                                                    text: 'Tab 1',
                                                    icon: genIcons['list'],
                                                    testID: 'FIRST_TAB_BAR_BUTTON',
                                                }
                                            },
                                        }
                                    }],

                                }
                            },
                                {
                                    stack: {
                                        children: [{
                                            component: {
                                                name: 'Profile',
                                                passProps: {
                                                    text: 'This is tab 2'
                                                },
                                                options: {
                                                    bottomTab: {
                                                        text: 'Tab 2',
                                                        icon: genIcons['user'],
                                                        testID: 'SECOND_TAB_BAR_BUTTON',
                                                    }
                                                }
                                            }
                                        }],
                                    },
                                }],
                        }
                    }
                });
            });
        })
        // eslint-disable-next-line no-console
        .catch(error => console.error(error));


    registerScreens();



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
                customTransition: {
                    animations: [
                        {
                            type: 'sharedElement',
                            fromId: props.sharedElement,
                            toId: 'image2',
                            startDelay: 0,
                            springVelocity: 0,
                            duration: 0.8,
                        }
                    ],
                    duration: 0.8,
                },
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