import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

class StartScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Image
            style={styles.icon2}
            source={require('../image/icon.png')}/>

        <TouchableOpacity 
          style={styles.loginButton}
          onPress = {()=>this.props.navigation.navigate('Logins')}
          >
          <Text style={styles.submitButtonText}>Signed In</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.registerButton}
          onPress = {()=>this.props.navigation.navigate('Joins')}
          >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    width: '100%',
    height: '100%',
    flexDirection : 'column',
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#333333',
  },
  submitButtonText: {
    textAlign:"center",
    color:'white',
    margin:12,
  },
  registerButtonText: {
    textAlign:"center",
    color:'gray',
    margin:12,
  },
  icon2: {
    width:"100%",
    resizeMode:"contain",
    justifyContent: 'center',
    marginVertical: 100,
  },
  loginButton : {
    width:'60%',
    marginHorizontal: '20%',
    marginVertical: 5,
    backgroundColor:'#AAAAAA',
    borderRadius: 5,
},
  registerButton : {
    width:'60%',
    marginHorizontal: '20%',
    marginVertical: 5,
    backgroundColor:'#222222',
    borderRadius: 5,

  },
});


export default StartScreen;
