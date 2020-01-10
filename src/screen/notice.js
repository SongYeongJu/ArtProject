import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

// temporary data until we pull from db
const notices = [
    {
        id: "1",
        text:
            "qminseok zzang",
        timestamp: "2020.1.1",
    },
    {
        id: "2",
        text:
            "minseok zzang",
        timestamp: "2020.1.2",
    },
    {
        id: "3",
        text:
            "seok zzang",
        timestamp: "2020.1.3",
    },
    {
        id: "4",
        text:
            "great",
        timestamp: "2020.1.4",
    }
];

export default class HomeScreen extends React.Component {
    renderPost = post => {
        return (
          //  <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text> Line 56
            <View style={styles.feedItem}>
                
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>ARTALK</Text>
                            <Text style={styles.timestamp}>{post.timestamp}</Text>
                        </View>
                    </View>
                    <Text style={styles.post}>{post.text}</Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Notice</Text>
                </View>

                <FlatList
                    style={styles.feed}
                    data={notices}
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
        backgroundColor: "#EBECF4"
    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
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
