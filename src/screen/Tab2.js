import React from 'react';
import { View, Image, FlatList, TouchableOpacity} from "react-native";
import styles from "../components/flatlistStyle";
import datas from '../datas/data2';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

class Tab2 extends React.Component {
  _onPress = (item) => {
    //    alert("item : "+ item.key );
        this.props.navigation.push('ItemInfos', {items:item});
  }  

      render() {
      try {
        styles.imgSz=Dimensions.get('window').width / 3 - Dimensions.get('window').width * 0.005 * 2;
      }catch(e){
        styles.imgSz=100;
      }
      return (
        <View style={styles.container}>
        <FlatList style={styles.container2}
            numColumns={3}
            columnWrapperStyle={{justifyContent:'space-between', }}
            data={datas}
            renderItem={({ item }) => {
              return (
              <TouchableOpacity
              onPress={() => this._onPress(item)}
              >
                  <Image 
                    style={styles.im} 
                    source={require('../image/image1.jpg')}/>
                    </TouchableOpacity>  
              );      
            }
          }
        />
      </View>

      );
    }
  }

  export default Tab2;
