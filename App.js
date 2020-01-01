import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/screen/Login';
import Join from './src/screen/Join';
import Main from './src/screen/Main';
import Setting from './src/screen/Setting';
 
const AppNavigator = createStackNavigator(
  {
    Logins: Login,
    Joins: Join,
    Mains : Main, 
//    Settings : Setting, 
  },
  { 
    initialRouteName: 'Logins',
    headerMode: 'none',
  }
);
export default createAppContainer(AppNavigator);

