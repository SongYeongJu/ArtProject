import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../components/loginStyle";

class Main extends Component{
  constructor(props) {
    super(props);
    this.state={user_id:"", user_pw: ""};
  }
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

export default Main;
