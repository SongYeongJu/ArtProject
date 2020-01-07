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
    },
    items : {
      height: '100%',
      width: '100%',
      flex: 0.33,
    },
    container: {
      height: '100%',
      width: '100%',
      alignItems:'flex-start',
      paddingTop: 22,
    },
    container2: {
      height: '100%',
      width: '100%',
      marginLeft: '1%',
      marginRight: '1%',
     },
     ttext : {
        width: '100%',
        textAlign:'center',
        color:'#FFFFFF',
     }
  });
  
export default styles;
