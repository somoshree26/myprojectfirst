import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View,TouchableOpacity, ScrollView,Linking} from 'react-native';  
import {  Button, Card,CardView,Cover } from 'react-native-elements';
  
import * as Animatable from 'react-native-animatable';
class profile extends React.Component {  
    dialCall = (number) => {
        let phoneNumber = '';
        if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
        else {phoneNumber = `telprompt:${number}`; }
        Linking.openURL(phoneNumber);
     };  
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
                <Text style={styles.text_header}>MY PROFILE
                </Text>
                </View>
     
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>  


<View>
<Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                
                source={require('./assets/profile.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
<Text size='30px' bold style={{marginTop: 16 ,marginLeft: 110, fontWeight: 'bold'}}>Advika Srivastava</Text>
                <Text size= '10px'bold style={{marginTop: 16 ,marginLeft: 95}} > Bhubaneswar ,  India </Text>
                <Text style={{color: 'black',
    
    fontSize: 15, paddingTop: 5,marginLeft: 90
}}>Ph.no.  <Text style={{color: '#009387'}}></Text><TouchableOpacity
                   style={{
                   height: 15,
                   width: 100,
                   marginLeft:50,
                  
                   marginTop: 10,
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(123456789)}}
                >
                <Text style={{ fontSize: 15}}> 9000000009</Text>
                </TouchableOpacity>
                </Text>
                <Text size='14px' style = {{marginTop: 30,marginLeft: 40}}>
                    Hi, I am Advika. I am a college student.
                </Text>
               
                <Card style={styles.card}>
                <Text style={{marginBottom: 10 ,color: '#009387',fontSize: 12}} >
           Advika                                                              1hr ago</Text>
           <Text style={{marginTop: 20 ,fontSize: 12}} >This is my story</Text>
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
           Advika                                                         3weeks ago</Text>
           <Text style={{marginTop: 20 ,fontSize: 12}} >This is my story</Text>
           <Text style={{marginTop: 70 ,fontSize: 12, fontWeight: 'bold'}} >12  <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                
                source={require('./assets/like.png')}
                style={{width:20, height:20,marginLeft: 10 }}
                resizeMode="stretch"
                /></Text>
            </Card>



            <Text style={{color: 'white',
    fontWeight: 'bold', 
    fontSize: 20, backgroundColor: 'white'
}}> EMERGENCY CONTACTS
          </Text>
                <Text style={{color: '#009387',
    fontWeight: 'bold', 
    fontSize: 20, backgroundColor: '#DCDCDC'
}}> EMERGENCY CONTACTS
          </Text>
               

          
                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}> MOM              <Text style={{color: 'white'}}> .</Text>
          

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 42,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(8009284591)}}
                >
                <Text style={{color: 'white', fontSize: 15}}> DIAL</Text>
                </TouchableOpacity>
                </Text>
                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}> DAD                 <Text style={{color: 'white'}}>.</Text> 
          

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 42,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(123456789)}}
                >
                <Text style={{color: 'white', fontSize: 15}}> DIAL</Text>
                </TouchableOpacity>
                </Text>
                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}> AISHA             <Text style={{color: 'white'}}>.</Text> 
          

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 42,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(123456789)}}
                >
                <Text style={{color: 'white', fontSize: 15}}> DIAL</Text>
                </TouchableOpacity>
                </Text>
                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}> BROTHER      <Text style={{color: 'white'}}> .</Text>
          

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 42,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(8009284591)}}
                >
                <Text style={{color: 'white', fontSize: 15}}> DIAL</Text>
                </TouchableOpacity>
                </Text>
    </View>




                </Animatable.View>
      

              </View>
              </ScrollView>
    );    
  }  
}  
export default profile;



const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    card:{
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
  logo: {
    paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 30,
        
marginLeft: 120,

     flex: 1,
   width: 100,
   height: 130,
   borderWidth: 2,
   borderColor:"#009387",
   alignContent:'center',
   
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