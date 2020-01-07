import React from 'react';
import { View, Image, FlatList, TouchableOpacity, Text} from "react-native";
import styles from "../components/flatlistStyle";
import datas from '../datas/data1';

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Setting from './Setting';
import Splash from './Splash';

class Main extends React.Component {
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
                  source={{uri:item.uri}}/>
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
    profile : Setting,
    Splashs: Splash,

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor, image }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "ios-home";
        } else if (routeName === "Tab2") {
          iconName = "ios-person";
        } else if(routeName === "Tab3") {
            iconName = "ios-person";
        } else if (routeName === "Splashs") {
          iconName = "ios-chatboxes";
        } else if (routeName === "profile") {
          iconName = "ios-person";
        }

        return (
          (
            <Ionicons
              name={iconName}
              size={horizontal ? 20 : 25}
              color={tintColor}
            />
          )
        );
      },
      tabBarOptions: {
        activeTintColor: "#74b9ff",
        inactiveTintColor: "gray"
      }
    })
  }
);
  
export default createAppContainer(TabNavigator); 
