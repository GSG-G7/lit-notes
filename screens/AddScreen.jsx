import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { MainButton } from '../Components/MainButton';
import { colors } from '../Constants/Colors';
export class AddScreen extends Component {
  state = {
    title: '',
    desc: ''
  };

  handleTitleChange = text => {
    this.setState({ title: text });
  };

  handleDescChange = text => {
    this.setState({ desc: text });
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.noteTitle}
          placeholder="New Note"
          placeholderTextColor={colors.black}
          multiline={true}
          onChangeText={this.handleTitleChange}
        />
        <TextInput
          style={styles.noteDesc}
          placeholder="Write your words here"
          placeholderTextColor={colors.gray}
          multiline={true}
          onChangeText={this.handleDescChange}
        />
        <MainButton title="Save Note" handler={() => alert('saved')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noteTitle: {
    height: 80,
    fontSize: 28,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc'
  },
  noteDesc: {
    minHeight: '70%',
    maxHeight: '70%',
    marginTop: 20,
    fontSize: 20,
    textAlignVertical: 'top'
  }
});
