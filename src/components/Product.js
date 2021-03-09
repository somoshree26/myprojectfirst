// src/components/Product.js
// src/components/Product.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Home from '../views/Home';

class Product extends React.Component {
    render() {
      return (
        <Card image={{uri: 'https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg'}}>
            
            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
           shoe
            </Text>
            <Text style={styles.price} h4>
                $200
            </Text>
            <Text h6 style={styles.description}>
                added 2h ago
            </Text>
           
            <Button
            color='#ffffff' 
            buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Buy now'
            onPress={() => this.props.navigation.navigate('Details')} />
            
        </Card>
      );
    }
}

const styles = StyleSheet.create({
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    }
});

export default withNavigation(Product);
