import React from 'react';
import {styles} from'../../Styles/Styles';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export const Footer = () => {
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>venta</Text>
      <Text style={styles.subtitle}>Bienvenido</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Usuario:</Text>
        <TextInput style={styles.input} placeholder="Ingresa tu usuario" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput style={styles.input} placeholder="Ingresa tu contraseña" secureTextEntry />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.registerButton]}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>📞</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>➡️</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

