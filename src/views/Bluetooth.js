
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet ,Button} from 'react-native';
import * as Location from 'expo-location';
import * as SMS from 'expo-sms';

import * as Animatable from 'react-native-animatable';
export default function Bluetooth() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  
  let text2="";
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    text2="\n\nThe URL is https://maps.google.com/?q="+JSON.stringify(location.coords.latitude)+","+JSON.stringify(location.coords.longitude);
  }
  
  
   


    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.text_header}>Share My Location</Text> 
          </View>
        <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>  


<View>
        <Text style={styles.paragraph}>{text}</Text>
        <Button title="Share Live Location" 
                color="#009387"
                onPress={() =>SMS.sendSMSAsync(
                                          ['9830942405', '7880362932'],
                                          text+text2
                                        )} 
                />
      </View></Animatable.View>
      </View>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#009387',
    },
    footer: {
      flex: 6,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
     // height: 400
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
},
    
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 30,
      paddingTop: 30
  
  },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
  });
