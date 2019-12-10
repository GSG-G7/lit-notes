import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import { SettingsScreen } from './screens/SettingsScreen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SettingsScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e4',
    marginTop: Constants.statusBarHeight,
    padding: 20
  }
});

export default App;
