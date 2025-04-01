import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const IconButton = ({ title, icon, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    flex: 1,
  },
  icon: { width: 20, height: 20, marginRight: 10 },
  text: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default IconButton;
