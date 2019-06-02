/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createBottomTabNavigator} from "react-navigation";
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailScreen';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: DetailsScreen,
  
},
{
  tabBarOptions: {
    activeTintColor: 'white',
    labelStyle: {
      fontSize: 20,
    },
    style: {
      backgroundColor: 'blue',
    },
  }
}
);

const App1 = createAppContainer(TabNavigator);

export default class App extends Component {
  render() {
    return (
      <App1/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'red',
    justifyContent:'center',
  },
  
});
