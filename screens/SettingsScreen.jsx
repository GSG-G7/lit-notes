import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

import { MainButton } from '../Components/MainButton';
import { colors } from '../Constants/Colors';
import { withFirebase } from '../Firebase/context';

class SettingsScreen extends Component {
  state = {
    username: '',
    email: ''
  };

  async componentDidMount() {
    const { firebase } = this.props;
    const { uid: userId } = firebase.auth.currentUser;
    try { 
      const userData = await firebase.db
        .collection('users')
        .doc(userId)
        .get();
      const { username, email } = userData.data();
      this.setState({ username, email });
    } catch (error) {
      console.log(error);
    }
  }

  signOutAsync = async () => {
    await this.props.firebase.auth.signOut();
    props.navigation.navigate('Landing');
  };

  render() {
    const { username, email } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Settings</Text>
        <Text style={styles.span}>
          Username: <Text style={styles.name}>{username}</Text>
        </Text>
        <Text style={styles.span}>
          Email: <Text style={styles.name}> {email}</Text>
        </Text>
        <MainButton title="Sign Out" handler={this.signOutAsync} />
      </View>
    );
  }
}

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
  span: {
    fontSize: 20,
    color: colors.gray,
    marginBottom: 20
  },
  name: {
    fontWeight: '700',
    marginBottom: 20,
    color: colors.black
  }
});

export default withFirebase(SettingsScreen);
