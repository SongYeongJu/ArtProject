import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    container2: {
        backgroundColor: "#000",
        flexDirection:'row',
    },
    cateButton :{
        width:'50%',
        height:'auto',
        alignItems:'center',
        borderLeftColor:'#FFF', 
        borderRightColor:'#FFF', 
        borderLeftWidth:0.5,
        borderRightWidth:0.5,
        marginVertical:10,
    },
    cateText :{
        width:'auto',
        fontSize:20,
        fontWeight:'bold',
        padding:10,
        color:'#FFF',
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }
});

export default styles;