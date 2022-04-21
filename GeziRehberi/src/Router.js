import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'; //"react-navigation": "^4.4.2",
import {createStackNavigator} from 'react-navigation-stack'; //"react-navigation-stack": "^2.8.4",
import {createDrawerNavigator} from 'react-navigation-drawer'; //"react-navigation-drawer": "^2.4.10",
import {createBottomTabNavigator} from 'react-navigation-tabs'; //"react-navigation-tabs": "^2.9.2"
import Icon from "react-native-vector-icons/AntDesign";
import DrawerMenu from './components/DrawerMenu';
import Login from './screens/Login';
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import Main from "./screens/Main";
import Account from "./screens/Account";
import Settings from "./screens/Settings";
import Favorite from "./screens/Favorite";
import DetailHotels from "./screens/DetailHotels";

const AuthNavigator = createStackNavigator(
  {
    Login: Login,
  },
  {
    headerMode: 'none',
  },
);
const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Detail: Detail,
    Main: Main,
    Account: Account,
    Settings: Settings,
    Favorite: Favorite,
    DetailHotels: DetailHotels
  },
  {
    mode: 'modal',
    navigationOptions: {
      headerLeft: () => { null},
      headerShown:false,
      defaultNavigationOptions: {
        headerBackTitle: null,
      },
    },
  },
);
const DrawerNavigator = createDrawerNavigator(
  {
    Main: AppNavigator,
  },
  {
    contentComponent: DrawerMenu,
  },
);
const MainNavigator = createSwitchNavigator(
  {
    auth: AuthNavigator,
    app: DrawerNavigator,
  },
  {
    initialRouteName: 'auth',
  },
);

export default createAppContainer(MainNavigator);
