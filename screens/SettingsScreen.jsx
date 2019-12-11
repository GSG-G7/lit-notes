import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

import { MainButton } from '../Components/MainButton';
import { colors } from '../Constants/Colors';
import { withFirebase } from '../Firebase/context';

const SettingsScreen = props => {
  const signOutAsync = async () => {
    await props.firebase.auth.signOut();
    props.navigation.navigate('Landing');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Settings</Text>
      <Text style={styles.username}>
        Username: <Text style={styles.name}> Yosef</Text>
      </Text>
      <MainButton title="Sign Out" handler={signOutAsync} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
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

export default withFirebase(SettingsScreen);
