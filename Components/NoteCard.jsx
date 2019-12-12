import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../Constants/Colors';

export const NoteCard = ({ title, desc, timestamp, handler }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTopBar}>
        <Text style={styles.timestamp}>{Date(timestamp).toString().slice(0, 15)}</Text>
        <Ionicons name="md-close" size={24} onPress={handler} />
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
      width: 5,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 100,
    elevation: 5,
    marginTop: 25,
    borderRadius: 4,
    minHeight: 150,
    zIndex: 1,
    borderWidth: 0.5,
    borderColor: '#ccc'
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
    marginTop: 5,
    fontFamily: 'open-sans-bold'
  },
  desc: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
    fontFamily: 'open-sans'
  }
});
