import React, {Component} from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../components/loginStyle";
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Setting from './Setting';

class Main extends Component{
    constructor(props) {
      super(props);
      this.state={user_id:"", user_pw: ""};
    }
    render() {
      return (
          <Tab1/>
      );
    }
}
  
  const TabNavigator = createBottomTabNavigator({
    Home: Main,
    Tab2: Tab2,
    Tab3: Tab3,
    Settings: Setting,
  }
);
  
export default createAppContainer(TabNavigator); 
