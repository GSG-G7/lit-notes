import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  TouchableWithoutFeedback
} from 'react-native';

import { withFirebase } from '../Firebase/context';
import { MainButton } from '../Components/MainButton';
import { colors } from '../Constants/Colors';

class LandingScreen extends Component {

  setTokenAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };

  handleMoveSign = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>LitNotes</Text>
        <Text style={styles.about}>Lorem ipsum dolor sit amet.</Text>
        <MainButton title="Google Sign In" handler={this.setTokenAsync} />
        <TouchableWithoutFeedback onPress={this.handleMoveSign}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableWithoutFeedback>
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
  },
  signUp: {
    marginTop: 10,
    fontSize: 16,
    color: colors.blue
  }
});

export default withFirebase(LandingScreen);
