import React, {Component} from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
export default class Login extends Component {
  static navigationOptions= {header:null}
  render() {
    const {navigate, goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <ImageBackground
          style={{flex: 1, width: '100%'}}
          source={require('../assets/sea.jpg')}>
          <View style={styles.details}>
            <Text style={{color: '#fff', fontSize: 35, fontWeight: 'bold', marginTop:80, paddingHorizontal:10}}>
             OTELİM
            </Text>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold', paddingHorizontal:15}}>
              Tatile gitmek istiyorsun fakat aradığın oteli bulamıyor musun ? İşte bu uygulama tam sana göre aradığın tüm otelleri kolayca bulmanı sağlar.
            </Text>

           <View style={styles.login}>
             <TextInput
               style={styles.input}
               placeholder={"Kullanıcı adınız"}
             />

             <TextInput
               style={styles.inputTwo}
               placeholder={"Şifre"}
               secureTextEntry={true}
             />

             <TouchableOpacity style={styles.btn}
             onPress={() => this.props.navigation.navigate('Main')}>
               <Text style={{color: '#6093a0', textAlign: 'center', marginTop: 8, fontWeight: 'bold'}}>GİRİŞ</Text>
             </TouchableOpacity>

             <View>
               <Text style={{color: '#fff', textAlign: 'center', marginTop:10, fontWeight: 'bold'}}>Hesabınız yok mu ?</Text>
               <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Account')}>
                 <Text style={styles.hesapButton}>Hesap Oluştur</Text>
               </TouchableOpacity>
             </View>
           </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  login: {
    marginTop: 20,
  },
  input: {
    width: '75%',
    height: 40,
    margin: 8,
    borderWidth: 1,
    borderColor: '#6093a0',
  backgroundColor: '#6093a0',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    marginLeft:50,
    marginTop: 80
  },
  inputTwo: {
      width: '75%',
      height: 40,
      margin: 8,
      borderWidth: 1,
      borderColor: '#6093a0',
      backgroundColor: '#6093a0',
      padding: 10,
      borderRadius: 20,
      justifyContent: 'center',
      marginLeft:50,
      marginTop: 10
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#fff',
    marginLeft:50,
    width: '75%',
    height: 40,
    borderRadius:20
  },
  hesapButton: {
    color: '#f1f1f1',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },

});
