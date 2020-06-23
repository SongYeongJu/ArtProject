import React from 'react';
import { View, Image, FlatList, TouchableOpacity, Text} from "react-native";
import styles from "../components/flatlistStyle";
import datas1 from '../datas/data1';
import datas2 from '../datas/data2';
import datas3 from '../datas/data3';
import datas4 from '../datas/data4';
import datas5 from '../datas/data5';
import categorydatas from '../datas/category';
import headerStyle from '../components/headerStyle';

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import Search from './Search';
import Setting from './Setting';
import Feed from './Feed';
import Tab3 from './Tab3';

class Main extends React.Component {
  state = {data: datas1};

  _onPress = (item) => {
    //    alert("item : "+ item.key );
        this.props.navigation.push('ItemInfos', {items:item});
      }
  
  _onPressCate = (item) => {
    // alert("item : " + item.num);
    if(item.num==1) this.setState({data: datas1});
    else if(item.num==2) this.setState({data: datas2});
    else if(item.num==3) this.setState({data: datas3});
    else if(item.num==4) this.setState({data: datas4});
    else if(item.num==5) this.setState({data: datas5});
  }
  
  render() {
    try {
      styles.imgSz=Dimensions.get('window').width / 3 - Dimensions.get('window').width * 0.005 * 2;
    } catch(e) {
      styles.imgSz=100;
    }

    return (
      <View style={styles.container}>
        <View style={headerStyle.header}> 
          <Image style={headerStyle.headerImage} source={require('../image/color_logo.png')}/>
        </View>
        <FlatList
          style={styles.CategoryContainer}
          numColumns={1}
          data={categorydatas}
          horizontal = {true}
          renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => this._onPressCate(item)}
                  style={styles.cateButton}
                >
                  <Image 
                    style={styles.categoryim} 
                    source={{uri:item.uri}}
                  />
                  <Text style={styles.CategoryText}>{item.name}</Text>
                </TouchableOpacity>  
              );    
            }
          }
        />
        <FlatList
          style={styles.container2}
          numColumns={3}
          columnWrapperStyle={{justifyContent:'space-between', }}
          data={this.state.data}
          renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => this._onPress(item)}>
                  <Image 
                    style={styles.im} 
                    source={{uri:item.uri}}
                  />
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
    Search: Search,
    Tab3: {
      screen: Tab3,
      navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
              <Ionicons
                  name="ios-add-circle"
                  size={48}
                  color="#E9446A"
                  style={{
                      shadowColor: "#E9446A",
                      shadowOffset: { width: 0, height: 10 },
                      shadowRadius: 10,
                      shadowOpacity: 0.3
                  }}
              />
          )
        }
      },
    Feed: Feed,
    profile : Setting,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor, image }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "ios-home";
        } else if (routeName === "Search") {
          iconName = "ios-person";
        } else if (routeName === "Feed") {
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
        inactiveTintColor: "gray",
        showLabel : false
      }
    })
  }
);
  
export default createAppContainer(TabNavigator); 
