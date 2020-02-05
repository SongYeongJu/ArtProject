import { StyleSheet, Dimensions } from "react-native";

var imgSz;
try {
  imgSz=Dimensions.get('window').width;
}catch(e){
  imgSz=100;
}

const styles = StyleSheet.create({
    im: {
      width: imgSz*0.75,
      height: imgSz*0.75,
      backgroundColor:'#FFFFFF',
      resizeMode:'contain',
      marginTop : imgSz * 0.05,
      marginVertical: imgSz * 0.05,
      marginHorizontal: imgSz * 0.125,
    },
    im2: {
      width: imgSz * 0.9 / 2 * 0.95,
      height: imgSz * 0.9 / 2 * 0.95,
      resizeMode:'contain',
      marginVertical: '5%',
      backgroundColor:'#FFF',
    },
    back : {
      width: 50,
      height: 50,
      backgroundColor:'#FFFFFF',
      resizeMode:'contain',
    },
    TitleText : {
      fontSize: 30,
      width:imgSz,
      fontWeight: 'bold',
      textAlign:'left',
      paddingHorizontal:20,
    },
    text : {
      fontSize:20,
      width:'100%',
      height:'100%',
      color:'#FFF',
      fontWeight: 'bold',
      textAlignVertical:'center',
      textAlign:'center'
    },
    text2 : {
      fontSize: 20,
      width:imgSz,
      fontWeight: 'bold',
      textAlign:'left',
      paddingHorizontal:20,
    },
    DescriptionText : {
      textAlign:'left',
      marginTop: 20,
      color:'#AAAAAA',
      fontWeight: 'bold',
    },
    container: {
      width: imgSz,
      justifyContent:'space-between',
      alignItems:'center',
    },
    scrollView: {
      width: imgSz,
      height:'100%',
      marginHorizontal: 20,
    },
    container2: {
      width: imgSz,
      justifyContent:'space-between',
      alignItems:'center',
      paddingTop: 15,
      paddingHorizontal: 20,
      paddingBottom:20,
      flexDirection:'column',
      marginBottom : 10,
     },
     container3: {
      width: imgSz,
      backgroundColor:'#FFFFFF',
      justifyContent:'center',
      alignItems:'center',
      marginBottom : 30,
     },
     recContainer:{
      width: imgSz,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#EEEEEE',
     },
     buttonCart: {
      width: imgSz * 0.8,
      height: 50,
      alignItems: 'center',
      backgroundColor: '#000',
      marginTop: 7,
      margin: 10,
      paddingVertical : 12,
      borderRadius: 15,
      alignItems:'center',
      justifyContent:'center',
    },
    buttonBuy: {
      width: imgSz*0.8,
      height: 50,
      alignItems: 'center',
      backgroundColor: '#000',
      marginTop: 5,
      margin: 10,
      borderRadius: 15,
      paddingVertical : 12,
      alignItems:'center',
      justifyContent:'center',
    },
    flatlist : {
      width: imgSz*0.9,
      paddingHorizontal : 5,
    },
    recomText : {
      padding : 15,
      textAlign:'center',
      backgroundColor:'#EEEEEE',
      width: imgSz*0.9,
      fontSize: 20,
      marginBottom : 30,
      marginTop : 30,
      fontWeight: 'bold',
    },
  });
  
export default styles;
