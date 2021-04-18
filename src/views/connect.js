
import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View,Alert,ScrollView,Button} from 'react-native';  
import * as Animatable from 'react-native-animatable';

class connect extends React.Component {   
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
                <Text style={styles.text_header}>Connect to Others</Text>
                </View>
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>  
                <View  > 
                <Text style={{fontSize: 80 , color: '#fff'}}>Connect to Others</Text>
                <Button     

            color='#009387' 
            buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginTop: 100 }}
            title='  Find other devices '
            onPress={() => {Alert.alert('No device found')
            this.props.navigation.navigate('Home')}} />

                    </View>
                   
                
                </Animatable.View>
      </View> 
      </ScrollView> 
    );  
  }  
}  
export default connect;
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