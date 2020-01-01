import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../components/loginStyle";
import { createBottomTabNavigator } from 'react-navigation-tabs';

class Tab1 extends React.Component {
    render() {
      return (
        <View style={styles.container}> 
          <Text>Tab1!</Text>
          </View>
      );
    }
  }
  
// test 
export default Tab1;
