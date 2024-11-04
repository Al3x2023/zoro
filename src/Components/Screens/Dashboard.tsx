import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { useFeed } from '../../Context/FeedContext';

interface Product {
  id: string;
  name: string;
  stock: number;
  reorderLevel: number;
}

const products: Product[] = [
  { id: '1', name: 'Producto A', stock: 20, reorderLevel: 30 },
  { id: '2', name: 'Producto B', stock: 50, reorderLevel: 40 },
  { id: '3', name: 'Producto C', stock: 5, reorderLevel: 10 },
];

export const Dashboard = () => {
  const handleOrder = (productName: string) => {
    Alert.alert('Orden generada', `Se ha generado una orden de reabastecimiento para ${productName}`);
  };

  const { feed, changeFeed } = useFeed();
  const renderProduct = ({ item }: { item: Product }) => {
    const isLowStock = item.stock < item.reorderLevel;

    return (
      <View style={[styles.productContainer, isLowStock ? styles.lowStock : styles.normalStock]}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text>Stock: {item.stock}</Text>
        <Text>Nivel de reorden: {item.reorderLevel}</Text>
        {isLowStock && (
          <Button title="Ordenar ahora" onPress={() => handleOrder(item.name)} />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gestión de Reabastecimiento</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
      />


      <TouchableOpacity onPress={() => changeFeed(2)}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productContainer: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  lowStock: {
    borderColor: 'red',
    backgroundColor: '#ffe6e6',
  },
  normalStock: {
    borderColor: 'green',
    backgroundColor: '#e6ffe6',
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
  },
});

