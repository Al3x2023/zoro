import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useFeed } from '../../Context/FeedContext';
import { styles } from '../../Styles/Styles';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const HolaMundo = () => {

const{feed, changeFeed}=useFeed();

  return (
    <View style={styles.container}>
           
<TouchableOpacity  onPress={() => Linking.openURL('tel:7298906600')}>
  <FontAwesome6 name="phone" size={24} color="white" />
</TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('tel:7298906600')}>
      <Text style={styles.title}>Hola Mundo</Text>
      </TouchableOpacity>


<TouchableOpacity  onPress={()=>changeFeed(1)}>
  <FontAwesome6 name="circle-arrow-left" size={24} color="white" />
</TouchableOpacity>
   

    </View>
  );
}

