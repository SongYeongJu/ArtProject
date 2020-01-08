import React, {Component} from 'react';
import { View, TouchableOpacity, Text, Image} from "react-native";
import styles from '../components/itemInfoStyle';

class ItemInfo extends Component{
    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('items');
        return (
            <View style={styles.container}>
              <Image 
                      style={styles.im}
                      source={{uri : item.uri}}/>
              <View style={styles.container2}>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.push('buys')}>
                  <Text style={styles.text}>Buy</Text>
              </TouchableOpacity>
              <Text style={styles.TitleText}>  -- {item.name} -- </Text>
              <Text style={styles.text2}>  Artist  {item.artist}  </Text>
                  <Text style={styles.text2}>  {item.cost} 원</Text>  
              </View>
              
          </View>
        );
    }
}

export default ItemInfo;
