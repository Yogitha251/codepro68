
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import TransactionScreen from './screen/TransactionScreen';
import SearchScreen from './screen/SearchScreen';

export default class App extends Component {
  render(){
  return (
   <AppContainer/>
  );
}}
const TabNavigator=createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
})
const AppContainer =createAppContainer(TabNavigator)