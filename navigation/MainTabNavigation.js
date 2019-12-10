import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

import { HomeScreen } from '../screens/HomeScreen';
import { AddScreen } from '../screens/AddScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { colors } from '../Constants/Colors';

export default MainTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Add: AddScreen,
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'md-home';
            break;
          case 'Add':
            iconName = 'md-add';
            break;
          case 'Settings':
            iconName = 'md-settings';
            break;
          default:
            break;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
      tabBarLabel: <View />
    }),
    tabBarOptions: {
      activeTintColor: colors.blue,
      inactiveTintColor: colors.gray
    }
  }
);
