import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from 'react-navigation';

import Main from './Main';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Setting from './Setting';
import Splash from './Splash';

export default class SettingListView extends Component {
 
  render() {
 
    return (
 
      <View style={styles.MainContainer}>
 
        <Text style={{ marginTop: 40, fontSize: 20 }}>Settings Activity Screen</Text>
 
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('Tab1')}>
 
          <Text style={styles.text}>개인정보</Text>
 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('Tab1')}>
 
          <Text style={styles.text}>공지사항</Text>
 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('Tab1')}>
 
          <Text style={styles.text}>포인트</Text>
 
        </TouchableOpacity>
 
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('Settings')}>
 
          <Text style={styles.text}>문의 및 건의</Text>
 
        </TouchableOpacity>
 
      </View>
 
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: Main,
  Tab2: Tab2,
  Tab3: Tab3,
  profile : Setting,
  Splashs: Splash,

},

{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor, image }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === "Home") {
        iconName = "ios-home";
      } else if (routeName === "Tab2") {
        iconName = "ios-person";
      } else if(routeName === "Tab3") {
          iconName = "ios-person";
      } else if (routeName === "Splashs") {
        iconName = "ios-chatboxes";
      } else if (routeName === "profile") {
        iconName = "ios-person";
      }

      return (
        (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        )
      );
    },
    tabBarOptions: {
      activeTintColor: "#74b9ff",
      inactiveTintColor: "gray"
    }
  })
}
);
const styles = StyleSheet.create({
 
  MainContainer: {
 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11
 
  },
 
  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },
 
  text: {
 
    color: '#fff'
  }
  
 
});