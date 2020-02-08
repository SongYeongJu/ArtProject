import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../components/settingStyle';
import headerStyle from '../components/headerStyle';

class SettingsScreen extends React.Component {
    _onPress = () => {
        //    alert("item : "+ item.key );
        this.props.navigation.push('UserListViews');
    }  
    _onPressSettingButton = () => {
        this.props.navigation.push('SettingListViews');
    }  
    
                
    render(){
  return (
      <View style={styles.container}>
         <View style={headerStyle.header2}> 
            <Image style={headerStyle.headerImage2} source={require('../image/color_logo.png')}/>
            <TouchableOpacity style={headerStyle.settingButton} onPress={() => this._onPressSettingButton()}>
                <Image style={headerStyle.settingButtonImage} source={require('../image/setting.png')}/>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>

              <View style={{ alignSelf: "center", marginTop:5 }}>
                  <View style={styles.profileImage}>
                      <Image source={require("../image/jackson.jpg")} style={styles.image} resizeMode="center"></Image>
                  </View>
                
                  
                  <View style={styles.add}>
                    <TouchableOpacity onPress={() => this._onPress()}>
                      <Ionicons name="ios-add" size={18} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                    </TouchableOpacity>
                  </View>
              </View>

              <View style={styles.infoContainer}>
                  <Text style={[styles.text, { fontWeight: "200", fontSize: 20 }]}>Quminsoek</Text>
                  <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Art lover</Text>
              </View>

              <View style={styles.statsContainer}>
                  <TouchableOpacity 
                        onPress={() => this._onPress()}
                        style={styles.statsBox}>
                      <Text 
                        style={[styles.text, { fontSize: 24 }]}>10</Text>
                      <Text style={[styles.text, styles.subText]}>Likes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}
                        onPress={() => this._onPress()}>
                      <Text style={[styles.text, { fontSize: 24 }]}>10</Text>
                      <Text style={[styles.text, styles.subText]}>Upload</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.statsBox}
                    onPress={() => this._onPress()}>
                      <Text style={[styles.text, { fontSize: 24 }]}>10</Text>
                      <Text style={[styles.text, styles.subText]}>Sell</Text>
                  </TouchableOpacity>
              </View>

              <View style={{ marginTop: 32 }}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      <View style={styles.mediaImageContainer}>
                          <Image source={require("../image/ba1.jpg")} style={styles.image} resizeMode="cover"></Image>
                      </View>
                      <View style={styles.mediaImageContainer}>
                          <Image source={require("../image/ba2.jpg")} style={styles.image} resizeMode="cover"></Image>
                      </View>
                      <View style={styles.mediaImageContainer}>
                          <Image source={require("../image/ba3.jpg")} style={styles.image} resizeMode="cover"></Image>
                      </View>
                  </ScrollView>
              </View>
              
                  
             
          </ScrollView>
      </View>
  );
}}

export default SettingsScreen;