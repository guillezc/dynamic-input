import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    height: 40,
    backgroundColor: '#1227E2',
    borderRadius: 20
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold'
  }
})

export default Button;
