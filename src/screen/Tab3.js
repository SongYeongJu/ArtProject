import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../components/loginStyle";
import { createBottomTabNavigator } from 'react-navigation-tabs';

class Tab3 extends React.Component {
    render() {
      return (
        <View style={styles.container}> 
          <Text>Tab3!</Text>
        </View>
      );
    }
  }
  

export default Tab3;
