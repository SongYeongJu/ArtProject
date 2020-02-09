import { StyleSheet } from "react-native";


let sz=50;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    flatlist: {
        marginHorizontal: 3
    },
    chatContainerLeft : {
        width:'100%',
//        height: sz,
        flexDirection:'row',
        marginVertical:0,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    chatContainerRight : {
        width:'100%',
//        height: sz,
        flexDirection:'row',
        marginVertical:0,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    profileImage : {
        width : sz,
        height : sz,
        borderRadius: sz,
        margin:5,
        borderColor:'#FFF',
        borderWidth : 1,
    },
    dashImage : {
        width : sz/2,
        height : sz/4,
        margin:0,
    },
    chatTextLeft : {
        backgroundColor:'#FCC',
        borderRadius : sz ,
        margin:5,
        marginLeft:0,
        marginVertical:0,
        color:'#000',
        textAlign:'left',
        paddingHorizontal:15,
        padding:10,
    },
    chatTextRight : {
        backgroundColor:'#FFF',
        borderRadius : sz ,
        margin:5,
        marginRight:0,
        marginVertical:0,
        color:'#000',
        textAlign:'right',
        paddingHorizontal:15,
        padding:10,
    },
    textContainer : {
        width:'100%',
        height: 60,
//        zIndex: 10,
      },
      textView : {
        width:'100%',
        height: '100%',
        backgroundColor: "#F06",
//        zIndex: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
      },
      textInput : {
        width:'80%',
        height: '70%',
        backgroundColor:'#FFF',
        borderRadius : 15,
      },
      sendButton : {
        width: 35,
        height: 35,
        margin:8,
        alignItems:'center',
        alignContent:'center',
      },
      sendButtonImage : {
        width: 35,
        height: 35,
        resizeMode:'contain',
      },
});

export default styles;