import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../Constants/Colors';

export const SearchBox = ({ value, handler }) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="md-search" size={25} style={styles.searchIcon} />
      <TextInput
        placeholder="search"
        value={value}
        onChangeText={handler}
        style={styles.searchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#f3f3f3',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    color: colors.blue
  },
  searchIcon: {
    marginRight: 5
  },
  searchText: {
    fontSize: 16
  }
});
