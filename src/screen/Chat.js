import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import chatData from '../datas/chat';

import headerStyle from '../components/headerStyle';
import styles from '../components/chatStyle';

var prevUser='';
var owner='user2';
// temporary data until we pull from db
export default class FeedScreen extends React.Component {
    renderPost = chat => {
        if(prevUser=='') {
            prevUser=chat.user;
            if(chat.user!=owner) {
                return (
                    <View style={[styles.chatContainerLeft, {marginTop:4}]}>
                        <Image style={styles.profileImage} source={require('../image/billie.jpg')}/>
                        <Image style={styles.dashImage} source={require('../image/chat_ForU.png')}/>
                        <Text style={styles.chatTextLeft}>{chat.text} ddd</Text>
                    </View>
                );
            }
            return (
                <View style={[styles.chatContainerRight, {marginTop:4}]}>
                    <Text style={styles.chatTextRight}>{chat.text}</Text>
                    <Image style={styles.dashImage} source={require('../image/chat_ForMe.png')}/>
                    <Image style={styles.profileImage} source={require('../image/jackson.jpg')}/>
                </View>
            );
        } else {
            if(chat.user==prevUser) {
                prevUser=chat.user;
                if(chat.user!=owner) {
                    return (
                        <View style={styles.chatContainerLeft}>
                            <Image style={[styles.profileImage, {borderWidth : 0}]} />
                            <Image style={styles.dashImage} source={require('../image/chat_ForUs.png')}/>
                            <Text style={styles.chatTextLeft}>{chat.text}</Text>
                        </View>
                    );
                }
                return (
                    <View style={styles.chatContainerRight}>
                        <Text style={styles.chatTextRight}>{chat.text}</Text>
                        <Image style={styles.dashImage} source={require('../image/chat_ForUs.png')}/>
                        <Image style={[styles.profileImage, {borderWidth : 0}]} />
                    </View>
                );    
            } else {
                prevUser=chat.user;
                if(chat.user!=owner) {
                    return (
                        <View style={[styles.chatContainerLeft, {marginTop:4}]}>
                        <Image style={styles.profileImage} source={require('../image/billie.jpg')}/>
                            <Image style={styles.dashImage} source={require('../image/chat_ForU.png')}/>
                            <Text style={styles.chatTextLeft}>{chat.text}</Text>
                        </View>
                    );
                }
                return (
                    <View style={[styles.chatContainerRight, {marginTop:4}]}>
                    <Text style={styles.chatTextRight}>{chat.text}</Text>
                        <Image style={styles.dashImage} source={require('../image/chat_ForMe.png')}/>
                        <Image style={styles.profileImage} source={require('../image/jackson.jpg')}/>
                    </View>
                );    
            }
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={headerStyle.header}> 
                    <Image style={headerStyle.headerImage} source={require('../image/color_logo.png')}/>
                </View>
                <FlatList
                    style={styles.flatlist}
                    data={chatData}
                    renderItem={({ item }) => this.renderPost(item)}
//                    keyExtractor={item => item.id}
//                    showsVerticalScrollIndicator={false}
                ></FlatList>
                <KeyboardAvoidingView  style={styles.textContainer}  behavior="position" enabled>
                    <View style={styles.textView}> 
                    <TextInput style={styles.textInput}> </TextInput>
                    <TouchableOpacity style={styles.sendButton}>
                        <Image style={styles.sendButtonImage} source={require('../image/send_white.png')}/> 
                    </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView >
            </View>
        );
    }
}