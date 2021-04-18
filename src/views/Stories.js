/*import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native';  
  

class Stories extends React.Component {   
  render() {  
    return (  
      <View>  
        <Text>Bluetooth</Text>  
      </View>  
    );    
  }  
}  
export default Stories;
*/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ScrollView, Text, View, Button,Alert,TextInput } from 'react-native';
import Firebase from './firebase';
import 'firebase/firestore';
import {  Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default function Stories() {
  
  const [value, onChangeText] = React.useState('');
  const [value2, onChangeText2] = React.useState('user1');
  
  text=value;
  text2=value2;
  db = Firebase.firestore();
  return (
    <ScrollView
              style={{
                flexGrow: 0,
                width: "100%",
                height: "100%",
              }}>
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.text_header}>SHARED STORIES</Text>
      </View>
      <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>  
      
      <View>

      <Card style={styles.card}>
                <Text style={{marginBottom: 10 ,color: '#009387',fontSize: 12}} >
           Anonymous                                                       1hr ago</Text>
           <Text style={{marginTop: 20 ,fontSize: 12}} >The front page of this app is disguised as a food delivery app. That really helped me to reach out
           to helpline without being noticed by my accuser</Text>
           <Text style={{marginTop: 70 ,fontSize: 12, fontWeight: 'bold'}} >20  <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                
                source={require('./assets/like.png')}
                style={{width:20, height:20,marginLeft: 10 }}
                resizeMode="stretch"
                /> </Text>
            </Card>

            <Card style={styles.card}>
                <Text style={{marginBottom: 10 ,color: '#009387',fontSize: 12}} >
          Ritu Ghosh                                                         6hr ago</Text>
           <Text style={{marginTop: 20 ,fontSize: 12}} >This is an amazing app. It has everything in one platform.There was a crime in my neighbourhood. A 12 year old girl was assaulted
           but she was helpless and didnt know what to do. I was able to help her with this app. I called a few helpline numbers from the app. Also I filled a valid 
           complaint, and was able to reach some NGOs which was able to help the girl.</Text>
           <Text style={{marginTop: 70 ,fontSize: 12, fontWeight: 'bold'}} >14  <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                
                source={require('./assets/like.png')}
                style={{width:20, height:20,marginLeft: 10 }}
                resizeMode="stretch"
                /> </Text>
            </Card>
            <Card style={styles.card}>
                <Text style={{marginBottom: 10 ,color: '#009387',fontSize: 12}} >
                Sara Hussain                                             5 weeks ago</Text>
           <Text style={{marginTop: 20 ,fontSize: 12}} >Hello guys. Being a teenage girl in India my parents are constantly worried about my safety while 
           travelling alone . But using this app has given confidence to me and my family. I always share my location to my parents while travelling alone.Also the dehense tutorial was really helpful.
           I now know some moves and can physically protect myself.</Text>
           <Text style={{marginTop: 70 ,fontSize: 12, fontWeight: 'bold'}} >31  <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                
                source={require('./assets/like.png')}
                style={{width:20, height:20,marginLeft: 10 }}
                resizeMode="stretch"
                /> </Text>
            </Card>
            <Card style={styles.card}>
                <Text style={{marginBottom: 10 ,color: '#009387',fontSize: 12}} >
           Bhavna Singh                                         1 month ago</Text>
           <Text style={{marginTop: 20 ,fontSize: 12}} >Hi . I am Bhavna. I am a working women and my working hour usually ends at 7 pm but yesterday due to workload
           I had to work till 9 pm and I had to walk home. Being alone at such late hours was frightening to me but thanks to this app, it protected me . I was able to view nearby hotspots thus took a safer road.</Text>
           <Text style={{marginTop: 70 ,fontSize: 12, fontWeight: 'bold'}} >6  <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                
                source={require('./assets/like.png')}
                style={{width:20, height:20,marginLeft: 10 }}
                resizeMode="stretch"
                /> </Text>
            </Card>

            <Text style={{fontSize: 30,backgroundColor: '#DCDCDC',fontWeight: 'bold',marginTop: 40}}>Share your story:</Text>

      <TextInput
      style={{ height: 40,weidth: 340, borderColor: 'gray', borderWidth: 1,marginTop: 20  }}
      onChangeText2={text2 => onChangeText2(text2)}
      value2={value2} placeholder="Enter your name"
      />
       <TextInput
       multiline
       numberOfLines={8}
      style={{ height: 200,weidth: 340, borderColor: 'gray', borderWidth: 1, marginTop: 20 ,marginBottom: 20}}
      onChangeText={text => onChangeText(text)}
      value={value} placeholder="Enter your story"
      />
      <Button
          title="Submit"
          color="#009387"
          buttonStyle={{borderRadius: 20, marginTop: 20}}
          onPress={() => {
                   Alert.alert('Your Story has been submitted')
                   
                  
                   db.collection("Stories").doc(text).set({
                    name : text2,
                    content: text,
          })}}
        />
      <StatusBar style="auto" />
      </View>
      </Animatable.View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  input: {
    height: 40,
    
    margin: 12,
    borderWidth: 1,
  }, 
  card:{
    backgroundColor: '#009387'
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
