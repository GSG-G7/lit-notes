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
      await firebase.auth.createUserWithEmailAndPassword(email, password);
      await firebase.db
        .collection('users')
        .doc()
        .set({
          username,
          email
        });  
    } catch (error) {
      console.log(error);
      this.setState({ error });
    }
  };

  handleChange = (text, property) => {
    this.setState({ [property]: text });
  };

  render() {
    const { email, password, error } = this.state;
    // console.log(email, password)
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
          onChangeText={text => this.handleChange(text, 'password')}
        />
        <MainButton title="Continue" handler={this.handleSubmit} />
        {error && <Text>{error.message}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  heading: {
    fontSize: 36,
    color: '#242424',
    fontWeight: '700',
    marginBottom: 30
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

export default withFirebase(SignUpScreen);
