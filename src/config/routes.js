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

const MainTabNavigator = TabNavigator({
  Profile: {
    screen: ProfileScreen
  },
  Feed: {
    screen: FeedScreen
  },
  Activity: {
    screen: ActivityScreen
  }
}, {
  tabBarPosition: 'bottom',
  initialRouteName: 'Feed',
  tabBarComponent: props => {
    console.log(props)
    return(
      <Footer>
        <FooterTab>
        <Button
            vertical
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate("Profile")}>
            <Icon name="person" />
            <Text>Profile</Text>
          </Button>
          <Button
            badge
            vertical
            active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate("Feed")}>
            <Badge ><Text>2</Text></Badge>
            <Icon name="infinite" />
            <Text>Feed</Text>
          </Button>
          <Button
            badge
            vertical
            active={props.navigationState.index === 2}
            onPress={() => props.navigation.navigate("Activity")}>
            <Badge ><Text>51</Text></Badge>
            <Icon name="list" />
            <Text>Activity</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
    }
})


const MainNavigator = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
  FeedScreen: {
    screen: MainTabNavigator,
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