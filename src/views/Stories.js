import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native';  
  

class Stories extends React.Component {   
  render() {  
    return (  
      <View>  
        <Text>Bluetooth</Text>  
      </View>  
    );    
  }  
}  
export default Stories;
/*

import React, { useState } from 'react';
import { Text, View, StatusBar,StyleSheet,FlatList, Image, TextInput } from 'react-native';



const Stories = ({ params })=> {

    const [data, setData] = useState(new Array(20).fill({
        id: 1,
        userName: 'Name Surname',
        avatar: './assets/avatar.png', 
        content: 'My story. This is a story example. This is a story example. This is a story example. This is a story example. This is a story example. This is a story example.',
        timeAgo: '1h ago'
    }));

    const _renderItem = ({item}) => {
        return (
            <Card>
                <CardContent>
                    <Header>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Avatar source={{uri: item.avatar}}/>
                        <UserName>{item.userName}</UserName>
                        </View>
                        <Time>{item.timeAgo}</Time> 
                    </Header>
                    <Content>
                        <ContentText>{item.content}</ContentText>
                    </Content>
                    <Footer>
                        <Icon source='./assets/Like-Icon.png'/>
                        <Number>42</Number>
                    </Footer>
                </CardContent>
            </Card>
        )
    }
    const [text, setText] = useState('');
    return (
      <View style={styles.container}> 
      <StatusBar hidden={true}/>
      <Navbar>
          <Icon source = './assets/images.png'/>
          <Title>{'SHARED STORIES'}</Title>
          <Icon source = './assets/search.png'/>
      </Navbar>
      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <InputField>
            <View style={{ flexDirection: 'row', flex: 1}}>
                <TextInput  
                placeholder="Type your story here!"
                onChangeText={text => setText(text)}
                defaultValue={text} 
                style={{
                    flex: 1,
                    color: '#000000',
                    fontSize: 14,
                    lineHeight: 16,
                }}>
                </TextInput>
            </View>
        </InputField>
        <Button>
            <ButtonText>POST</ButtonText>
        </Button>
      </View>
      <FlatList
        keyExtractor={(_, index)=> index}
        data={data}
        renderItem={_renderItem}
      />
    </View>   
);
    
};

const styles = StyleSheet.create({

  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  NavBar: {
  height: 76,

  flexDirection: row,
  justifyContent: space-between,
  alignItems: center
  }

/*
   Number: {
  color: 'gray',
  fontSize: 14,
  lineHeight: 24,
  fontWeight: bold,
  marginRight: 10
   },

   Icon: {
    width: 16,
    height: 16
   },
Title: {
    color: '#2699fb',
    fontSize: 14,
    lineHeight: 24,
    fontWeight: bold
},

InputField: {
    height: 48,
    width: 1325,
   
    marginRight: 120,
    borderWidth: .5,
    borderColor: '#d3d3d3',
    alignItems: stretch
},

 Button: {
    marginTop: 10,
    width: 55,
    borderRadius: 4,
    height: 40,
    backgroundColor: '#2699',
    justifyContent: center,
    alignItems: center
 },

ButtonText: {
    color: '#fff',
    fontWeight: bold,
    fontSize: 10,
    lineHeight: 12
}

   });

 export default Stories;

 */