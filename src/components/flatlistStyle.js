import { StyleSheet, Dimensions } from "react-native";

let imgSz=100;
try {
  imgSz=Dimensions.get('window').width / 3 - Dimensions.get('window').width * 0.02 / 3;
}catch(e){
  imgSz=100;
}
const styles = StyleSheet.create({
    im: {
      width: imgSz,
      height: imgSz,
      backgroundColor:'#000000',
      resizeMode:'cover',
    },
    items : {
      height: '100%',
      width: '100%',
      flex: 0.33,
    },
    container: {
      height: '100%',
      width: '100%',
      alignItems:'center',
      paddingTop: 22,
      backgroundColor:'#000000',
    },
    container2: {
      height: '100%',
      width: '100%',
      marginLeft: '1%',
      marginRight: '1%',
      paddingHorizontal:'1%',
     },
  });
  
export default styles;
