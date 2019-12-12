import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './containers/Login';
import Signup from './containers/Signup';
// import SplashScreen from './containers/SplashScreen';
import ListingData from './containers/ListingData';
import Messages from './containers/whatsapp/Messages';
import LadningPage from './containers/whatsapp/LadningPage';
import RightHeader, {HeaderTitle} from './containers/whatsapp/AppHeader';
import TabViewExample from './containers/whatsapp/TabViewExample';

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

const Root = createAppContainer(MainNavigator)

export default Root;
