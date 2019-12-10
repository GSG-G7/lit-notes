import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

import { MainButton } from '../Components/MainButton';
import { colors } from '../Constants/Colors';

export const SettingsScreen = props => {
  const removeItemAsync = async () => {
    await AsyncStorage.removeItem('userToken');
    props.navigation.navigate('Landing');
  };
  return (
    <View>
      <Text style={styles.pageTitle}>Settings</Text>
      <Text style={styles.username}>
        Username: <Text style={styles.name}> Yosef</Text>
      </Text>
      <MainButton title="Sign Out" handler={removeItemAsync} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  pageTitle: {
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 20,
    color: colors.black
  },
  username: {
    fontSize: 20,
    color: colors.gray,
    marginBottom: 200
  },
  name: {
    fontWeight: '700',
    marginBottom: 20,
    color: colors.black
  }
});
