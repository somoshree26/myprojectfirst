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

            
<Card >
            
            <Text style={{marginBottom: 10, marginTop: 20 ,color: '#009387',fontSize: 30}} h1>
            <b>Self-defense is protection</b></Text>
<Text ><b>Walking home alone and feeling uneasy? Getting a weird vibe from a stranger on the bus? Many of us have been there.
          </b>  </Text>
         <Text style={{fontSize: 12,marginTop: 20}} >Below are our top six self-defense moves for women complete with instructions to help you feel empowered to defend yourself in any situation.</Text>
         <Text style={{fontSize: 20 ,marginTop: 20,color: '#009387'}} >FOCUS ON VULNERABLE AREAS.</Text>
         <Text style={{fontSize: 20 ,marginTop: 10,color: 'red'}} ><b>AVOID THE CHEST AND KNEES.</b></Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>Focus on your attacker’s vulnerable places: eyes, nose, throat, and groin. Aim all of the moves below at one or several of these areas to have maximum impact.</Text>
          
        </Card> 
        <Card >
            
            <Text style={{marginBottom: 10, marginTop: 20 ,color: '#009387',fontSize: 30}} h1>
            <b>1. Hammer strike</b></Text>
<Text h2>Using your car keys is one of the easiest ways to defend yourself. Don’t use your fingernails, because you’re more at risk to injure your hands.
            </Text>
            <Text style={{fontSize: 20 ,marginTop: 20,color: '#009387'}} >To perform:</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>1.Hold your key ring in a tight fist, like holding a hammer, with keys extending from the side of your hand.
<p>
2.Thrust downward toward your target.</p></Text>
<Button
            color='#009387' 
            buttonStyle={{borderRadius: 10,backgroundColor: '#009387', marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='CLICK TO VIEW'
            onPress={() => this.props.navigation.navigate('Details')} />
            
        </Card> 
        <Card >
            
            <Text style={{marginBottom: 10, marginTop: 20 ,color: '#009387',fontSize: 30}} h1>
            <b>2. Groin kick</b></Text>
<Text h2>If someone is coming at you from the front, a groin kick may deliver enough force to paralyze your attacker, making your escape possible.  </Text>
            <Text style={{fontSize: 20 ,marginTop: 20,color: '#009387'}} >To perform:</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>1.Stabilize yourself as best you can.
<p>2.Lift your dominant leg off the ground and begin to drive your knee upward.</p>

<p>3.Extend your dominant leg, drive hips forward, slightly lean back, and kick forcefully, making contact between your lower shin or ball of your foot and the attacker’s groin area.
</p></Text>
<Button
            color='#009387' 
            buttonStyle={{borderRadius: 10,backgroundColor: '#009387', marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='CLICK TO VIEW'
            onPress={() => {
              Linking.openURL('https://thumbs.gfycat.com/MetallicBoilingGermanshorthairedpointer-mobile.mp4');
            }} />
            
        </Card> 
        <Card >
            
            <Text style={{marginBottom: 10, marginTop: 20 ,color: '#009387',fontSize: 30}} h1>
            <b>3. Heel palm strike</b></Text>
<Text h2>This move can cause damage to the nose or throat. To execute, get in front of your attacker as much as is possible. </Text>
            <Text style={{fontSize: 20 ,marginTop: 20,color: '#009387'}} >To perform:</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>1.With your dominant hand, flex your wrist.<p>
2.Aim for either the attacker’s nose, jabbing upward from the nostrils, or underneath the attacker’s chin, jabbing upward at the throat.</p>
<p>3.Make sure to recoil your strike. Pulling your arm back quickly will help thrust the attacker’s head up and back.
  </p>
</Text>
<Button
            color='#009387' 
            buttonStyle={{borderRadius: 10,backgroundColor: '#009387', marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='CLICK TO VIEW'
            onPress={() => this.props.navigation.navigate('Details')} />
            
        </Card> 
        <Card >
            
            <Text style={{marginBottom: 10, marginTop: 20 ,color: '#009387',fontSize: 30}} h1>
            <b>4. Elbow strike</b></Text>
<Text h2>If your attacker is in close range and you’re unable to get enough momentum to throw a strong punch or kick, use your elbows.   </Text>
            <Text style={{fontSize: 20 ,marginTop: 20,color: '#009387'}} >To perform:</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>1.If you can, stabilize yourself with a strong core and legs to ensure a powerful blow.
<p>
2.Bend your arm at the elbow, shift your weight forward, and strike your elbow into your attacker’s neck, jawline, chin, or temple. These are all effective targets.</p>
<p>3.This may cause your attacker to loosen their grip, allowing you to run.</p></Text>
<Button
            color='#009387' 
            buttonStyle={{borderRadius: 10,backgroundColor: '#009387', marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='CLICK TO VIEW'
            onPress={() => this.props.navigation.navigate('Details')} />
            
        </Card> 
        <Card >
            
            <Text style={{marginBottom: 10, marginTop: 20 ,color: '#009387',fontSize: 30}} h1>
            <b>5.Escape from a ‘bear hug attack’</b></Text>
<Text h2>For cases where the attacker is coming from behind, you’ll want to use this move. Focus on getting low and creating space to free yourself.  </Text>
            <Text style={{fontSize: 20 ,marginTop: 20,color: '#009387'}} >To perform:</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>1.Bend forward from the waist. This shifts your weight forward, making it more difficult for your attacker to pick you up. It also gives you a better angle to throw elbows from side to side to the attacker’s face.<p>
2.Turn into the attacker with one of your elbows and continue counterattacking.</p>
<p>3.This should give you space to turn fully, using another move to injure the face or strike the groin. With the space these moves have created, you may be able to escape and run away.</p></Text>
<Button
            color='#009387' 
            buttonStyle={{borderRadius: 10,backgroundColor: '#009387', marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='CLICK TO VIEW'
            onPress={() => this.props.navigation.navigate('Details')} />
            
        </Card> 
        <Card >
            
            <Text style={{marginBottom: 10, marginTop: 20 ,color: '#009387',fontSize: 30}} h1>
            <b>6. Escape with hands trapped</b></Text>
<Text h2>If your attacker comes from behind and traps your arms (this is similar to a bear hug, but you won’t be able to move as freely), here’s what to do:  </Text>
            <Text style={{fontSize: 20 ,marginTop: 20,color: '#009387'}} >To perform:</Text>
         <Text style={{fontSize: 12 ,marginTop: 10}}>1.First reaction should be to stop your attacker’s arms from going higher into a headlock. Shift your hips to one side. This gives an opening for strikes to the groin with open-handed slaps.<p>

2.Bring your hand back up to your arms and raise your opposite elbow to turn into the wrap. Keep your arms tight to your chest as you’re turning in.</p>
<p>3.Stay aggressive with your knees and other counterattacks until you can disengage.</p></Text>
<Button
            color='#009387' 
            buttonStyle={{borderRadius: 10,backgroundColor: '#009387', marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='CLICK TO VIEW'
            onPress={() => this.props.navigation.navigate('Details')} />
            
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
    );  
    
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