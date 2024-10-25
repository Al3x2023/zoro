import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFeed } from '../../Context/FeedContext';
const Dashboard = () => {
  const {feed, changeFeed}=useFeed()
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.headerText}>ZORO</Text>
      </View>

      {/* Botones verticales */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>changeFeed(3)}>
          <Text style={styles.buttonText}>VENTAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VENTAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VENTAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VENTAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VENTAS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f0', // Fondo claro rosado
    alignItems: 'center',
    paddingVertical: 50,
  },
  header: {
    backgroundColor: '#ff4d4d', // Fondo rojo
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#e60000',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  buttonsContainer: {
    width: '90%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#d3d3d3', // Gris claro
    width: '100%',
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
