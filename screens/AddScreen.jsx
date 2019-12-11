import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

import { MainButton } from '../Components/MainButton';
import { colors } from '../Constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { withFirebase } from '../Firebase/context';
class AddScreen extends Component {
  state = {
    title: '',
    desc: ''
  };

  handleTextChange = (text, property) => {
    this.setState({ [property]: text });
  };

  handleSave = async () => {
    const { firebase, navigation } = this.props;
    const { title, desc } = this.state;
    try {
      const userId = await firebase.auth.currentUser.uid;
      await firebase.db
        .collection('notes')
        .doc()
        .set({
          title,
          desc,
          timestamp: Date.now(),
          userId
        });
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Ionicons
          name="ios-arrow-back"
          size={25}
          onPress={() => this.props.navigation.goBack()}
          style={styles.icon}
        />
        <TextInput
          style={styles.noteTitle}
          placeholder="New Note"
          placeholderTextColor={colors.black}
          multiline={true}
          onChangeText={text => this.handleTextChange(text, 'title')}
        />
        <TextInput
          style={styles.noteDesc}
          placeholder="Write your words here"
          placeholderTextColor={colors.gray}
          multiline={true}
          onChangeText={text => this.handleTextChange(text, 'desc')}
        />
        <MainButton title="Save Note" handler={this.handleSave} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  icon: {
    backgroundColor: '#fff',
    width: 40,
    textAlign: 'center',
    padding: 7,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color: colors.blue
  },
  noteTitle: {
    height: 80,
    fontSize: 28,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
    marginTop: 10
  },
  noteDesc: {
    minHeight: '60%',
    maxHeight: '70%',
    marginTop: 20,
    fontSize: 20,
    textAlignVertical: 'top'
  }
});

export default withFirebase(AddScreen);
