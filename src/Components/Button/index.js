import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#1227E2',
    borderRadius: 20
  },
  title: {
    textAlign: 'center',
    color: '#FFF'
  }
})

export default Button;
