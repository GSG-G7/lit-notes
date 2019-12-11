import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';

import { withFirebase } from '../Firebase/context';
import { MainButton } from '../Components/MainButton';
import { colors } from '../Constants/Colors';

class LandingScreen extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };

  handleMoveSign = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleTextChange = (text, property) => {
    this.setState({ [property]: text });
  };

  handleSubmit = async () => {
    const { firebase } = this.props;
    const { email, password } = this.state;
    try {
      await firebase.auth.signInWithEmailAndPassword(email, password);
      this.props.navigation.navigate('Main');
    } catch (error) {
      console.log(error)
      this.setState({ error });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>LitNotes</Text>
        <Text style={styles.about}>Lorem ipsum dolor sit amet.</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => this.handleTextChange(text, 'email')}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => this.handleTextChange(text, 'password')}
        />
        <MainButton title="Sign In" handler={this.handleSubmit} />
        <TouchableWithoutFeedback onPress={this.handleMoveSign}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableWithoutFeedback>
        {error && <Text>{error.message}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#aaa',
    padding: 10,
    fontSize: 16,
    color: colors.black,
    marginBottom: 25,
    borderRadius: 5
  }
});

export default withFirebase(LandingScreen);
