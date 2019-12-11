import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LandingScreen from '../screens/LandingScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import MainStack from './MainTabNavigation';

const LandingStack = createStackNavigator(
  {
    Login: LandingScreen,
    SignUp: SignUpScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      header: navigation.state.routeName === 'Login' ? null : false
    })
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Main: MainStack,
      Landing: LandingStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
