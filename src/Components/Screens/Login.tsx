import React from 'react';
import {styles} from'../../Styles/Styles';
import {
  BackHandler,
  Linking,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useFeed } from '../../Context/FeedContext';

export const Login = () => {

const {feed, changeFeed}=useFeed()


  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ZORO</Text>
      <Text style={styles.subtitle}>Bienvenido</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Usuario</Text>
        <TextInput style={styles.input}     placeholderTextColor='#cf111f'  placeholder="Ingresa tu usuario" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input}     placeholderTextColor='#cf111f' placeholder="Ingresa tu contraseña" secureTextEntry />
      </View>

      <TouchableOpacity style={styles.buttonwhite} onPress={()=>changeFeed(2)}>
        <Text style={styles.buttontextred}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>changeFeed(0)} style={[styles.button, styles.registerButton]}>
        <Text style={styles.buttontext}>Registrar</Text>
      </TouchableOpacity>

      <View style={styles.iconContainer}>
    
<TouchableOpacity style={styles.iconButton} onPress={() => Linking.openURL('tel:7298906600')}>
  <FontAwesome6 name="phone" size={24} color="white" />
</TouchableOpacity>
<TouchableOpacity style={styles.iconButton} onPress={() => BackHandler.exitApp()}>
  <FontAwesome6 name="door-open" size={24} color="white" />
</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

