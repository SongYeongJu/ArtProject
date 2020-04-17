import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity} from "react-native";
import styles from "../components/userlistStyle";
import datas from '../datas/data2';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

class UserListView extends React.Component {
      render() {
      return (
        <View style={styles.container}>
            <Text style={styles.titleText}> Like List </Text>
        <FlatList style={styles.container2}
            data={datas}
            renderItem={({ item }) => {
              return (
              <TouchableOpacity
                style={styles.items}
              >
                  <Image 
                    style={styles.im} 
                    source={{uri:item.uri}}/>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.push('buys')}>
                  <Text style={styles.text}>Buy</Text>
              </TouchableOpacity>
                <Text style={styles.ttext}>{item.name}</Text>
                <Text style={styles.ttext}>{item.artist}</Text>
              </TouchableOpacity>  
              );      
            }
          }
        />
      </View>

      );
    }
  }

  export default UserListView;
