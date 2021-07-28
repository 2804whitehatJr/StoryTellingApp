import React from 'react';
import {Component} from 'react-native';
import{ Text, View, StyleSheet} from 'react native';

export default class CreateStory extends Component{
    render(){
        return(
           <View style={{flex:1, justifyContent:"center", alignItms: 'center'}}>
               <Text> CREATE STORY </Text>
           </View>
        )
    }
}