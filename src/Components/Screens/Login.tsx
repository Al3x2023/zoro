import React from 'react';
import {styles} from'../../style/styles';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useFeed } from '../../Context/FeedContext';

export const Login = () => {

const {feed, changeFeed}=useFeed()


  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ZORO</Text>
      <Text style={styles.subtitle}>Bienvenido</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Usuario:</Text>
        <TextInput style={styles.input} placeholder="Ingresa tu usuario" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput style={styles.input} placeholder="Ingresa tu contraseña" secureTextEntry />
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>changeFeed(2)}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>changeFeed(0)} style={[styles.button, styles.registerButton]}>
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

