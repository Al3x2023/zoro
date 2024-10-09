import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HolaMundo = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.text}>Hola Mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,

  },
  section:{
    textAlign:'center',
    backgroundColor:'pink',
    height:1000,
        alignItems:'center',
        padding:20,
  }
});
