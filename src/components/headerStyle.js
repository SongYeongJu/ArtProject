import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
      width:'100%',
      height: '13%',
      paddingBottom:'2%',
      backgroundColor: "#FFF",
      alignItems: "flex-end",
      justifyContent: "flex-end",
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
});
  
export default styles;
