 
import {Platform, StyleSheet, Text, View} from 'react-native';  
import React, { Component } from "react";
import {Linking,TouchableOpacity,Button,ScrollView} from "react-native";  
import * as Animatable from 'react-native-animatable';

class Helpline extends React.Component {  
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
                <Text style={styles.text_header}>Helpline
                </Text>
                </View>
     
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>  
      
      <View>
        <Text style={{color: '#009387',
    fontWeight: 'bold',
    fontSize: 20,backgroundColor: '#DCDCDC'
}}> WOMEN HELPLINE NUMBERS
          </Text>
          <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}>Women Helpline(India)-                                                         Women in distress                 .
          

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 42,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(1091)}}
                >
                <Text style={{color: 'white', fontSize: 15}}>1091</Text>
                </TouchableOpacity>
                </Text>
                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}>Women Helpline Domestic abuse                                        .
          

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 40,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(181)}}
                >
                <Text style={{color: 'white', fontSize: 15}}> 181</Text>
                </TouchableOpacity>
                </Text>
                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}>Police                                       .
          

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 42,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(100)}}
                >
                <Text style={{color: 'white', fontSize: 15}}> 100</Text>
                </TouchableOpacity>
                </Text>
                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}>Student/Child Helpline        .
          

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 42,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(1098)}}
                >
                <Text style={{color: 'white', fontSize: 15}}>1098</Text>
                </TouchableOpacity>
                </Text>
                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}>National commision for women                                    . 

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 90,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(011-26942369)}}
                >
                <Text style={{color: 'white', fontSize: 15}}> 26942369</Text>
                </TouchableOpacity>
                </Text>
                <Text style={{color: 'white',
    fontWeight: 'bold', 
    fontSize: 20, backgroundColor: 'white'
}}> STATE WISE WOMEN HELPLINE NUMBERS
          </Text>
                <Text style={{color: '#009387',
    fontWeight: 'bold', 
    fontSize: 20, backgroundColor: '#DCDCDC'
}}> STATE WISE WOMEN HELPLINE NUMBERS
          </Text>
               

          <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}> ANDHRA PRADESH     .
          

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 42,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(040-277853508)}}
                >
                <Text style={{color: 'white', fontSize: 15}}> DIAL</Text>
                </TouchableOpacity>
                </Text>
                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}> UTTAR PRADESH         .
          

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 42,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(112)}}
                >
                <Text style={{color: 'white', fontSize: 15}}> DIAL</Text>
                </TouchableOpacity>
                </Text>
                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}> ODISHA                          .
          

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 42,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(181)}}
                >
                <Text style={{color: 'white', fontSize: 15}}> DIAL</Text>
                </TouchableOpacity>
                </Text>
                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}> WEST BENGAL             .
          

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 42,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(033-23595609)}}
                >
                <Text style={{color: 'white', fontSize: 15}}> DIAL</Text>
                </TouchableOpacity>
                </Text>
                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}> MAHARASTRA             . 

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 42,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(103)}}
                >
                <Text style={{color: 'white', fontSize: 15}}> DIAL</Text>
                </TouchableOpacity>
                </Text>


                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}> ASSAM                           . 

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 42,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(181)}}
                >
                <Text style={{color: 'white', fontSize: 15}}> DIAL</Text>
                </TouchableOpacity>
                </Text>


                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}> PUNJAB                         . 

      <TouchableOpacity
                   style={{
                   height: 21,
                   width: 42,
                   backgroundColor: '#009387',
                  
                   
                   justifyContent: 'center',
                   borderRadius: 5,

                   }}
                 onPress={()=>{this.dialCall(112)}}
                >
                <Text style={{color: 'white', fontSize: 15}}> DIAL</Text>
                </TouchableOpacity>
                </Text>


                <Text style={{color: 'black',
    fontWeight: 'bold',
    fontSize: 17, paddingTop: 20
}}> RAJASTHAN                 . 

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






                </View>
                </Animatable.View>
               </View>
                </ScrollView>
                
    );  
  }  
}  
export default Helpline;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
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
