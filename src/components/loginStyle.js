import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container : {
    flex:1,
    height: '100%',
    flexDirection : 'column',
    backgroundColor:'#333333',
  },
  items : {
    flex:1,
    flexDirection : 'row',
  },
  texts : {
    flex:1,
    fontSize:15,
    textAlignVertical:"center",
    textAlign:"right",
    marginLeft:15,
    marginVertical:5,
  },
  input : {
    flex:4,
    textAlignVertical:"center",
    textAlign:"left",
   // placeholder:"Email",
    backgroundColor : "#777777",
    marginHorizontal:15,
    marginVertical:5,
    paddingHorizontal:15,
    borderRadius: 20,
  },
  submitButtonText: {
    flex:1,
    textAlign:"center",
    color:"gray",
    margin:10,
  },
  registerButtonText: {
    flex:1,
    textAlign:"center",
    color:"gray",
  },
  icon: {
    flex:2,
    width:"100%",
    resizeMode:"contain",
    justifyContent: 'center',
  },
  icon2: {
    width:"50%",
    resizeMode:"contain",
    justifyContent: 'center',
  },
  loginButton : {
    width:"100%",
    backgroundColor:'#EE1122',
  },
  registerButton : {
    width:"100%",
    backgroundColor:'#EE1133',    
  },
  blank1 : {flex:1,},
  blank2 : {flex:2,},
  blank3 : {flex:3,},
  blank4 : {flex:4,},
  blank5 : {flex:5,},
  blank6 : {flex:6,},

});

export default styles;
