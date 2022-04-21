import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text, TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import places from "../components/places";
import Router from "../Router";


const Detail = ({navigation, route}) => {
  const place = navigation.getParam('place');
  const {goBack} =navigation;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{flex: 0.7}} source={place.image}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => goBack()}>
            <Icon name={"arrow-back"} size={30} color={"#fff"} style={{marginTop:20, marginRight:250}}/>
          </TouchableOpacity>
          <Icon name="more-vert" size={28} color={'#fff'} />
        </View>
        <View style={styles.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: 20,
            }}>
            {place.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={30} color={'#fff'} />
            <Text
              style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <View style={styles.iconContainer}>
          <Icon name="favorite" color={'#ce1414'} size={30} />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon name="place" size={28} color={'#0065ff'} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
            }}>
            {place.location}
          </Text>
        </View>
        <Text style={{marginTop: 20, lineHeight: 22}}>{place.details}</Text>
      </View>

      <View style={styles.categoryContainer}>
        <Icon name="star" size={25} color={'#fff'} style={styles.icon}/>
        <Icon name="wifi" size={25} color={'#fff'} style={styles.icon}/>
        <Icon name="local-parking" size={25} color={'#fff'} style={styles.icon}/>
        <Icon name="local-drink" size={25} color={'#fff'} style={styles.icon}/>
      </View>

      <View style={styles.footer}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
            }}>
           500₺
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#fff',
              marginLeft: 2,
            }}>
            /Günlük
          </Text>
        </View>
        <View style={styles.bookNowBtn}>
          <Text
            style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
            Rezervasyon yap
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bookNowBtn: {
    height: 50,
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: '#fff',
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 0.3,
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor:'#6093a0',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  categoryContainer: {
    marginTop: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 80,
    width: 40,
    color: '#6093a0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
  },

});

export default Detail;
