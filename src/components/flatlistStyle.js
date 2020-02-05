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
      marginBottom: '3.5%',
    },
    ttext :{
      color:'#123123',
      backgroundColor: '#FFFFFF',
    },
    items : {
      height: '100%',
      width: '100%',
      flex: 0.33,
    },
    container: {
      height: '100%',
      width: '100%',
      //alignItems:'flex-start',
      backgroundColor:'#EBECF4',
    },
    header: {
      width:'100%',
      height: '13%',
      paddingBottom:'2%',
      backgroundColor: "#FFF",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      // borderBottomWidth: 1,
      // borderBottomColor: "#EBECF4",
      // shadowColor: "#454D65",
      // shadowOffset: { height: 5 },
      // shadowRadius: 15,
      // shadowOpacity: 0.2,
      zIndex: 10
  },
  headerImage : {
    width: '100%',
    height:'33%',
    resizeMode:'contain',
  },
headerTitle: {
      fontSize: 20,
      fontWeight: "500"
  },
    container2: {
      height: '100%',
      width: '100%',
      marginLeft: '1%',
      marginRight: '1%',
     },
  });
  
export default styles;
