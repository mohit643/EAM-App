// DynamicButton.js
import React from 'react';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DynamicButton = ({ text, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity style={[styles.button,backgroundColor={backgroundColor}]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // backgroundColor: backgroundColor,
    padding: 10,
    // margin: 5,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 20
  },
});

export default DynamicButton;
