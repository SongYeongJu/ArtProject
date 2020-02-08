import React from "react";
import { View, Text, StyleSheet, Image, FlatList, ImageBackground, TextInput } from "react-native";

// temporary data until we pull from db
const posts = [
  {
    id: "1",
    name: "post1",
    text: "초보자를 위한\n작품감상 Tip",
    image: require("../image/post1.jpg"),
    textColor: '#FFF',
  },
{
  id: "2",
  name: "post2",
  text: "가지고만 있어도 이득\n소장가치 높은\n아트토이 추천",
  image: require("../image/post2.jpg"),
  textColor: '#000',
},
];

export default class Tab2 extends React.Component {
    renderPost = post => {
        return (
          //  <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text> Line 56
            <ImageBackground style={styles.feedItem} source={post.image} imageStyle={{ borderRadius: 25 }}>
              <Text style={[{color:post.textColor}, styles.text]} > {post.text} </Text>
            </ImageBackground>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                  <View style={styles.searchBar}> 
                  <Image style={styles.searchIcon} source={require('../image/search.png')}/> 
                    <TextInput style={styles.headerTitle}>검색하기</TextInput>
                  </View>
                </View>

                <FlatList
                    style={styles.feed}
                    data={posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBECF4",
      },
    header: {
      width:'100%',
      height: '13%',
      paddingTop:'5%',
      backgroundColor: "#EBECF4",
      zIndex: 10
    },
    headerTitle: {
      width:'90%',
      height:'auto',
      textAlign:'left',
      fontSize: 20,
      color:'#777',
      fontWeight:'bold',
      paddingHorizontal : 20,
    },
    text :{
      height:'auto',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign:'left',
    },
    searchBar :{
      width:'98%',
      height:'98%',
      margin:'1%',
      paddingHorizontal:'3%',
      borderRadius:15,
      backgroundColor:'#FFF',
      flexDirection:'row',
      alignItems:'center',
      alignContent:'center',
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
//        width:'100%',
        height: 300,
        backgroundColor: "#FFF",
        padding: 8,
        flexDirection: "column",
        marginVertical: 8,
        borderRadius:30,
        justifyContent:'flex-end'
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
  },
  searchIcon: {
    width: 30,
    height: 30,
    resizeMode:'contain',
  }
});
