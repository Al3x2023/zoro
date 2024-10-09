import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* Cuatro botones en dos filas */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Realizar venta.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Inventario.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Realizar venta.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Realizar venta.</Text>
        </TouchableOpacity>
      </View>

      {/* Gráfico o cuadro simulado */}
      <View style={styles.chartContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Reemplaza con tu gráfico real
          style={styles.chartImage}
        />
      </View>

      {/* Iconos en la parte inferior */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconButton}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7171', // Color de fondo rosa
    alignItems: 'center',
    justifyContent: 'space-between', // Distribuir los elementos
    paddingVertical: 40,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Para que los botones pasen a la siguiente línea
    justifyContent: 'center',
    gap: 10, // Espaciado entre los botones
  },
  button: {
    backgroundColor: '#d3d3d3', // Color gris claro
    padding: 20,
    margin: 10,
    width: 120, // Ancho de los botones
    height: 80, // Altura de los botones
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
  chartContainer: {
    width: 200,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    paddingVertical: 20,
  },
  iconButton: {
    padding: 10,
    backgroundColor: '#ff4d4d', // Un color rojo más oscuro para los iconos
    borderRadius: 30,
  },
});
