import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FileReport from '../views/FileReport';
import AboutUs from '../views/AboutUs';
import DefenseTutorial from '../views/DefenseTutorial';
import Helpline from '../views/Helpline';
import Bluetooth from '../views/Bluetooth';
import Location from '../views/Location';
import Page1 from '../views/Page1';
import Stories from '../views/Stories';
import profile from '../views/profile';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
    
      <Drawer.Navigator initialRouteName="Page1">
      
        <Drawer.Screen name="Home" component={Page1} />
        <Drawer.Screen name="My Profile" component={profile} />
        <Drawer.Screen name="FileReport" component={FileReport} />
        <Drawer.Screen name="Helpline" component={Helpline} />
        <Drawer.Screen name="DefenseTutorial" component={DefenseTutorial} />
        <Drawer.Screen name="Share Location" component={Bluetooth} />
        <Drawer.Screen name="Hotspots" component={Location} />
        <Drawer.Screen name="Stories" component={Stories} />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
        <Drawer.Screen name="Log Out" component={SignInScreen} />
    
      </Drawer.Navigator>
   
    </NavigationContainer>
      
  );
}
