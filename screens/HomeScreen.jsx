import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { compose } from 'recompose';

import { colors } from '../Constants/Colors';
import { SearchBox } from '../Components/SearchBox';
import { NoteCard } from '../Components/NoteCard';

import { withFirebase } from '../Firebase/context';
class HomeScreen extends Component {
  state = {
    search: '',
    notes: []
  };

  async componentDidMount() {
    console.log(this.props.isFocused)

    const { firebase, navigation } = this.props;
    const notes = [];
    try {
      const { uid: userId } = firebase.auth.currentUser;
      console.log(userId);

      const querySnapshot = await firebase.db
        .collection('notes')
        .where('userId', '==', userId)
        .get();
      querySnapshot.forEach(doc => {
        notes.push({ id: doc.id, ...doc.data() });
      });
      this.setState({ notes });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps) {
    console.log(this.props.isFocused());
    if (this.props.isFocused) {
      const { firebase, navigation } = this.props;
      const notes = [];
      try {
        const { uid: userId } = firebase.auth.currentUser;
        console.log(userId);

        const querySnapshot = await firebase.db
          .collection('notes')
          .where('userId', '==', userId)
          .get();
        querySnapshot.forEach(doc => {
          notes.push({ id: doc.id, ...doc.data() });
        });
        this.setState({ notes });
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleSearchChange = text => {
    this.setState({ search: text });
  };

  render() {
    console.log(this.props.navigation.isFocused);

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
                handler={() => alert('delete!')}
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

export default compose(withFirebase, withNavigation)(HomeScreen);
