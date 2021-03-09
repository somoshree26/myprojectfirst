import React from 'react';
import { View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    Button,
    StyleSheet ,
    StatusBar,
    ScrollView,
    Alert} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Home from '../views/Home';
import { render } from 'react-dom';
//import { render } from 'React';

    const SignUpScreen = (props) => {
        
        const [data, setData] = React.useState({
            email: '',
            password: '',
            confirm_password: '',
            check_textInputChange: false,
            secureTextEntry: true,
            confirm_secureTextEntry: true,
            isValidUser: true,
            isValidPassword: true,
        });

        const textInputChange = (val) => {
            if( val.trim().length >= 6 ) {
                setData({
                    ...data,
                    email: val,
                    check_textInputChange: true,
                    isValidUser: true
                });
            } else {
                setData({
                    ...data,
                    email: val,
                    check_textInputChange: false,
                    isValidUser: false
                });
            }
        }

        const handlePasswordChange = (val) => {
                setData({
                    ...data,
                    password: val,
                    
                });
            
        }
        const handleConfirmPasswordChange = (val) => {
            setData({
                ...data,
                confirm_password: val,
                
            });
        
    }

        const updateSecureTextEntry = () => {
            setData({
                ...data,
                secureTextEntry: !data.secureTextEntry
            });
        }
    

        const updateConfirmSecureTextEntry = () => {
            setData({
                ...data,
                confirm_secureTextEntry: !data.confirm_secureTextEntry
                
            });
        }
    
  
 
        return(
            <ScrollView
          style={{
            flexGrow: 0,
            width: "100%",
            height: "100%",
          }}>
            <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle="light-content"/>
                <View style={styles.header}>
                <Text style={styles.text_header}>Register now!</Text>
                </View>
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>
                <Text style={styles.text_footer}>Full Name</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name="user-o"
                    color="#05375a"
                    size={20}
                    />
                   <TextInput
                   placeholder="Name"
                   style={styles.textInput} 
                   autoCapitalize="none"
                   onChangeText={(val) => textInputChange(val)}
                   />

                   {data.check_textInputChange ?
                <Animatable.View
                animation="bounceIn"
            >
                   <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                    </Animatable.View>
                    : null}
                </View>

                <Text style={[styles.text_footer,{marginTop: 35}]}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name="user-o"
                    color="#05375a"
                    size={20}
                    />
                   <TextInput
                   placeholder="Your Email"
                   style={styles.textInput} 
                   autoCapitalize="none"
                   onChangeText={(val) => textInputChange(val)}
                   />

                   {data.check_textInputChange ?
                <Animatable.View
                animation="bounceIn"
            >
                   <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                    </Animatable.View>
                    : null}
                </View>

                <Text style={[styles.text_footer,{marginTop: 35}]}>Aadhar No.</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name="user-o"
                    color="#05375a"
                    size={20}
                    />
                   <TextInput
                   placeholder="Your Aadhar no."
                   style={styles.textInput} 
                   autoCapitalize="none"
                   onChangeText={(val) => textInputChange(val)}
                   />

                   {data.check_textInputChange ?
                <Animatable.View
                animation="bounceIn"
            >
                   <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                    </Animatable.View>
                    : null}
                </View>

                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                <Feather 
                        name="lock"
                        color="grey"
                        size={20}
                    />
                   <TextInput
                   placeholder="Your Password"
                   secureTextEntry={data.secureTextEntry ? true : false }
                   style={styles.textInput} 
                   autoCapitalize="none"
                   onChangeText={(val) => handlePasswordChange(val)}/>
                  <TouchableOpacity
                    onPress={updateSecureTextEntry}
                  >
                      {data.secureTextEntry ?
                   <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                     /> 
                     }
                    </TouchableOpacity>
                </View>



                <Text style={[styles.text_footer, {marginTop: 35}]}>Confirm Password</Text>
                <View style={styles.action}>
                <Feather 
                        name="lock"
                        color="grey"
                        size={20}
                    />
                   <TextInput
                   placeholder="Confirm Password"
                   secureTextEntry={data.confirm_secureTextEntry ? true : false }
                   style={styles.textInput} 
                   autoCapitalize="none"
                   onChangeText={(val) => handleConfirmPasswordChange(val)}/>
                  <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                  >
                      {data.secureTextEntry ?
                   <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                     /> 
                     }
                    </TouchableOpacity>
                </View>
                        

                        <View style={styles.button}> 
                
                 
             
                        <TouchableOpacity
                    onPress={() => props.navigation.navigate('SignInScreen')}
                    style={[styles.signIn, {
                        backgroundColor: '#009387',
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: 'white'
                    }]}>Directly Sign In</Text>
                </TouchableOpacity>
                           
                           <TouchableOpacity
                    onPress={() => props.navigation.navigate('SignInScreen')}
                    style={[styles.signIn, {
                        backgroundColor: '#009387',
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: 'white'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
                        </View>  

                </Animatable.View>

            </View>
            </ScrollView>
        );
    

};  
    export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        paddingTop: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        //marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });