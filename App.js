import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import { HomeScreen } from './screens/HomeScreen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
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
