import * as React from 'react';
import { Avatar,View,  Title,Text, Paragraph,Linking, ScrollView,StyleSheet } from 'react-native';
import {  Button, Card,Cover } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class DefenseTutorial extends React.Component {   


  render() {  
    return (  
      <ScrollView
          style={{
            flexGrow: 0,
            width: "100%",
            height: "100%",
          }}>
      <View style={styles.container}>  
      <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                
                source={require('./assets/girl.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
                
      <Card>
            
            <Text style={{marginBottom: 10, marginTop: 20 ,color: '#009387',fontSize: 30}} >
           Self-defense is protection</Text>
<Text>Walking home alone and feeling uneasy? Getting a weird vibe from a stranger on the bus? Many of us have been there.</Text>
            
     <Text style={{fontSize: 12,marginTop: 20}}>Below are our top six self-defense moves for women complete with instructions to help you feel empowered to defend yourself in any situation.</Text>
       <Text  style={{fontSize: 20 ,marginTop: 20,color: '#009387'}} >FOCUS ON VULNERABLE AREAS.</Text>
         <Text style={{fontSize: 20 ,marginTop: 10,color: 'red'}}>AVOID THE CHEST AND KNEES.</Text>
        <Text style={{fontSize: 12 ,marginTop: 10}}>Focus on your attacker’s vulnerable places: eyes, nose, throat, and groin. Aim all of the moves below at one or several of these areas to have maximum impact.</Text>
          
     
            </Card>  
            <Card >
            
            <Text style={{marginBottom: 10, marginTop: 20 ,color: '#009387',fontSize: 30}} >
            1. Hammer strike</Text>
<Text h2>Using your car keys is one of the easiest ways to defend yourself. Don’t use your fingernails, because you’re more at risk to injure your hands.
            </Text>
            <Text style={{fontSize: 20 ,marginTop: 20,color: '#009387'}} >To perform:</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>1.Hold your key ring in a tight fist, like holding a hammer, with keys extending from the side of your hand.

2.Thrust downward toward your target.</Text>

<Button
            color='#009387' 
            buttonStyle={{borderRadius: 10,backgroundColor: '#009387', marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop: 20}}
            title='CLICK TO VIEW'
            onPress={() => {
              Linking.openURL('https://thumbs.gfycat.com/FluffyFlashyCockroach-mobile.mp4');
            }} /> 
        </Card>   



        <Card >
            
            <Text style={{marginBottom: 10, marginTop: 20 ,color: '#009387',fontSize: 30}} >
            2. Groin kick</Text>
<Text >If someone is coming at you from the front, a groin kick may deliver enough force to paralyze your attacker, making your escape possible.  </Text>
            <Text style={{fontSize: 20 ,marginTop: 20,color: '#009387'}} >To perform:</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>1.Stabilize yourself as best you can.</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>2.Lift your dominant leg off the ground and begin to drive your knee upward.</Text>

         <Text style={{fontSize: 12 ,marginTop: 10}}>3.Extend your dominant leg, drive hips forward, slightly lean back, and kick forcefully, making contact between your lower shin or ball of your foot and the attacker’s groin area.
</Text>
<Button
            color='#009387' 
            buttonStyle={{borderRadius: 10,backgroundColor: '#009387', marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop: 20}}
            title='CLICK TO VIEW'
            onPress={() => {
              Linking.openURL('https://thumbs.gfycat.com/MetallicBoilingGermanshorthairedpointer-mobile.mp4');
            }} />
            
        </Card> 



        <Card >
            
            <Text style={{marginBottom: 10, marginTop: 20 ,color: '#009387',fontSize: 30}} h1>
            3. Heel palm strike</Text>
<Text h2>This move can cause damage to the nose or throat. To execute, get in front of your attacker as much as is possible. </Text>
            <Text style={{fontSize: 20 ,marginTop: 20,color: '#009387'}} >To perform:</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>1.With your dominant hand, flex your wrist.</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>2.Aim for either the attacker’s nose, jabbing upward from the nostrils, or underneath the attacker’s chin, jabbing upward at the throat.</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>3.Make sure to recoil your strike. Pulling your arm back quickly will help thrust the attacker’s head up and back.
 
</Text>
<Button
            color='#009387' 
            buttonStyle={{borderRadius: 10,backgroundColor: '#009387', marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop: 20}}
            title='CLICK TO VIEW'
            onPress={() => {
              Linking.openURL('https://thumbs.gfycat.com/InnocentImpassionedBrocketdeer-mobile.mp4');
            }} />
            
        </Card> 

        <Card >
            
            <Text style={{marginBottom: 10, marginTop: 20 ,color: '#009387',fontSize: 30}} h1>
            4. Elbow strike</Text>
<Text h2>If your attacker is in close range and you’re unable to get enough momentum to throw a strong punch or kick, use your elbows.   </Text>
            <Text style={{fontSize: 20 ,marginTop: 20,color: '#009387'}} >To perform:</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>1.If you can, stabilize yourself with a strong core and legs to ensure a powerful blow.</Text>

         <Text style={{fontSize: 12 ,marginTop: 10}}>2.Bend your arm at the elbow, shift your weight forward, and strike your elbow into your attacker’s neck, jawline, chin, or temple. These are all effective targets.</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>3.This may cause your attacker to loosen their grip, allowing you to run.</Text>
         <Button
            color='#009387' 
            buttonStyle={{borderRadius: 10,backgroundColor: '#009387', marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop: 20}}
            title='CLICK TO VIEW'
            onPress={() => {
              Linking.openURL('https://thumbs.gfycat.com/FrenchFatGalapagosmockingbird-mobile.mp4');
            }} />
            
        </Card> 
 
        <Card >
            
            <Text style={{marginBottom: 10, marginTop: 20 ,color: '#009387',fontSize: 30}} h1>
            5.Escape from a ‘bear hug attack’</Text>
<Text h2>For cases where the attacker is coming from behind, you’ll want to use this move. Focus on getting low and creating space to free yourself.  </Text>
            <Text style={{fontSize: 20 ,marginTop: 20,color: '#009387'}} >To perform:</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>1.Bend forward from the waist. This shifts your weight forward, making it more difficult for your attacker to pick you up. It also gives you a better angle to throw elbows from side to side to the attacker’s face.</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>2.Turn into the attacker with one of your elbows and continue counterattacking.</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>3.This should give you space to turn fully, using another move to injure the face or strike the groin. With the space these moves have created, you may be able to escape and run away.</Text>
         <Button
            color='#009387' 
            buttonStyle={{borderRadius: 10,backgroundColor: '#009387', marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop: 20}}
            title='CLICK TO VIEW'
            onPress={() => {
              Linking.openURL('https://thumbs.gfycat.com/AmusingGargantuanAnaconda-mobile.mp4');
            }} />
            
        </Card> 
        <Card >
            
            <Text style={{marginBottom: 10, marginTop: 20 ,color: '#009387',fontSize: 30}} h1>
            6. Escape with hands trapped</Text>
<Text h2>If your attacker comes from behind and traps your arms (this is similar to a bear hug, but you won’t be able to move as freely), here’s what to do:  </Text>
            <Text style={{fontSize: 20 ,marginTop: 20,color: '#009387'}} >To perform:</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>1.First reaction should be to stop your attacker’s arms from going higher into a headlock. Shift your hips to one side. This gives an opening for strikes to the groin with open-handed slaps.</Text>

         <Text style={{fontSize: 12 ,marginTop: 10}}>2.Bring your hand back up to your arms and raise your opposite elbow to turn into the wrap. Keep your arms tight to your chest as you’re turning in.</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>3.Stay aggressive with your knees and other counterattacks until you can disengage.</Text>
         <Button
            color='#009387' 
            buttonStyle={{borderRadius: 10,backgroundColor: '#009387', marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop: 20}}
            title='CLICK TO VIEW'
            onPress={() => {
              Linking.openURL('https://thumbs.gfycat.com/SarcasticSilverDouglasfirbarkbeetle-mobile.mp4');
            }} />
            
        </Card> 

        <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                
                source={require('./assets/safety.png')}
                style={styles.logo}
                resizeMode="stretch"
                />


                </View>
                </ScrollView>


      );    ` `
    }  
  }  
  
export default DefenseTutorial;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  logo: {
    paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 30,

     flex: 1,
   width: '100%',
   height: 300,
   borderWidth: 20,
   borderColor:"#009387",
   alignContent:'center',
   
},
  card: {
      flex: 1,
      margin: 15 ,
     //height: 500,
      borderWidth:10,

      borderColor:"black",
      backgroundColor: 'white'
    }
    
 
});