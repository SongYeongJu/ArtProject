import React from 'react';
import {Platfrom,StyleSheet,Text,StatusBar} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/screen/Login';
import Join from './src/screen/Join';
import Main from './src/screen/Main';
import Setting from './src/screen/Setting';
import Splash from './src/screen/Splash';

const AppNavigator = createStackNavigator(
  {
    Splashs: Splash,
    Logins: Login,
    Joins: Join,
    Mains : Main, 
    Settings : Setting, 
  },
  { 
    initialRouteName: 'Logins',
    headerMode: 'none',
  }
);
export default createAppContainer(AppNavigator);

