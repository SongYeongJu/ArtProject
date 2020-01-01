import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../components/loginStyle";

class Login extends Component{
  constructor(props) {
    super(props);
    this.state={user_id:"", user_pw: ""};
  }
  handleEmail = text => {
    this.setState({ user_id: text });
  };
 
  handlePassword = text => {
    this.setState({ user_pw: text });
  };
 
  login = (user_id, user_pw) => {
//    alert("user id :" + user_id + ", password :" + user_pw);
    this.props.navigation.navigate('Mains');
  };
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.blank3}/>
        <Image
            style={styles.icon}
            source={require('../image/icon.png')}/>
        <View style={styles.blank1}/>

        <View style={styles.items}>
          <View style={styles.blank1}/>
          <TextInput 
            style={styles.input}
            onChangeText ={this.handleEmail}
            placeholder="  ID"
            placeholderTextColor="white"
          />
          <View style={styles.blank1}/>
        </View>

        <View style={styles.items}>
          <View style={styles.blank1}/>
          <TextInput 
            style={styles.input}
            onChangeText ={this.handlePassword}
            secureTextEntry="true"
            placeholder="  PW"
            placeholderTextColor="white"
          />
          <View style={styles.blank1}/>
        </View>

        <TouchableOpacity 
          style={styles.submitButtonText}
          onPress={() => this.login(this.state.user_id, this.state.user_pw)}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        <View style={styles.blank2}/>

        <TouchableOpacity 
          style={styles.registerButtonText}
          onPress = {()=>this.props.navigation.navigate('Joins')}
          >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default Login;
