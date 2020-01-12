import React, {Component} from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView, SafeAreaView, FlatList} from "react-native";
import styles from '../components/itemInfoStyle';
import datas from '../datas/data1';

class ItemInfo extends Component{
    _onPress = (item) => {
        //    alert("item : "+ item.key );
            this.props.navigation.push('ItemInfos', {items:item});
          }  

    render() {
        try {
            styles.imgSz=Dimensions.get('window').width * 0.9;
        }catch(e){
          styles.imgSz=100;
        }
          const { navigation } = this.props;
        const item = navigation.getParam('items');
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Image 
                        style={styles.im}
                        source={{uri : item.uri}}/>
                    <View style={styles.container3}>
                        <TouchableOpacity
                            style={styles.buttonBuy}
                            onPress={() => this.props.navigation.push('buys')}>
                            <Text style={styles.text}>Buy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonCart}
                            onPress={() => alert('장바구니에 상품이 담겼습니다.')}>
                            <Text style={styles.text}>Cart</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.TitleText}>  -- {item.name} -- </Text>
                        <Text style={styles.text2}>  Artist  {item.artist}  </Text>
                        <Text style={styles.text2}>  {item.cost} 원</Text>  
                    </View>
                    <View style={styles.recContainer}>
                        <Text style={styles.recomText}> 당신을 위한 추천작품 </Text>
                        <FlatList style={styles.flatlist}
                            numColumns={2}
                            columnWrapperStyle={{justifyContent:'space-between', }}
                            data={datas}
                            renderItem={({ item }) => {
                            return (
                            <TouchableOpacity
                                onPress={() => this._onPress(item)}
                            >
                                <Image 
                                style={styles.im2} 
                                source={{uri:item.uri}}/>
                            </TouchableOpacity>  
                            );      
                            }
                        }
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default ItemInfo;
