import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,Button,TouchableOpacity } from 'react-native';  
import * as Animatable from 'react-native-animatable';
import { Picker } from 'react-native-picker-dropdown' 



export default class FileReport extends Component {   
  constructor(props){
    super(props);
    this.state = { language: 'js'  }
    this.onValueChange = this.handleValueChange.bind(this)
    this.onValueChange1 = this.handleValueChange1.bind(this)
  }

  handleValueChange(language) {
    this.setState({ language })
  }
  handleValueChange1(language) {
    this.setState1({ language })
  }

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
        <Text style={{fontSize: 20,backgroundColor: '#DCDCDC',fontWeight: 'bold',}}>  COMPLAINANT</Text>
      <Text>   Complainant's Name
      
     </Text> 
     <TextInput
        style={{height:40  ,width: 300,margin: 12,
          borderWidth: 1,paddingLeft:50}}
        placeholder="Enter complainant name"
        
      />
      <Text>  Complainant's Address
      
      </Text>    
      <TextInput
      multiline
      numberOfLines={6}
        style={{height:100  ,width: 300,margin: 12,
          borderWidth: 1,paddingLeft:50}}
        placeholder="Enter complainant address"
        
      />
      <Text> Complainant's Phone no.</Text> 
      
      <TextInput
          style={{height:40  ,width: 300,margin: 12,
          borderWidth: 1, paddingLeft:50 }}
        placeholder="Enter complainant phone number"
        
      />
      <Text> Complainant's  Email.</Text> 
      
       <TextInput
           style={{height:40  ,width: 300,margin: 12,
           borderWidth: 1, paddingLeft:50 }}
         placeholder="Enter complainant email address"
         
       />

      
      </View> 

      <View>
      <Text style={{fontSize: 20,backgroundColor: '#DCDCDC',fontWeight: 'bold',}}>  VICTIM</Text>
      <Text>  Is the complainant the victim?
      </Text>
      <Picker
          selectedValue={this.state.language}
          onValueChange={this.onValueChange}
          mode="dialog"
          
        >
          <Picker.Item label="YES" value="YES" />
          <Picker.Item label="NO" value="NO" />
          
        </Picker>
     
        
      <Text>  Victim's Name
      </Text> 
      <TextInput
        style={{height:40  ,width: 300,margin: 12,
          borderWidth: 1,paddingLeft:50}}
        placeholder="Enter victim's name"
        
      />
      
      <Text>  Victim's Address
      
      </Text>  
    
       
      <TextInput
      multiline
      numberOfLines={6}
        style={{height:100  ,width: 300,margin: 12,
          borderWidth: 1,paddingLeft:50}}
        placeholder="Enter victim's address"
        
      />
      <Text> Victim's Phone no.
      </Text> 
      <TextInput
          style={{height:40  ,width: 300,margin: 12,
          borderWidth: 1, paddingLeft:50 }}
        placeholder="Enter victim's phone number"
        
      />
      <Text> Victim's Email.
      </Text> 
       <TextInput
           style={{height:40  ,width: 300,margin: 12,
           borderWidth: 1, paddingLeft:50 }}
         placeholder="Enter victims email address"
         
       />
      </View> 
       
      <View>
        <Text style={{fontSize: 20,backgroundColor: '#DCDCDC',fontWeight: 'bold',}}> ACCUSED</Text>
        <Text>  Is the victim related to accused?
      </Text>
      <Picker
          selectedValue={this.state.language}
          onValueChange={this.onValueChange}
          mode="dialog"
          
        >
          <Picker.Item label="NOT RELATED" value="NOT REL" />
          <Picker.Item label="FAMILY MEMBER" value="FAMILY" />
          <Picker.Item label="FRIEND" value="FRIEND" />
          <Picker.Item label="COWORKER" value="COWORKER" />
          <Picker.Item label="DISTANT RELATIVE" value="DISTANT RELATIVE" />
          
        </Picker>
      <Text>  Accused's Name
      </Text>
      <TextInput
        style={{height:40  ,width: 300,margin: 12,
          borderWidth: 1,paddingLeft:50}}
        placeholder="Enter accused's name"
        
      />
      


      <Text>  Accused's Address
      
      </Text>   
      <TextInput
      multiline
      numberOfLines={6}
        style={{height:100  ,width: 300,margin: 12,
          borderWidth: 1,paddingLeft:50}}
        placeholder="Enter accused's address"
        
      />
      <Text> Accused's Phone no.</Text> 
      
      <TextInput
          style={{height:40  ,width: 300,margin: 12,
          borderWidth: 1, paddingLeft:50 }}
        placeholder="Enter Accused's phone number"
        
      />
      <Text> Accused's Email.</Text> 
      
       <TextInput
           style={{height:40  ,width: 300,margin: 12,
           borderWidth: 1, paddingLeft:50 }}
         placeholder="Enter accused email address"
         
       />
       </View>
       <Text style={{fontSize: 20,backgroundColor: '#DCDCDC',fontWeight: 'bold',}}> NEEDFUL INFORMATION</Text>

<Text style={{fontSize: 20, color:'white'}}> .</Text>
      
<TextInput
      multiline
      numberOfLines={6}
        style={{height:100  ,width: 300,margin: 12,
          borderWidth: 1,paddingLeft:50}}
        placeholder="enter other details if any"
        
      />


<Button
            color='#009387' 
            buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='  Submit  '
            onPress={() => this.props.navigation.navigate('Home')} />



      </Animatable.View>
      </View> 
      </ScrollView>
    );  
  }  
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
