import { StackNavigator } from 'react-navigation'

import FeedScreen from '../screens/FeedScreen'
import LoginScreen from '../screens/LoginScreen'

const MainNavigator = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
  FeedScreen: {
    screen: FeedScreen,
  }
}, {
  initialRouteName: 'LoginScreen'
})

export default MainNavigator