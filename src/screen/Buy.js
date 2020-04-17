import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from "@expo/vector-icons";

export default class SettingListView extends Component {
 
  render() {
 
    return (
 
      <View style={styles.container}>

        <View style={styles.titleBar}>
              <TouchableOpacity onPress={() => this.props.navigation.push('Mains')}>
                  <Ionicons name="ios-arrow-back" size={24} color="#000000"></Ionicons>
              </TouchableOpacity>
        </View>

        <Text style={styles.subText}>Settings Activity Screen</Text>
        
        <Text style={styles.text}>신한 110437899521 구민석</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('Mains')}>
 
          <Text style={styles.text}>무통장결제</Text>
 
        </TouchableOpacity>
       
 
      </View>
 
    );
  }
}

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
 
