import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, {Component} from 'react';

export default class SettingListView extends Component {
 
  render() {
 
    return (
 
      <View style={styles.container}>
        
        <View style={styles.header}>           
               <Text style={styles.headerTitle}>Setting</Text>
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
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF4",
    shadowColor: "#454D65",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10
},
headerTitle: {
    fontSize: 20,
    fontWeight: "500"
},
  text: {
      fontFamily: "HelveticaNeue",
      backgroundColor: '#00000000',
      width:"100%",
      height:'100%',
      fontSize: 20,
      textAlign:'left',
      textAlignVertical:'center',
      alignContent:'center',
      alignItems:'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width:"100%",
    height:'10%',
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
 
