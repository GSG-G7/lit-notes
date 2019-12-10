import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LandingScreen } from '../screens/LandingScreen';
import { AuthLoadingScreen } from '../screens/AuthLoadingScreen';
import MainStack from './MainTabNavigation';

// const LandingStack = createStackNavigator({ Landing: LandingScreen });

// LandingStack.headerMode = 'none';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Main: MainStack,
      Landing: LandingScreen
    },
    {
      initialRouteName: 'AuthLoading'
    },
  )
);
