import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

import { withFirebase } from '../Firebase/context';
import { MainButton } from '../Components/MainButton';

class LandingScreen extends Component {
  static navigationOptions = {
    headerVisible: false
  };
  setTokenAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>LitNotes</Text>
        <Text style={styles.about}>Lorem ipsum dolor sit amet.</Text>
        <MainButton title="Google Sign In" handler={this.setTokenAsync} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
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

export default withFirebase(LandingScreen);
