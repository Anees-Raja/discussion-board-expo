import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Footer, FooterTab, Button, Text, Badge, Icon } from 'native-base';

import FeedScreen from '../screens/FeedScreen'
import LoginScreen from '../screens/LoginScreen'
import LoadingScreen from '../screens/LoadingScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ActivityScreen from '../screens/ActivityScreen'
import FormEntryScreen from '../screens/FormEntryScreen'
import PostFormScreen from '../screens/PostFormScreen';

const MainNavigator = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
  FeedScreen: {
    screen: FeedScreen,
  },
  ActivityScreen: {
    screen: ActivityScreen
  },
  ProfileScreen: {
    screen: ProfileScreen
  },
  LoadingScreen: {
    screen: LoadingScreen,
  },
  FormEntry: {
    screen: FormEntryScreen,
  },
  PostForm: {
    screen: PostFormScreen,
  }
}, {
  initialRouteName: 'LoginScreen',
  headerMode: 'none',
})

export default MainNavigator