import React, { Component, useEffect} from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import TextInput from 'react-native-textinput-with-icons'
import ImagePicker from 'react-native-image-picker';
import axios from "axios";
const options = {
  title: 'Fotoğraf Seç',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class Home extends Component {
  static navigationOptions= {header:null}
  state = {
    avatarSource: null
  }
    selectImage = () => {
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = { uri: response.uri };

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };

      this.setState({
        avatarSource: source,
      });
      this.uploadPhoto();
    }
  });
}
  uploadPhoto = async response => {
  const data = new FormData();
  data.append('fileData' , {
    uri: response.uri,
    type: response.type,
    name: response.fileName,
  });
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'multipart/form-data'
      }
    };
    try{
      const request = await axios.post('http://192.168.1.6/localhost:3001/upload', data, config);
      const source = {uri: response.uri};
      this.setState({
        avatarSource: source,
        loading: false,
        error: false
      });
    }catch (e) {
      this.setState({
        loading: false,
        error: true
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Gezilerim</Text>
          </View>
          <KeyboardAvoidingView>
            <Image source={this.state.avatarSource} style={{ width: 200, height:200}} />
                <TouchableOpacity
               onPress={this.selectImage}>
                <Text>Select Image</Text>
                </TouchableOpacity>

          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  header: {
    backgroundColor: '#6093a0',
    height: 100,
    width: '100%'
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:24,
    textAlign:'center',
    marginTop: 50
  },


});
