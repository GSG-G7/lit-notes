import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';

import { withFirebase } from '../Firebase/context';
import { SubButton } from '../Components/SubButton';
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
      console.log(error);
      this.setState({ error });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>LITNotes</Text>
        <Text style={styles.about}>A place to keep your notes</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#f3f3f3"
          onChangeText={text => this.handleTextChange(text, 'email')}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#f3f3f3"
          secureTextEntry={true}
          onChangeText={text => this.handleTextChange(text, 'password')}
        />
        <SubButton title="Sign In" handler={this.handleSubmit} />
        <TouchableWithoutFeedback onPress={this.handleMoveSign}>
          <Text style={styles.register}>
            Don't have an account?
            <Text style={styles.signUp}>Sign Up</Text>
          </Text>
        </TouchableWithoutFeedback>
        {error && <Text style={styles.error}>{error.message}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.blue,
    justifyContent: 'center'
  },
  heading: {
    fontSize: 52,
    color: '#f3f3f3',
    textAlign: 'center',
    fontFamily: 'open-sans-bold'
  },
  about: {
    fontSize: 16,
    color: '#f1f1f1',
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'open-sans'
  },
  register: {
    marginTop: 20,
    fontSize: 16,
    color: '#f3f3f3',
    textAlign: 'center'
  },
  signUp: {
    fontWeight: '700',
    color: '#f3f3f3'
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#f3f3f3',
    padding: 10,
    fontSize: 16,
    color: '#fff',
    marginBottom: 25,
    borderRadius: 5,
    fontFamily: 'open-sans'
  },
  error: {
    fontSize: 14,
    color: '#242424',
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20
  }
});

export default withFirebase(LandingScreen);
