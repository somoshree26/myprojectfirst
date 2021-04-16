// src/views/Details.js
import React from 'react';
import { View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    Button,
    StyleSheet,
    StatusBar,
    Image} from 'react-native';

    
   // import MaterialIcons from 'react-native-vector-icons/MaterialIcons';  
    import * as Animatable from 'react-native-animatable';

class SplashScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                source={require('./assets/logo.png')}
                style={styles.logo}
                resizeMode="stretch"
                />

            </View>
            <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
            >
                <Text style={styles.title}>Stay connected and safe with us</Text>
                <Text style={styles.text}>Sign in with account</Text>

                <View style={styles.button}> 
                
               
           
            <Button
            color='#009387' 
            buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='  Get Started  '
            onPress={() => this.props.navigation.navigate('SignInScreen')} />
              </View>  
            </Animatable.View>
        </View>
      );
    }
}

export default SplashScreen;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
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

  
