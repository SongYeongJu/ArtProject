import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, {Component} from 'react';

export default class SettingListView extends Component {
 
  render() {
 
    return (
 
      <View style={styles.MainContainer}>
 
        <Text style={{ marginTop: 40, fontSize: 20 }}>Settings Activity Screen</Text>
 
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('Tab1')}>
 
          <Text style={styles.text}>개인정보</Text>
 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('Tab1')}>
 
          <Text style={styles.text}>공지사항</Text>
 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('Tab1')}>
 
          <Text style={styles.text}>포인트</Text>
 
        </TouchableOpacity>
 
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push('Settings')}>
 
          <Text style={styles.text}>문의 및 건의</Text>
 
        </TouchableOpacity>
 
      </View>
 
    );
  }
}
const styles = StyleSheet.create({
 
  MainContainer: {
 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11
 
  },
 
  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },
 
  text: {
 
    color: '#fff'
  }
  
 
});