import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import React, {Component} from 'react';
import headerStyle from '../components/headerStyle';

export default class SettingListView extends Component {
 
  render() {
 
    return (
 
      <View style={styles.container}>
        
        <View style={headerStyle.header}> 
            <Image style={headerStyle.headerImage} source={require('../image/color_logo.png')}/>
          </View>
 
        <TouchableOpacity
          style={[styles.button,{marginTop:'2%'}]}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBECF4",
    width:"100%",
    height:'100%',

  },
  text: {
      fontFamily: "HelveticaNeue",
      backgroundColor: '#00000000',
      width:"100%",
      fontSize: 20,
      textAlign:'left',
      textAlignVertical:'center',
      alignContent:'center',
      alignItems:'center',
      padding : 15,
      fontWeight:'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#FFFFFF',
    width:"100%",
    height:'8%',
    marginVertical:'1%',
    textAlignVertical:'center',
    textAlign:'center',
  },
  
  titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 70,
      width:"100%",
      marginHorizontal: 16
  },
 
});
 
