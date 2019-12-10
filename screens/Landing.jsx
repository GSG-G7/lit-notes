import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export const Landing = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LitNotes</Text>
      <Text style={styles.about}>Lorem ipsum dolor sit amet.</Text>
      <TouchableWithoutFeedback onPress={() => alert('clicked')}>
          <Text style={styles.button}>Google Sign In</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
        marginTop: 10,
    },
    button: {
        backgroundColor: '#f3f3f3',
        color: '#242424',
        fontSize: 16,
        padding: 12,
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 20,
        borderRadius: 12
    }
})