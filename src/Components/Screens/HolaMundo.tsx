import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFeed } from '../../Context/FeedContext';

export const HolaMundo = () => {

const{feed, changeFeed}=useFeed();

  return (
    <View style={styles.section}>
      <TouchableOpacity onPress={()=>changeFeed(1)}>
      <Text style={styles.text}>Hola Mundo</Text>

      </TouchableOpacity>

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
