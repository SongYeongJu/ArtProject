import React from 'react';
import { View, Image, FlatList, TouchableOpacity} from "react-native";
import styles from "../components/flatlistStyle";
import datas from '../datas/data';

function Item({item}) {
  try{
    return (
      <TouchableOpacity
      onPress={() => this.props.navigation.navigate('ItemInfos')}
      >
        <Image 
          style={styles.im} 
          source={require(item.uri)}/>
      </TouchableOpacity>
    );
  }catch(e) {
    return (
      <TouchableOpacity
      onPress={() => this.props.navigation.navigate('ItemInfos')}
      >
          <Image 
            style={styles.im} 
            source={{uri : item.uri}}/>
      </TouchableOpacity>
    );
  }

}
class Tab3 extends React.Component {
  _onPress = (item) => {
//    alert("item : "+ item.key );
    this.props.navigation.navigate('Mains');
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
  
// test 
export default Tab3;
