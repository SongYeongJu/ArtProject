import React, {Component} from 'react';
import { View, TouchableOpacity, Text, Image} from "react-native";
import styles from '../components/itemInfoStyle';
import backA from '../image/back.png';

class ItemInfo extends Component{
    _onPress = () => {
        //alert("item : " );
        this.props.navigation.goBack();
    }  

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('items');
        return (
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => this._onPress()}
              >
              <Image 
                        style={styles.back}
                      source={{uri : backA}}/>
              </TouchableOpacity>
              <Image 
                        style={styles.im}
                      source={{uri : item.uri}}/>
              <View style={styles.container2}>
              <Text style={styles.TitleText}>  -- {item.name} -- </Text>
              <Text style={styles.text2}>  Artist  {item.artist}  </Text>
                  <Text style={styles.text2}>  {item.cost} 원</Text>  
              </View>
              
          </View>
        );
    }
}

export default ItemInfo;
