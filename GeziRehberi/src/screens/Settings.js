import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert, Image
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import {Linking} from 'react-native';

export default class Settings extends Component{
  static navigationOptions= {header:null}
  render() {

    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>AYARLAR</Text>
            <View style={{flexDirection: 'row', marginTop:10}}>
            </View>
          </View>
          <View style={styles.slideOne}>
            <KeyboardAvoidingView>
              <View style={styles.login}>
                  <Image source={require('../assets/woman.png')} style={{width:80, height:80, borderRadius:50, marginLeft: 100}} />
                  <View style={styles.space}>
                    <View style={styles.left}>
                      <Icon name="user" size={25} color={'#fff'} />
                    </View>
                    <View style={styles.right}>
                      <View style={styles.space}>
                        <Text style={{fontWeight:'bold', marginTop:25, color: '#fff'}}>Kullanıcı Adı:</Text>
                        <Text style={{marginTop:25, color: '#5b0202'}}>damla@gmail.com</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.space}>
                    <View style={styles.left}>
                      <Icon name="lock" size={25} color={'#fff'}/>
                    </View>
                    <View style={styles.right}>
                      <View style={styles.space}>
                        <Text style={{fontWeight:'bold', marginTop:25, color: '#fff'}}>Şifre</Text>
                      <Text style={{marginTop:25, color: '#5b0202'}}>******</Text>
                      </View>
                    </View>
                  </View>

                <View style={styles.space}>
                  <View style={styles.left}>
                    <Icon name="facebook-square" size={25} color={'#fff'}/>
                  </View>
                  <View style={styles.right}>
                    <View style={styles.space}>
                      <Text style={{fontWeight:'bold', marginTop:25, color: '#fff'}}> Facebook</Text>
                      <TouchableOpacity onPress={() => Linking.openURL('http://Facebook.com')} style={{marginTop:20}}>
                        <Icon name="checkcircleo" size={25} color={'#5b0202'}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={styles.space}>
                  <View style={styles.left}>
                    <Icon name="twitter" size={25} color={'#fff'}/>
                  </View>
                  <View style={styles.right}>
                    <View style={styles.space}>
                      <Text style={{fontWeight:'bold', marginTop:25, color: '#fff'}}> Twitter</Text>
                      <TouchableOpacity onPress={() => Linking.openURL('http://twitter.com')} style={{marginTop:20}}>
                        <Icon name="checkcircleo" size={25} color={'#5b0202'}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>


                <View style={styles.space}>
                  <View style={styles.left}>
                    <Icon name="instagram" size={25} color={'#fff'}/>
                  </View>
                  <View style={styles.right}>
                    <View style={styles.space}>
                      <Text style={{fontWeight:'bold', marginTop:25, color: '#fff'}}> Instagram</Text>
                      <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/')} style={{marginTop:20}}>
                        <Icon name="checkcircleo" size={25} color={'#5b0202'}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={styles.space}>
                  <View style={styles.left}>
                    <Icon name="linkedin-square" size={25} color={'#fff'}/>
                  </View>
                  <View style={styles.right}>
                    <View style={styles.space}>
                      <Text style={{fontWeight:'bold', marginTop:25, color: '#fff'}}> Linkedln</Text>
                      <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/')} style={{marginTop:20}}>
                        <Icon name="checkcircleo" size={25} color={'#5b0202'}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={{alignItems: 'center', marginTop:20}}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Login')}
                    style={styles.buttonTwo}>
                    <Text style={{color: '#fff'}}>Çıkış Yap</Text>
                  </TouchableOpacity>
                </View>
              </View>



            </KeyboardAvoidingView>
          </View>

          <View style={styles.slideTwo}></View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#6093a0',
  },
  header: {
    position: 'absolute',
    top:0,
    left:0,
    width: '100%',
    height: 400,
    backgroundColor: '#6093a0',

  },
  slideOne: {
    flex:2,
  },
  slideTwo: {
    flex:1
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop:80,
    textAlign: 'center',
    color:'#fff'
  },
  login: {
    marginHorizontal: 40,
    marginVertical: 40,
    height:500,
    backgroundColor: 'rgba(52, 52, 52, 0.10)',
    padding: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: .9,
    marginTop: 200
  },
  description:{
    color: '#999',
    textAlign: 'center',
    marginTop: 20
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4e4e4e'

  },
  space: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  right: {
    width: '90%',
  },
  left: {
    width: '10%',
    marginTop:25,

  },
  buttonTwo:{
    width: '85%',
    padding: 10,
    marginBottom:10,
    backgroundColor: '#5b0202',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    paddingHorizontal: 20,

  },

});

