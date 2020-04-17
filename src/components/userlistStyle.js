import { StyleSheet, Dimensions } from "react-native";

let imgSz=100;
try {
  imgSz=Dimensions.get('window').width * 0.9;
}catch(e){
  imgSz=100;
}
const styles = StyleSheet.create({
    im: {
      width: imgSz,
      height: imgSz,
      resizeMode:'contain',
      margin: '3.5%',
    },
    titleText : {
        width: '100%',
        textAlign:'center',
//        backgroundColor:'#EEEEEE',
    },
    items : {
        marginHorizontal : 5,
        marginVertical : 2.5,
        backgroundColor:'#FFFFFF',
    },
    container: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems:'center',
      paddingTop: 22,
      backgroundColor:'#FFEEEE',
    },
    container2: {
        height: '100%',
        width: '100%',
        marginLeft: '1%',
        marginRight: '1%',
       },
    ttext : {
        width: '100%',
        fontSize:20,
        textAlign:'center',
        color:'#333333',
     },
     button: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#a9a9a9',
      padding: 10,
      width: 200,
      marginTop: 12,
    },
  });
  
export default styles;
