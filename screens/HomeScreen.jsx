import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { colors } from '../Constants/Colors';
import { SearchBox } from '../Components/SearchBox';
import { NoteCard } from '../Components/NoteCard';
import { withFirebase } from '../Firebase/context';
class HomeScreen extends Component {
  state = {
    search: '',
    notes: []
  };

  componentDidMount() {
    this.getNotes();
  }

  // To get the data every time we navigate to this screen
  componentDidUpdate(prevProps) {
    console.log('another hablaaa');
    const prevParam = prevProps.navigation.getParam('randomValue');
    const param = this.props.navigation.getParam('randomValue');
    if (prevParam !== param) {
      this.getNotes();
    }
  }

  getNotes = async () => {
    const { firebase } = this.props;
    const notes = [];
    try {
      const { uid: userId } = firebase.auth.currentUser;
      const querySnapshot = await firebase.db
        .collection('notes')
        .where('userId', '==', userId)
        // .orderBy('timestamp', 'desc')
        .get();
      querySnapshot.forEach(doc => {
        notes.push({ id: doc.id, ...doc.data() });
      });
      this.setState({ notes });
    } catch (error) {
      console.log(error);
    }
  };

  deleteNote = async id => {
    const { firebase } = this.props;
    const { notes } = this.state;
    try {
      await firebase.db
        .collection('notes')
        .doc(id)
        .delete();
      const newNotes = notes.filter(note => note.id !== id);
      this.setState({ notes: newNotes });
    } catch (error) {
      alert(error.message);
    }
  };

  handleNotesSearch = () => {
    const { search, notes } = this.state;
    const newNotes = notes.filter(note => note.title.includes(search));
    this.setState({ notes: newNotes });
  };

  handleSearchChange = text => {
    this.setState({ search: text });
    if (text.trim() === '') this.getNotes();
    this.handleNotesSearch();
  };

  render() {
    const { search, notes } = this.state;
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.heading}>My Notes</Text>
        <SearchBox value={search} handler={this.handleSearchChange} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {notes.length !== 0 ? (
            notes.map(note => (
              <NoteCard
                key={note.id}
                title={note.title}
                desc={note.desc}
                timestamp={note.timestamp}
                handler={() => this.deleteNote(note.id)}
              />
            ))
          ) : (
            <Text style={styles.noNotes}>You have no notes yet</Text>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20
  },
  heading: {
    fontSize: 36,
    color: '#242424',
    fontWeight: '700',
    marginBottom: 20
  },
  notesCards: {
    marginHorizontal: 20
  },
  noNotes: {
    fontSize: 18,
    color: colors.black,
    textAlign: 'center',
    marginTop: 25
  }
});

export default withFirebase(HomeScreen);
