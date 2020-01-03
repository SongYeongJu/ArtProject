import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from 'react-navigation-tabs';

class Splash extends React.Component {
    render() {
      return (
        <View style={styles.container}> 
        <Image
            style={styles.icon}
            source={require('../image/icon.png')}/>
          <Text style={styles.title}>ARTALK</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container : {
      flex:1,
      height: '100%',
      flexDirection : 'column',
      backgroundColor : "#000000",
    },
    title : {
      flex:1,
      textAlignVertical:"center",
      color: 'white',
      fontSize:35,
      fontWeight:'bold',
      textAlign:"center",
      marginLeft:15,
      marginVertical:5,
    },
    subtitle : {
        flex:1,
        color: 'white',
        fontSize:15,
        textAlign:"center",
        fontWeight:"100",
        marginLeft:15,
        marginVertical:5,
      },
    icon: {
      flex:1,
      width:"auto",
      height: "auto",
      verticalalign: 'middle',
      resizeMode:"contain",
      justifyContent: 'center',
    },
  });
  
// test 
export default Splash;
