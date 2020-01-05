import React from 'react';
import { View, Image, FlatList, TouchableOpacity} from "react-native";
import styles from "../components/flatlistStyle";
import datas from '../datas/data1';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Setting from './Setting';
import Splash from './Splash';

class Main extends React.Component {
  _onPress = (item) => {
//    alert("item : "+ item.key );
    this.props.navigation.push('ItemInfos');
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
                    source={{uri : item.uri}}/>
              </TouchableOpacity>  
              );      
            }
          }
        />
      </View>

      );
    }
  }
  
  const TabNavigator = createBottomTabNavigator({
    Home: Main,
    Tab2: Tab2,
    Tab3: Tab3,
    Settingss: Setting,
    Splashs: Splash,

  }
);
  
export default createAppContainer(TabNavigator); 
