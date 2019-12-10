import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { SearchBox } from './Components/SearchBox';

class App extends Component {
  state = {
    search: ''
  }

  handleSearchChange = (text) => {
    this.setState({ search: text })
  } 

  render() {
    const { search } = this.state;
    
    return (
      <SafeAreaView style={styles.container}>
       <Text>App</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e4',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;