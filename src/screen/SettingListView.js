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
        
        <View style={styles.header}>           
               <Text style={styles.headerTitle}>Setting</Text>
        </View>
 
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('notices')}>
 
          <Text style={styles.text}>개인정보</Text>
 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('notices')}>
 
          <Text style={styles.text}>공지사항</Text>
 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('notices')}>
 
          <Text style={styles.text}>포인트</Text>
 
        </TouchableOpacity>
 
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('notices')}>
 
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
    backgroundColor: "#EBECF4"
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF4",
    shadowColor: "#454D65",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10
},
headerTitle: {
    fontSize: 20,
    fontWeight: "500"
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
 
});
 
