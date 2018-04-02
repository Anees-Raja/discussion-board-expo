import { StackNavigator, TabNavigator } from 'react-navigation'

import FeedScreen from '../screens/FeedScreen'
import LoginScreen from '../screens/LoginScreen'
import LoadingScreen from '../screens/LoadingScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ActivityScreen from '../screens/ActivityScreen'

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
  initialRouteName: 'Feed'
})

const MainNavigator = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
  FeedScreen: {
    screen: MainTabNavigator
  },
  LoadingScreen: {
    screen: LoadingScreen,
  }
}, {
  initialRouteName: 'LoginScreen'
})

export default MainNavigator