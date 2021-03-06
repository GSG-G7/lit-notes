import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
import SettingsScreen from '../screens/SettingsScreen';
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
        let iconName, style;
        switch (routeName) {
          case 'Home':
            iconName = 'md-home';
            break;
          case 'Add':
            iconName = 'md-add';
            style = {
              backgroundColor: colors.blue,
              padding: 5,
              paddingHorizontal: 12,
              color: '#fff',
              borderRadius: 5
            };
            break;
          case 'Settings':
            iconName = 'md-settings';
            break;
          default:
            break;
        }
        return (
          <Ionicons name={iconName} size={25} color={tintColor} style={style} />
        );
      },
      tabBarLabel: <View />,
      tabBarVisible: navigation.state.routeName === 'Add' ? false : true
    }),
    tabBarOptions: {
      activeTintColor: colors.blue,
      inactiveTintColor: colors.gray
    }
  }
);
