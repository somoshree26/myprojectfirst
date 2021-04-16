import React, {Component} from 'react';  
import {Platform, StyleSheet,Image, Text, View,
  TouchableHighlight,ScrollView,Button,
  TouchableOpacity,Linking,
  Dimensions} from 'react-native';  

import ImageSlider from 'react-native-image-slider'; 
import * as Animatable from 'react-native-animatable';

class Page1 extends React.Component {   
  dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 }; 
  render() {  
    const images = [
      'https://ipanewspack.com/wp-content/uploads/2020/08/Untitled-design-40.jpg',
      'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/25105849/Save-girl-child-1024x672.jpg',
      'https://plan-international.org/sites/default/files/styles/xl__original/public/field/field_image_listing/201709-bgd-49-scr.jpg?itok=YmUYGNlT',
    ];

    return (  
     
     
<View style={styles.container}>  
    
      <ImageSlider
      loopBothSides
      autoPlayWithInterval={3000}
      images={images}
      customSlide={({ index, item, style, width }) => (
        // It's important to put style here because it's got offset inside
        <View key={index} style={[style, styles.customSlide]}>
          <Image source={{ uri: item }} style={styles.image} />
        </View>
      )}
      customButtons={(position, move) => (
        <View style={styles.buttons}>
          {images.map((images, index) => {
            return (
              <TouchableHighlight
                key={index}
                underlayColor="#ccc"
                onPress={() => move(index)}
                style={styles.button}
              >
                <Text style={position === index && styles.buttonSelected}>
                  .
                </Text>
              </TouchableHighlight>
            );
          })}
        </View>
      )}
    />
 
     <Text style={{fontSize: 30,marginTop: 20,marginLeft: 10,color:"white",fontWeight: 'bold'}}>WELCOME!!!</Text>
     <Text style={{fontSize: 20,marginTop: 20,marginLeft: 10,color:"white"}}>Lets together make this world a better place for women to live in.</Text>
     <Text style={{fontSize: 20,marginTop: 20,marginLeft: 10,color:"white"}}>Lets restore the faith in humanity and kindness</Text>
     
     <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                source={require('./assets/lol.png')}
                style={{ justifyContent: 'center',height:"15%",width:"62%",
                marginLeft: 140}}
                resizeMode="stretch"
                />




<Text style={{fontSize: 18,marginTop: 30,marginLeft: 10,fontWeight: 'bold'}}>Contact us:</Text>
<Text style={{color: 'black',
    
    fontSize: 15, paddingTop: 5,marginLeft: 10
}}>Call us at  <Text style={{color: '#009387'}}>.</Text> 
          

      <TouchableOpacity
                   style={{
                   height: 15,
                   width: 100,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(123456789)}}
                >
                <Text style={{ fontSize: 15}}> 1234567890</Text>
                </TouchableOpacity>
                </Text>


                <Text style={{color: 'black',
    
    fontSize: 15, paddingTop: 5,marginLeft: 10
}}>Mail us at  <Text style={{color: '#009387'}}>.</Text> 
          

      <TouchableOpacity
                   style={{
                   height: 15,
                   width: 500,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(123456789)}}
                >
                <Text style={{ fontSize: 15}}> 1705899@kiit.ac.in</Text>
                </TouchableOpacity>
                </Text>
                
    </View>



    );  
  }  
}  
export default Page1;



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  scrollViewContainer: {
    flexDirection: 'row',
    backgroundColor: '#222',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttons: {
    height: 15,
    marginTop: -15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 3,
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: '#ccc',
    opacity: 0.9,
  },
  buttonSelected: {
    opacity: 1,
    backgroundColor: '#fff',
  },
});

/*

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {Container,ListItem,List,Context} from 'native-base';
 
function VideoListScreen() {
  return <Container/>

}
function VideoPlayerScreen({route}) {
  return <Container/>

}

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Video List" component={VideoListScreen}/>
        <Stack.Screen name="Video Player" component={VideoPlayerScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native';  
  

class Page1 extends React.Component {   
  render() {  
    return (  
      <View>  
        <Text>Bluetooth</Text>  
      </View>  
    );  
  }  
}  
export default Page1;
*/