import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';

import Firebase from './Firebase/firebase';
import { FirebaseContext } from './Firebase/context';

import AppNavigation from './navigation/AppNavigation';

class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/Fonts/OpenSans-SemiBold.ttf')
    });
  }
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <View style={styles.container}>
          <AppNavigation />
        </View>
      </FirebaseContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginTop: Constants.statusBarHeight
  }
});

export default App;
