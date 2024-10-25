import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';

const Venta = () => {
  const [scanning, setScanning] = useState(false);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  // Function to fetch real product data (placeholder for actual API/database call)
  const fetchProductData = (barcode) => {
    // Replace this with your actual product lookup logic
    // Example: Fetch product from API based on barcode
    return {
      name: `Product ${barcode}`,
      price: (Math.random() * 10).toFixed(2), // Random price for demo, replace with actual data
    };
  };

  // Function to handle barcode scanning
  const handleBarCodeScanned = ({ data }) => {
    setScanning(false);

    // Fetch product data based on the barcode
    const newProduct = fetchProductData(data);

    // Update the product list and total
    setProducts([...products, newProduct]);
    setTotal((prevTotal) => (parseFloat(prevTotal) + parseFloat(newProduct.price)).toFixed(2));
  };

  // Function to clear all scanned products and reset the ticket
  const clearProducts = () => {
    Alert.alert(
      "Clear Ticket",
      "Are you sure you want to clear all products?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Clear",
          onPress: () => {
            setProducts([]);
            setTotal(0);
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Venta...</Text>
      </View>

      {/* Cámara */}
      <View style={styles.cameraContainer}>
        {scanning ? (
          <RNCamera
            style={styles.camera}
            onBarCodeRead={handleBarCodeScanned}
            captureAudio={false}
          />
        ) : (
          <View style={styles.cameraPlaceholder} />
        )}
      </View>

      {/* Botón de escaneo */}
      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => setScanning(true)}
      >
        <Text style={styles.buttonText}>Escanear</Text>
      </TouchableOpacity>

      {/* Botón para limpiar productos */}
      {products.length > 0 && (
        <TouchableOpacity
          style={styles.clearButton}
          onPress={clearProducts}
        >
          <Text style={styles.clearButtonText}>Clear Ticket</Text>
        </TouchableOpacity>
      )}

      {/* Ticket */}
      <View style={styles.ticketContainer}>
        <Text style={styles.ticketHeader}>Ticket</Text>
        <View style={styles.ticket}>
          <ScrollView>
            {products.map((product, index) => (
              <Text key={index} style={styles.ticketText}>
                {product.name}: ${product.price}
              </Text>
            ))}
            <Text style={styles.ticketText}>Total: ${total}</Text>
            <Text style={styles.ticketText}>IVA: ${(total * 0.16).toFixed(2)}</Text>
            <Text style={styles.ticketText}>Subtotal: ${(total * 0.84).toFixed(2)}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Venta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae9e9', // Fondo claro rosado
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    backgroundColor: '#ff4d4d', // Fondo rojo
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  cameraContainer: {
    width: '90%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd', // Fondo gris claro cuando no está en uso la cámara
    borderRadius: 10,
    marginBottom: 30,
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  cameraPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  scanButton: {
    backgroundColor: '#ff4d4d', // Rojo del botón de escaneo
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  clearButton: {
    backgroundColor: '#333', // Color del botón de limpiar
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  clearButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  ticketContainer: {
    width: '90%',
    alignItems: 'center',
  },
  ticketHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  ticket: {
    backgroundColor: '#d3d3d3',
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  ticketText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 2,
  },
});
