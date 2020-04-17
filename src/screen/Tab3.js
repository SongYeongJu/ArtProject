import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, Text, TextInput} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import styles from "../components/registrationStyle";
import headerStyle from '../components/headerStyle';

class Tab3 extends React.Component {
  constructor(props) {
    super(props);
    this.state={title: '', artist: '', cost: '', description: '', image: 'null'};
  }

  _onPress = () => {
    alert('작품을 등록했습니다.');
    this.props.navigation.push('Mains');
  };

  
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={headerStyle.header}>
          <Image style={headerStyle.headerImage} source={require('../image/color_logo.png')}/>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 40}}>
            <Image style={styles.imageUpload} source={{uri: this.state.image}}/>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => this._pickImage()}>
              <Text style={styles.uploadButtonText}>Image Upload</Text>
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
  }
}

export default Tab3;
