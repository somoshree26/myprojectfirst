import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View,ScrollView,TextInput } from 'react-native';  
import * as Animatable from 'react-native-animatable';



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
        <Text style={{fontSize: 20,backgroundColor: '#DCDCDC',fontWeight: 'bold',}}>  COMPLAINANT</Text>
      <Text>  Complainant's Name
      <Text style={{color: 'white'}}>     .</Text>
      <TextInput
        style={{height:40  ,width: 300,margin: 12,
          borderWidth: 1,paddingLeft:50}}
        placeholder="Enter complainant name"
        
      /></Text> 
      
      <Text>  Complainant's Address
      
      </Text>    <Text style={{color: 'white'}}>                                        .
      <TextInput
      multiline
      numberOfLines={6}
        style={{height:100  ,width: 300,margin: 12,
          borderWidth: 1,paddingLeft:50}}
        placeholder="Enter complainant address"
        
      /></Text>
      <Text> Complainant's Phone no.
      
      <TextInput
          style={{height:40  ,width: 300,margin: 12,
          borderWidth: 1, paddingLeft:50 }}
        placeholder="Enter complainant phone number"
        
      /></Text> 
      <Text> Complainant's  Email.
       <Text style={{color: 'white'}}>     .</Text>
       <TextInput
           style={{height:40  ,width: 300,margin: 12,
           borderWidth: 1, paddingLeft:50 }}
         placeholder="Enter complainant email address"
         
       /></Text> 
      </View> 


      <View>
        <Text style={{fontSize: 20,backgroundColor: '#DCDCDC',fontWeight: 'bold',}}>  VICTIM</Text>
      <Text>  Victim's Name
      <Text style={{color: 'white'}}>     .</Text>
      <TextInput
        style={{height:40  ,width: 300,margin: 12,
          borderWidth: 1,paddingLeft:50}}
        placeholder="Enter victim's name"
        
      /></Text> 
      
      <Text>  Victim's Address
      
      </Text>    <Text style={{color: 'white'}}>                              .
      <TextInput
      multiline
      numberOfLines={6}
        style={{height:100  ,width: 300,margin: 12,
          borderWidth: 1,paddingLeft:50}}
        placeholder="Enter victim's address"
        
      /></Text>
      <Text> Victim's Phone no.
      
      <TextInput
          style={{height:40  ,width: 300,margin: 12,
          borderWidth: 1, paddingLeft:50 }}
        placeholder="Enter victim's phone number"
        
      /></Text> 
      <Text> Victim's Email.
       <Text style={{color: 'white'}}>     .</Text>
       <TextInput
           style={{height:40  ,width: 300,margin: 12,
           borderWidth: 1, paddingLeft:50 }}
         placeholder="Enter victims email address"
         
       /></Text> 
      </View> 
       


     
      <View>
        <Text style={{fontSize: 20,backgroundColor: '#DCDCDC',fontWeight: 'bold',}}> ACCUSED</Text>
      <Text>  Accused's Name
      <Text style={{color: 'white'}}>     .</Text>
      <TextInput
        style={{height:40  ,width: 300,margin: 12,
          borderWidth: 1,paddingLeft:50}}
        placeholder="Enter accused's name"
        
      /></Text> 
      
      <Text>  Accused's Address
      
      </Text>    <Text style={{color: 'white'}}>                                .
      <TextInput
      multiline
      numberOfLines={6}
        style={{height:100  ,width: 300,margin: 12,
          borderWidth: 1,paddingLeft:50}}
        placeholder="Enter accused's address"
        
      /></Text>
      <Text> Accused's Phone no.
      
      <TextInput
          style={{height:40  ,width: 300,margin: 12,
          borderWidth: 1, paddingLeft:50 }}
        placeholder="Enter Accused's phone number"
        
      /></Text> 
      <Text> Accused's Email.
       <Text style={{color: 'white'}}>     .</Text>
       <TextInput
           style={{height:40  ,width: 300,margin: 12,
           borderWidth: 1, paddingLeft:50 }}
         placeholder="Enter accused email address"
         
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
    weight: '50%',
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

