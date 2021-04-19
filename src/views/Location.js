 

import React, { useState,useEffect } from "react";
import {StyleSheet, Text ,Platform, Image} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Locations from 'expo-location';

const CustomHotspot = () => {
  const [region, setRegion] = useState({
    latitude: 22.6101002,
    longitude: 88.3841701,
    latitudeDelta: 0.002,
    longitudeDelta: 0.002
  });
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Locations.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Locations.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      showsUserLocation={true}
      followsUserLocation={true}
      //onRegionChangeComplete={region => setRegion(region)}
    >
    
    
      <Marker coordinate={{ latitude: 22.5701002, longitude: 88.41701 }} pinColor="orange">
          
      </Marker>
      <Marker coordinate={{ latitude: 22.6120, longitude: 88.382}} pinColor="orange">
     
      </Marker>
      <Marker coordinate={{ latitude: 24.3120, longitude: 85.482}} pinColor="yellow">
     
      </Marker>
      <Marker coordinate={{ latitude: 24.1120, longitude: 85.482}} pinColor="red">
     
      </Marker>
      <Marker coordinate={{ latitude: 24.3160, longitude: 85.882}} pinColor="yellow">
     
      </Marker>
      <Marker coordinate={{ latitude: 24.578021, longitude: 88.41420 }} pinColor="red">
      
      </Marker>
      <Marker coordinate={{ latitude: 22.577131, longitude: 88.414300 }} pinColor="red">
      
      </Marker>
      <Marker coordinate={{ latitude: 22.569241, longitude: 88.414296 }} pinColor="red">
      
      </Marker>
      
    </MapView>
  
  );
};

export default CustomHotspot;
