import * as React from 'react';
import {Component} from 'react';
import {Text,View, StyleSheet }  from 'react-native'
import{NavigationContainer }from '@react-navigation/native'
import {CreateBottonTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from'react-native-vectar-icons/ioncons';
import feed from './screens/Feed';
import story from './screens/CreateStory'

const Tab=createBotomTabNavigator()
export default function App(){
  return(
    <NavigationContainer>
      <Tab.navigator
      screenOption ={({route})=>({
        tabBarIcon:({focused, color, size})=>{
          let iconName;
          if(route.name==='Feed')
         {
           icobName=focused
         }
        }
      })}>
        
      </Tab.navigator>
    </NavigationContainer>
  )
}