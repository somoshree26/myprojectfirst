// src/views/Home.js
/*import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import Product from '../components/Product';



const products = [
  {
    name: 'Khaki Suede Polish Work Boots',
    price: 149.99,
    //img:'images.png'
  },
  {
    name: 'Camo Fang Backpack Jungle',
    price: 39.99,
    //img: 'images.png'
  },
  {
    name: 'Parka and Quilted Liner Jacket',
    price: 49.99,
    //img: 'images.png'
  },
  {
    name: 'Cotton Black Cap',
    price: 12.99,
    //img: 'images.png'
  },
  {
    name: 'Cotton Black Cap',
    price: 12.99,
    //img: 'images.png'
  },
];

class HomeScreen extends React.Component {
    render() {
      return (
        <ScrollView
          style={{
            flexGrow: 0,
            width: "100%",
            height: "100%",
          }}>
          {
            products.map((product,index) => {
              return(
                <View style={styles.row} key={product}>
                    <View style={styles.col}>
                      <Product />
                    </View>
                </View>
              )
            })
          }
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  col: {
      flex: 1,
  },
});

export default withNavigation(HomeScreen);
*/
import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View,Button,ScrollView,Linking } from 'react-native';  
import * as Animatable from 'react-native-animatable';  


class Home extends React.Component {   
  render() {  
    return (
     
      <ScrollView
          style={{
            flexGrow: 0,
            width: "100%",
            height: "100%",
          }}>
      <View style={styles.container}>  
        <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                
                source={require('./assets/pizza.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
             
                <Button
            color='green' 
            buttonStyle={{borderRadius: 10,  position: 'absolute',bottom:0,
            left:0,width: 20}}
            title='View more'
            onPress={() => this.props.navigation.navigate('Details')} />
            

<Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                
                source={require('./assets/dosa.png')}
                style={styles.logo}
                resizeMode="stretch"
                />  
                <Button
            color='green' 
            buttonStyle={{borderRadius: 10,  position: 'absolute',bottom:0,
            left:0,width: 20}}
            title='View more'
            onPress={() => this.props.navigation.navigate('Details')} />
             

               
            
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                
                source={require('./assets/dal.png')}
                style={styles.logo}
                resizeMode="stretch"
                />     
                <Button  color='green' 
                title='View more'
                onPress={() => {
                  Linking.openURL('https://drive.google.com/file/d/1luUGSvDbvXfqJMRRlAQHrLufeytIRrZF/view?usp=sharing');
                }}
              />
            
      </View> 
      </ScrollView> 
    );  
  }  
}  


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'red'
  },
  
  card: {
      flex: 1,
      margin: 15 ,
     //height: 500,
      borderWidth:10,

      borderColor:"black",
      backgroundColor: 'white'
    },
    logo: {
      paddingHorizontal: 20,
          paddingBottom: 30,
          paddingTop: 30,
  
       flex: 1,
     width: '100%',
     height: 300,
     borderWidth: 10,
     borderColor:"red",
     alignContent:'center',
     borderRadius: 50
  }
 
});
export default Home;