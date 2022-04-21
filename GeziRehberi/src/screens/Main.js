import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import TextInput from 'react-native-textinput-with-icons'
import Icon from 'react-native-vector-icons/MaterialIcons';
import places from "../components/places";
import hotels from "../components/hotels";
import Detail from "./Detail";
import DetailHotels from "./DetailHotels";


export default class Main extends Component {
  static navigationOptions= {header:null}
  openDrawerMenu = () => {
    this.props.navigation.toggleDrawer();
  }
  gotoDetail = place => {
    this.props.navigation.navigate('Detail', {
      place
    })
  }

  gotoDetailHotels = hotel => {
    this.props.navigation.navigate('DetailHotels', {
      hotel
    })
  }

  render() {
    const {navigate, goBack} = this.props.navigation;
    const   Card = ({place}) => {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this.gotoDetail(place)}>
          <ImageBackground style={styles.cardImage} source={place.image}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              {place.name}
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="place" size={20} color={'#fff'} />
                <Text style={{ marginLeft: 5, color: '#fff' }}>
                  {place.location}
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="star" size={20} color={'#fff'} />
                <Text style={{ marginRight: 15, color: '#fff' }}>5</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
    };

    const RecommendedCard = ({hotel}) => {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this.gotoDetailHotels(hotel)}>
        <ImageBackground style={styles.rmCardImage} source={hotel.image}>
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {hotel.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="place" size={22} color={'#fff'} />
                <Text style={{color: '#fff', marginLeft: 5}}>
                  {hotel.location}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={22} color={'#fff'} />
                <Text style={{color: '#fff', marginLeft: 5}}>5.0</Text>
              </View>
            </View>
            <Text style={{color: '#fff', fontSize: 13}}>
              {hotel.details}
            </Text>
          </View>
        </ImageBackground>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.container}>
        <ScrollView>
      <View style={styles.header}>
        <View style={styles.space}>
          <TouchableOpacity
            onPress={this.openDrawerMenu}>
            <Icon name="menu" size={30} color={'#fff'} style={styles.icon} />
          </TouchableOpacity>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize:24, marginTop:2, marginHorizontal:20, marginLeft: 100}}>Otelleri keşfet</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            label="Search"
            leftIcon="search"
            rippleColor="blue"
          />
        </View>
      </View>
        <View style={styles.categoryContainer}>
            <Icon name="star" size={25} color={'#fff'} style={styles.iconContainer}/>
            <Icon name="beach-access" size={25} color={'#fff'} style={styles.iconContainer}/>
            <Icon name="near-me" size={25} color={'#fff'} style={styles.iconContainer}/>
            <Icon name="place" size={25} color={'#fff'} style={styles.iconContainer}/>
        </View>

        <View style={{marginTop:20}}>
          <FlatList
            contentContainerStyle={{paddingLeft: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({item}) => <Card place={item} />}
          />

          <Text style={styles.sectionTitle}>ÖNE ÇIKANLAR</Text>
          <FlatList
            contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={hotels}
            renderItem={({item}) => <RecommendedCard hotel={item} />}
          />
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#6093a0',
    width: '100%',
    height:150,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  searchContainer: {
    marginHorizontal: 20,
    marginVertical: 40,
    height: 70,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: .9,
    marginTop: 30,
  },
  searchInput: {
    borderWidth:1,
    borderColor: '#e5dede',
    borderRadius:5
  },
  categoryContainer: {
    marginTop: 220,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 40,
    width: 40,
    color: '#6093a0',
    borderRadius: 10,
    marginLeft:10,
    justifyContent: 'center',
    alignItems:'center',
  },

  cardImage: {
    height: 220,
    width: 220,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  rmCardImage: {
    width: 350,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    marginBottom:10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    marginTop:30,
    marginLeft:350
  }
});
