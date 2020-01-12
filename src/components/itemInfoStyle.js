import { StyleSheet, Dimensions } from "react-native";

var imgSz;
try {
  imgSz=Dimensions.get('window').width;
}catch(e){
  imgSz=100;
}

const styles = StyleSheet.create({
    im: {
      width: imgSz*0.9,
      height: imgSz*0.9,
      backgroundColor:'#FFFFFF',
      resizeMode:'contain',
      marginVertical: '5%',
    },
    im2: {
      width: imgSz * 0.9 / 2 * 0.95,
      height: imgSz * 0.9 / 2 * 0.95,
      resizeMode:'contain',
      marginVertical: '5%',
    },
    back : {
      width: 50,
      height: 50,
      backgroundColor:'#FFFFFF',
      resizeMode:'contain',
    },
    TitleText : {
      fontSize: 30,
      fontWeight: 'bold',
    },
    text2 : {
      fontSize: 20,
      fontWeight: 'bold',
    },
    container: {
      width: imgSz,
      justifyContent:'center',
    },
    scrollView: {
      width: imgSz,
      height:'100%',
      marginHorizontal: 20,
    },
    container2: {
      width: imgSz*0.9,
      alignItems:'center',
      backgroundColor:'#FFFFFF',
      flexDirection:'column',
      justifyContent:'flex-start',
      marginBottom : 50,
     },
     container3: {
      width: imgSz*0.9,
      flexDirection:'row',
      backgroundColor:'#FFFFFF',
      justifyContent:'center',
     },
     recContainer:{
      width: imgSz*0.9,
      justifyContent:'space-between',
     },
     buttonBuy: {
      width: imgSz*0.9 * 0.2,
      alignItems: 'center',
      backgroundColor: '#a9a9a9',
      padding: 10,
      width: 100,
      marginTop: 12,
      margin: 10,
    },
    buttonCart: {
      width: imgSz*0.9 * 0.2,
      alignItems: 'center',
      backgroundColor: '#EEEEEE',
      padding: 10,
      width: 100,
      marginTop: 12,
      margin: 10,
    },
    flatlist : {
      width: imgSz*0.9,
      paddingHorizontal : 5,
    },
    recomText : {
      padding : 15,
      textAlign:'center',
      width: imgSz*0.9,
      fontSize: 20,
    },
  });
  
export default styles;
