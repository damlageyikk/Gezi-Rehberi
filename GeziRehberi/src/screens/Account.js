import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert, Image, ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Login from "./Login";
import auth from "@react-native-firebase/auth";
import {firebase} from "@react-native-firebase/auth";
export default class Account extends Component{
  static navigationOptions= {header:null}
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Kullanıcı oluşturuldu')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.userName, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            userName: this.state.userName
          })
          console.log('Kayıt başarılı')
          this.setState({
            userName: '',
            password: ''
          })
          this.props.navigation.navigate('Login')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {

    return(
      <View style={styles.container}>
          <ImageBackground
            style={{flex: 1, width: '100%'}}
                           source={require('../assets/sea.jpg')}>
            <View style={styles.space}>
              <View style={styles.left}>
                <Image source={require('../assets/Group.png')} style={{width: 100, height: 100, marginTop:50}} />
              </View>
              <View style={styles.right}>
                <Text style={styles.headerTitle}>Hadi sende üye ol ve fırsatları kaçırma ! </Text>
              </View>

            </View>
          <View style={styles.slideOne}>
            <KeyboardAvoidingView>
              <View style={styles.login}>
                <View>
                  <Text style={styles.title}>Kayıt Ol</Text>

                  <View style={styles.space}>
                    <View style={styles.left}>
                      <Icon name="user" size={25} color={'#6093a0'} />
                    </View>
                    <View style={styles.right}>
                      <TextInput
                        returnKeyType={"next"}
                        autoCapitalize="none"
                        placeholder="Kullanıcı adı"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.textInput}
                        value={this.state.userName}
                        onChangeText={(val) => this.updateInputVal(val, 'userName')}
                      />
                    </View>
                  </View>

                  <View style={styles.space}>
                    <View style={styles.left}>
                      <Icon name="lock" size={25} color={'#6093a0'}/>
                    </View>
                    <View style={styles.right}>
                      <TextInput
                        returnKeyType={"go"}
                        secureTextEntry={true}
                        placeholder="Şifre"
                        inputRef={input => this.passwordInput = input}
                        style={styles.textInput}
                        value={this.state.password}
                        onChangeText={(val) => this.updateInputVal(val, 'password')}
                      />
                    </View>
                  </View>

                </View>
                <TouchableOpacity
                  //onPress={() => this.props.navigation.navigate('Login')}
                  onPress={() => this.registerUser()}
                  style={styles.button}>
                  <Text style={{color: '#f1f1f1'}}>Kayıt Ol</Text>
                </TouchableOpacity>

                <View style={styles.signUp}>
                  <Text style={styles.description}>Hesabınız var mı?</Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.hesapButton}>Giriş Yap</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </KeyboardAvoidingView>
          </View>
          </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
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
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop:90,
    marginLeft:50
  },
  login: {
    marginHorizontal: 40,
    marginVertical: 40,
    height:400,
    backgroundColor: 'rgba(52, 52, 52, 0.10)',
    padding: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: .9,
    marginTop: 40,
  },
  description:{
    color: '#999',
    textAlign: 'center',
    marginTop: 20
  },
  hesapButton: {
    color: '#f1f1f1',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  button:{
    padding: 10,
    backgroundColor: '#6093a0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    paddingHorizontal: 20,
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
  textInput: {
    marginTop:20,
    borderWidth:1,
    borderColor: '#e5dede',
    borderRadius:20,
    backgroundColor: '#6093a0'
  }

});

