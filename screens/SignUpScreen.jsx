import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

import { withFirebase } from '../Firebase/context';
import { MainButton } from '../Components/MainButton';
import { colors } from '../Constants/Colors';

class SignUpScreen extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    error: null
  };

  handleSubmit = async () => {
    try {
      const { firebase } = this.props;
      const { username, email, password } = this.state;
      const {
        user: { uid: userId }
      } = await firebase.auth.createUserWithEmailAndPassword(email, password);
      await firebase.db
        .collection('users')
        .doc(userId)
        .set({
          username,
          email
        });
    } catch (error) {
      console.log(error)
      this.setState({ error });
    }
  };

  handleChange = (text, property) => {
    this.setState({ [property]: text });
  };

  render() {
    const { error } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="username"
          onChangeText={text => this.handleChange(text, 'username')}
        />
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={text => this.handleChange(text, 'email')}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={text => this.handleChange(text, 'password')}
        />
        <MainButton title="Continue" handler={this.handleSubmit} />
        {error && <Text style={styles.error}>{error.message}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flex: 1,
    marginTop: 50
  },
  heading: {
    fontSize: 36,
    color: colors.black,
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'open-sans-bold'
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#aaa',
    padding: 10,
    fontSize: 16,
    color: colors.black,
    marginBottom: 25,
    borderRadius: 5,
    fontFamily: 'open-sans'
  },
  error: {
    fontSize: 14,
    color: '#d62424',
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20
  }
});

export default withFirebase(SignUpScreen);
