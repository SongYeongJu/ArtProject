import React from 'react';
import { View, Image, FlatList, TouchableOpacity, Text} from "react-native";
import styles from "../components/flatlistStyle";
import datas from '../datas/data3';
import headerStyle from '../components/headerStyle';

class Tab3 extends React.Component {
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
          <View style={headerStyle.header}> 
            <Image style={headerStyle.headerImage} source={require('../image/color_logo.png')}/>
          </View>
          <Text style={styles.textForU}> 당신을 위한 추천 작품들 </Text>
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

  export default Tab3;
