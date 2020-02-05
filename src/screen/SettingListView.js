import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import React, {Component} from 'react';

export default class SettingListView extends Component {
 
  render() {
 
    return (
 
      <View style={styles.container}>
        
        <View style={styles.header}> 
            <Image style={styles.headerImage} source={require('../image/color_logo.png')}/>
          </View>
 
        <TouchableOpacity
          style={styles.button}
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
  header: {
    width:'100%',
    height: '13%',
    paddingBottom:'2%',
    backgroundColor: "#FFF",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    // borderBottomWidth: 1,
    // borderBottomColor: "#EBECF4",
    // shadowColor: "#454D65",
    // shadowOffset: { height: 5 },
    // shadowRadius: 15,
    // shadowOpacity: 0.2,
    zIndex: 10
},
headerImage : {
  width: '100%',
  height:'33%',
  resizeMode:'contain',
},
headerTitle: {
    fontSize: 20,
    fontWeight: "500"
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
  },
  button: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#FFFFFF',
    width:"100%",
    height:'8%',
    marginVertical:'3%',
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
 
