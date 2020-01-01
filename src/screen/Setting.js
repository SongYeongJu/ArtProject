import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../components/loginStyle";
import { createBottomTabNavigator } from 'react-navigation-tabs';

class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}> 
          <Text>Settings!</Text>
        </View>
      );
    }
  }
  

export default SettingsScreen;
