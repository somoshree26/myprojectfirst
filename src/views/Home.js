// src/views/Home.js
import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View,Button} from 'react-native';  
import * as Animatable from 'react-native-animatable';  

class Home extends React.Component {   
  render() {  
    return (  
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
                <Button
            color='green' 
            buttonStyle={{borderRadius: 10,  position: 'absolute',bottom:0,
            left:0,width: 20}}
            title='View more'
            onPress={() => this.props.navigation.navigate('Details')} />
            
      </View>  
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
     borderWidth: 20,
     borderColor:"red",
     alignContent:'center',
     borderRadius: 50
  }
 
});
export default Home;
