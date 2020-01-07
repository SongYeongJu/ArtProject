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
 
      <View style={styles.container}>

        <View style={styles.titleBar}>
              <TouchableOpacity onPress={() => this.props.navigation.push('Settings')}>
                  <Ionicons name="ios-arrow-back" size={24} color="#000000"></Ionicons>
              </TouchableOpacity>
        </View>

        <Text style={styles.subText}>Settings Activity Screen</Text>
 
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('PersonInfos')}>
 
          <Text style={styles.text}>개인정보</Text>
 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('notices')}>
 
          <Text style={styles.text}>공지사항</Text>
 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('points')}>
 
          <Text style={styles.text}>포인트</Text>
 
        </TouchableOpacity>
 
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('helps')}>
 
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
  container: {
      flex: 1,
      backgroundColor: "#fff"
  },
  text: {
      fontFamily: "HelveticaNeue",
      color: "#52575D"
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },
  
  titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 70,
      marginHorizontal: 16
  },
  subText: {
      alignItems: 'center',
      fontSize: 12,
      color: "#AEB5BC",
      textTransform: "uppercase",
      fontWeight: "500"
  },
  
 
});
 
