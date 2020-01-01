import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../components/loginStyle";
import { createBottomTabNavigator } from 'react-navigation-tabs';

class Tab2 extends React.Component {
    render() {
      return (
        <View style={styles.container}> 
            <Text>Tab2!</Text>
        </View>
      );
    }
  }
  

export default Tab2;
