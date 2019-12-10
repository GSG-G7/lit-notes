import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../Constants/Colors';

export const NoteCard = ({ title, desc, timestamp, handler }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTopBar}>
        <Text style={styles.timestamp}>{Date(timestamp).toString().slice(0, 15)}</Text>
        <Ionicons name="md-close-circle" size={24} onPress={handler} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    backgroundColor: '#f3f3f3',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
    marginTop: 25,
    borderRadius: 5
  },
  cardTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  timestamp: {
    color: colors.gray,
    fontSize: 14
  },
  title: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 5
  },
  desc: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10
  }
});
