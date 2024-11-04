import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';  // Importación de iconos de Expo
import { useSession } from '../../Context/SessionContext';
import { AuthContext } from '../../Context/AuthContext';
import { useFeed } from '../../Context/FeedContext';
import { styles } from '../../Styles/Styles';
import { Tabs } from '../Layout/Tabs';


export const Main = () => {
    const {session, changeSession}=useSession();
    const {feed, changeFeed}=useFeed();
    const { authState, logout } = useContext(AuthContext);

  return (
    <View style={styles.containerwhite}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.titlered}>ZORO</Text>
      </View>

      {/* Botones verticales */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>changeFeed(3)}>
          <Text style={styles.buttontext}>VENTAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>changeFeed(4)}>
          <Text style={styles.buttontext}>PRODUCTOS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>COMPRAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>PROVEEDORES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>USUARIOS</Text>
        </TouchableOpacity>
        <TouchableOpacity   
  onPress={() => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro que deseas salir?",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Salir",
          onPress: () => {
            logout();
            changeSession(0);
            changeFeed(0);
          }
        }
      ]
    );
  }}
>
  <FontAwesome name="sign-out" style={styles.icon} />
</TouchableOpacity>
      </View>
      <Tabs />
    </View>
  );
};

