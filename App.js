import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import Firebase from './Firebase/firebase';
import { FirebaseContext } from './Firebase/context';

import AppNavigation from './navigation/AppNavigation';

class App extends Component {
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
    backgroundColor: '#e3e3e4',
    marginTop: Constants.statusBarHeight
  }
});

export default App;
