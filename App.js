import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { Landing } from './screens/Landing';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Landing /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
