import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import headerStyle from '../components/headerStyle';

class SettingsScreen extends React.Component {
    _onPress = () => {
        //    alert("item : "+ item.key );
        this.props.navigation.push('UserListViews');
    }  
    
                
    render(){
  return (
      <View style={styles.container}>
         <View style={headerStyle.header}> 
            <Image style={headerStyle.headerImage} source={require('../image/color_logo.png')}/>
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

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#EBECF4"
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: "#FFF",
    flexDirection: 'row',
    alignItems: "stretch",
    justifyContent: "space-between",
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
    fontWeight: "500",
  },
  item:{
    color: "#000000",
  },
  text: {
      fontFamily: "HelveticaNeue",
      color: "#52575D"
  },
  image: {
      flex: 1,
      height: undefined,
      width: undefined
  },
  titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 24,
      marginHorizontal: 16
  },
  subText: {
      fontSize: 12,
      color: "#AEB5BC",
      textTransform: "uppercase",
      fontWeight: "500"
  },
  profileImage: {
      width: 100,
      height: 100,
      borderRadius: 100,
      overflow: "hidden"
  },
  dm: {
      backgroundColor: "#41444B",
      position: "absolute",
      top: 20,
      width: 20,
      height: 20,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center"
  },
  active: {
      backgroundColor: "#34FFB9",
      position: "absolute",
      bottom: 28,
      left: 10,
      padding: 4,
      height: 20,
      width: 20,
      borderRadius: 10
  },
  add: {
      backgroundColor: "#41444B",
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 30,
      height: 30,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center"
  },
  infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: 16
  },
  statsContainer: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 32
  },
  statsBox: {
      alignItems: "center",
      flex: 1,
      margin: 8,
      padding: 8,
  },
  mediaImageContainer: {
      width: 180,
      height: 200,
      borderRadius: 12,
      overflow: "hidden",
      marginHorizontal: 10
  },
  mediaCount: {
      backgroundColor: "#41444B",
      position: "absolute",
      top: "50%",
      marginTop: -50,
      marginLeft: 30,
      width: 100,
      height: 100,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      shadowColor: "rgba(0, 0, 0, 0.38)",
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 20,
      shadowOpacity: 1
  },
  recent: {
      marginLeft: 78,
      marginTop: 32,
      marginBottom: 6,
      fontSize: 10
  },
  recentItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 16
  },
  activityIndicator: {
      backgroundColor: "#CABFAB",
      padding: 4,
      height: 12,
      width: 12,
      borderRadius: 6,
      marginTop: 3,
      marginRight: 20
  }
});

export default SettingsScreen;