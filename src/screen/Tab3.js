import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, Text, TextInput} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../components/registrationStyle";
import headerStyle from '../components/headerStyle';

class Tab3 extends React.Component {
  constructor(props) {
    super(props);
    this.state={title: '', artist: '', cost: '', description: ''};
  }

  _onPress = () => {
    alert('작품을 등록했습니다.');
    this.props.navigation.push('Mains');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={headerStyle.header}>
          <Image style={headerStyle.headerImage} source={require('../image/color_logo.png')}/>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container7}>
            <TouchableOpacity
              style={styles.imageUpload}
              onPress={() => this._onPress()}>
              <MaterialCommunityIcons
                name={'image-plus'}
                size={100}
                color="#E9446A"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <Text style={styles.text}>작품명</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'ex. 모나리자'}
              maxLength={50}
              onChangeText={(input) => this.setState({title: input})}
            />
          </View>
          <View style={styles.container3}>
            <Text style={styles.text}>작가명</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'ex. 레오나르도 다 빈치'}
              maxLength={25}
              onChangeText={(input) => this.setState({artist: input})}
            />
          </View>
          <View style={styles.container4}>
            <Text style={styles.text}>가 격</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'원화 단위로 입력해주세요'}
              keyboardType={'number-pad'}
              maxLength={10}
              onChangeText={(input) => this.setState({cost: input})}
            />
          </View>
          <View style={styles.container5}>
            <Text style={styles.text2}>작품설명</Text>
            <TextInput
              style={styles.textInput2}
              multiline={true}
              placeholder={'작품에 대해서 설명해주세요'}
              maxLength={200}
              onChangeText={(input) => this.setState({description: input})}
            />
          </View>
          <View style={styles.container6}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this._onPress()}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
    /*
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
        <Text style={styles.textForU}> 당신을 위한 추천 작품들</Text>
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
    */
  }
}

export default Tab3;
