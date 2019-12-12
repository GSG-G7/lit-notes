import React from 'react';
import { View, ActivityIndicator, StatusBar, StyleSheet } from 'react-native';

import { colors } from '../Constants/Colors';

const Loading = () => {
  return (
    <View style={StyleSheet.container}>
      <ActivityIndicator
        style={styles.ActivityIndicator}
        size="large"
        color={colors.blue}
      />
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  ActivityIndicator: {
    marginTop: 300
  }
});

export default Loading;
