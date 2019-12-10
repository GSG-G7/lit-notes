import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { colors } from '../Constants/Colors';
import { SearchBox } from '../Components/SearchBox';
import { NoteCard } from '../Components/NoteCard';

import { notes } from '../data';

export class HomeScreen extends Component {
  state = {
    search: ''
  };

  handleSearchChange = text => {
    this.setState({ search: text });
  };

  render() {
    const { search } = this.state;
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.heading}>My Notes</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchBox value={search} handler={this.handleSearchChange} />
          {notes.map(note => (
            <NoteCard
              key={note.id}
              title={note.title}
              desc={note.desc}
              timestamp={note.timestamp}
              handler={() => alert('delete!')}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1
  },
  heading: {
    fontSize: 36,
    color: '#242424',
    fontWeight: '700',
    marginBottom: 20
  },
  notesCards: {
    marginHorizontal: 20
  }
});
