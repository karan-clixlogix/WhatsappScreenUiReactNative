import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Login from './containers/Login';
import Signup from './containers/Signup';
// import SplashScreen from './containers/SplashScreen';
import ListingData from './containers/ListingData';
import Messages from './containers/whatsapp/Messages';
import LadningPage from './containers/whatsapp/LadningPage';
import RightHeader, {HeaderTitle} from './containers/whatsapp/AppHeader';
import TabViewExample from './containers/whatsapp/TabViewExample';
import MessageScreen from './containers/whatsapp/MessageScreen';

/*Main navigtion*/
const MainNavigator = createStackNavigator(
    {
        // SplashScreen: {screen: SplashScreen},
        Signup: {screen: Signup},
        Login: {screen: Login},
        ListingData: {screen: ListingData},
        Messages: {screen: Messages},
        LandingPage: {screen: LadningPage},
        TabView: {screen: TabViewExample},
    },
    {
        initialRouteName: 'Messages',
        defaultNavigationOptions: {
            headerTitle: (<HeaderTitle/>),
            headerStyle: {
                backgroundColor: '#195e53'
            },
            headerTintColor: '#fff',
            // headerTitleStyle: {
            //     fontWeight: 'bold'
            // },
            headerRight: () => <RightHeader/>
        }
    }
);
/*Main navigtion*/

/*Top navigation*/

const MessageStack = createStackNavigator(
    {
        Message: Messages,
        MessageScreen: MessageScreen,
    },
    {
        initialRouteName: 'Message',
        headerMode: 'none'
    }
);

MessageStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible = true;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'MessageScreen' ) {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
};

const TabNavigator = createMaterialTopTabNavigator(
    {
        Chats: MessageStack,
        Status: Signup,
        Calls: Login,
    },
    {
        swipeEnabled: true,
        animationEnabled: true,
        initialRouteName: 'Chats',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                console.log("routeName==>", routeName);
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Chats') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    IconComponent = HomeIconWithBadge;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options`;
                }
                console.log("routeName=>", navigation.state.routeName);

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#FFF',
            inactiveTintColor: '#c9c9c9',
        },
    }
);

const IconWithBadge = (props) => {
    const { name, badgeCount, color, size } = props;
    return (
        <View style={{ width: 24, height: 24, margin: 5 }}>
            <Ionicons name={name} size={size} color={color} />
            {badgeCount > 0 && (
                <View
                    style={{
                        // If you're using react-native < 0.57 overflow outside of parent
                        // will not work on Android, see https://git.io/fhLJ8
                        position: 'absolute',
                        right: -6,
                        top: -3,
                        backgroundColor: '#121212',
                        borderRadius: 6,
                        width: 12,
                        height: 12,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                        {badgeCount}
                    </Text>
                </View>
            )}
        </View>
    )
};

const HomeIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
    return <IconWithBadge {...props} badgeCount={3} />;
};
/*Top navigation*/


const style = StyleSheet.create({
    messageContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    headerStyle: {
        backgroundColor: '#195e53'
    },
    headerTitleStyle: {
        fontWeight: 'bold'
    }

});

const Root = createAppContainer(TabNavigator)

export default Root;
