import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';  
import * as Animatable from 'react-native-animatable';

class AboutUs extends React.Component {   
  render() {  
    return ( 
        <ScrollView
          style={{
            flexGrow: 0,
            width: "100%",
            height: "100%",
          }}>
      <View style={styles.container}>  
        <View style={styles.header}>
                <Text style={styles.text_header}>About Us</Text>
                </View>
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>  
                <View  > 
                <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                
                source={require('./assets/anuska.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
                <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                
                source={require('./assets/somo.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
                <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                source={require('./assets/ananya.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
                    </View>
                   
                
                </Animatable.View>
      </View> 
      </ScrollView> 
    );  
  }  
}  
export default AboutUs;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    card: {
        flex: 1,
        margin: 15 ,
       //height: 500,
        borderWidth:10,

        borderColor:"black",
        backgroundColor: '#009387'
      },
      logo: {
         // flex: 1,
        width: 360,
        height: 400,
        borderWidth: 10,
        borderColor:"white",
        alignContent:'center',
        
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 30

    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    footer: {
        flex: 6,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
       // height: 400
    }
});