import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MainButton } from '../Components/MainButton';

export const Landing = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LitNotes</Text>
      <Text style={styles.about}>Lorem ipsum dolor sit amet.</Text>
      <MainButton title="Google Sign In" handler={() => alert('clicked')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  heading: {
    fontSize: 32,
    color: '#242424',
    fontWeight: '700'
  },
  about: {
    fontSize: 16,
    color: '#acacad',
    marginTop: 10
  }
});
