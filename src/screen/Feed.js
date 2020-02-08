import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import headerStyle from '../components/headerStyle';
import postDatas from '../datas/feedData';

import styles from '../components/feedStyle';

// temporary data until we pull from db
export default class FeedScreen extends React.Component {
    renderPost = post => {
        return (
          //  <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text> Line 56
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                          
                        </View>

                        <Ionicons name="ios-more" size={24} color="#73788B" />
                    </View>
                    <Text style={styles.post}>{post.text}</Text>
                    <Image source={post.image} style={styles.postImage} resizeMode="cover" />
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="ios-heart-empty" size={24} color="#73788B" style={{ marginRight: 16 }} />
                        <Ionicons name="ios-chatboxes" size={24} color="#73788B" />
                    </View>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={headerStyle.header}> 
                    <Image style={headerStyle.headerImage} source={require('../image/color_logo.png')}/>
                </View>
                <View style={styles.container2}> 
                <TouchableOpacity style={styles.cateButton}>
                        <Text style={styles.cateText}>Posts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cateButton}>
                        <Text style={styles.cateText}>Chat</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={styles.feed}
                    data={postDatas}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
            </View>
        );
    }
}