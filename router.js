import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './home';
import Business from './business';

const Router = createStackNavigator({
  Home: { screen: Home },
  Business: { screen: Business },
});

export default createAppContainer(Router);