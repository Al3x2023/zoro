import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { useFeed } from '../../Context/FeedContext';

export const Tabs = () => {
    const{feed, changeFeed}=useFeed();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}  onPress={() => changeFeed(2)}>
        <FontAwesome5 name='home' size={24} color='#cf111f' />
        <Text style={styles.tabLabel}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}  onPress={() => changeFeed(3)}>
        <FontAwesome5 name='truck-loading' size={24} color='#cf111f' />
        <Text style={styles.tabLabel}>Compras</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}  onPress={() => changeFeed(3)}>
        <FontAwesome6 name='add' size={24} color='#cf111f' />
        <Text style={styles.tabLabel}>Nuevo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}  onPress={() => changeFeed(2)}>
        <FontAwesome6 name='truck' size={24} color='#cf111f' />
        <Text style={styles.tabLabel}>Ventas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => changeFeed(2)}>
        <FontAwesome6 name='bars' size={24} color='#cf111f' />
        <Text style={styles.tabLabel}>Menú</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  tab: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#333',
    marginTop: 2,
  },
});
