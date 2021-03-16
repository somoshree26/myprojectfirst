import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View,ScrollView,TextInput } from 'react-native';  
import * as Animatable from 'react-native-animatable';
  
//type Props = {};  
class FileReport extends React.Component {   
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
                <Text style={styles.text_header}>FILE A REPORT
                </Text>
                </View>
     
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>  
      
      <View>
      <Text> Complainant Name
      <TextInput
        style={styles.input}
        placeholder="Enter complainant name"
        
      /></Text> 
      </View> 
      </Animatable.View>
      </View> 
      </ScrollView>
    );  
  }  
}  
export default FileReport;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  input: {
    height: 40,
    weight: '500',
    margin: 12,
    borderWidth: 1,
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
},
  
  button: {
      alignItems: 'flex-end',
      borderRadius: 30,
      color: '#05375a',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});
/*

import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import NativeForms from "native-forms";

const App = () => {
  const [hasForm, showForm] = useState(false);
  const show = () => showForm(true);
  const hide = () => showForm(false);

  return (
    <View style={styles.container}>
      

      <Button title="Show Form" onPress={show} color="#20f" />

      {hasForm && (
        <NativeForms
          form="https://my.nativeforms.com/wauVjRU1jZmMTT0oVb41Db"
          onClose={hide}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;*/
