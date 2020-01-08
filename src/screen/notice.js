import React, {Component} from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity,StyleSheet } from "react-native";
import NoticeNote from './NoticeNote';
import { Ionicons } from "@expo/vector-icons";

export default class notice extends React.Component{
  constructor(props){
    super(props);
    this.state={
      noteArray: [],
      noteText: '',
    }
  }

  render() {

    let notes = this.state.noteArray.map((val,key)=>{
      return <NoticeNote key={key} keyval={key} val={val}
              deleteMethod={ ()=> this.deleteNote(key)} />
    });
    return (
      <View style = {styles.container}>
        <View style={styles.titleBar}>
              <TouchableOpacity onPress={() => this.props.navigation.push('SettingListViews')}>
                  <Ionicons name="ios-arrow-back" size={24} color="#000000"></Ionicons>
              </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}> -Notice-</Text>
        </View>
        
        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>

        <View style={styles.footer}>

          <TextInput
            style={styles.textInput}
            onChangeText={(noteText)=>this.setState({noteText})}
            value={this.state.noteText}
            placeholder='>notice'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'>
          </TextInput>
      </View>
      <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
      <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      </View>
    );
  }
  addNote(){
    if(this.state.noteText){
      let d=new Date();
      this.state.noteArray.push({
        'date':d.getFullYear()+
        "/"+(d.getMonth()+1)+
        "/"+d.getDate(),
        'note':this.state.noteText
      });
      this.setState({noteArray: this.state.noteArray});
      this.setState({noteText: ''});
    }
  }

  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray: this.state.noteArray});
  }

}

  const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 70,
        marginHorizontal: 16
    },
    header: {
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth:10,
      borderBottomColor: '#ddd',
    },
    headerText: {
      color: 'white',
      fontSize: 18,
      padding:  26,
    },
    scrollContainer:{
      flex:1,
      marginBottom: 100,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
    },
    textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth:2,
      borderTopColor:'#ededed',
    },
    addButton: {
      position: 'absolute',
      zIndex:11,
      right:20,
      bottom: 90,
      backgroundColor: '#000000',
      width:90,
      height:90,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 24,
    }
  });