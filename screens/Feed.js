import React from 'react';
import {Component} from 'react-native';
import{ Text, View, StyleSheet} from 'react native';

export default class Feed extends Component{
    render(){
        return(
           <View style={{flex:1, justifyContent:"center", alignItms: 'center'}}>
               <Text> Feed </Text>
           </View>
        )
    }
}