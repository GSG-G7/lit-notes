import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';

import { colors } from '../Constants/Colors';

export const SubButton = ({ title, handler }) => {
  return (
    <TouchableWithoutFeedback onPress={handler}>
      <Text style={styles.button}>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f3f3f3',
    color: colors.blue,
    fontSize: 16,
    padding: 12,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20,
    borderRadius: 12
  }
});
