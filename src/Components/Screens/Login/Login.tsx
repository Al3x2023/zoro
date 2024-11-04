import React, { useContext } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator, BackHandler, Linking } from 'react-native';
import { useLogin } from '../../../hooks/useLogin';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';  // Importación de iconos de Expo
import { styles } from '../../../Styles/Styles';
import { AuthContext } from '../../../Context/AuthContext';

export const Login: React.FC = () => {
    const { authState } = useContext(AuthContext);
    const { 
        loading, 
        state, 
        handleInputChange, 
        handleLogin,
        request 
    } = useLogin();

    return (
        <View style={styles.container}>
            <View style={styles.margin} ></View>
            <View style={styles.item}>
            <Text style={[styles.title, {marginTop:-220}]}>ZORO</Text>
            </View>

            <Text style={styles.buttontext}>Iniciar Sesión</Text>
            
            <View style={styles.form}>
                {typeof request === "boolean" && !request && (
                    <Text style={styles.texts}>
                        {'Contraseña incorrecta\nEnvío de datos faltantes'}
                    </Text>
                )}

                <TextInput
                    style={styles.inputredlogin}
                    value={state.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                    placeholder="Correo Electrónico"
                    placeholderTextColor='#cf111f'
                    keyboardType="email-address"
                    editable={!loading}
                />

                <TextInput
                    style={styles.inputredlogin}
                    value={state.password}
                    onChangeText={(value) => handleInputChange('password', value)}
                    placeholder="Contraseña"
                    placeholderTextColor='#cf111f'
                    secureTextEntry
                    editable={!loading}
                />

                <TouchableOpacity style={[styles.buttonwhite, {marginVertical:40}]} onPress={handleLogin} disabled={loading}>
                    <Text style={styles.buttontextred}>Iniciar Sesión</Text>
                    {/* <FontAwesome name="sign-in" size={24} color="black" style={styles.buttontextred} /> */}
                </TouchableOpacity>

                <View style={styles.iconContainer}>
    
    <TouchableOpacity style={styles.iconButton} onPress={() => Linking.openURL('tel:7298906600')}>
      <FontAwesome6 name="phone" size={24} color="white" />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.iconButton, {}]} onPress={() => BackHandler.exitApp()}>
      <FontAwesome6 name="whatsapp" size={24} color="white" />
    </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.iconButton, {marginTop:60}]} onPress={() => BackHandler.exitApp()}>
     {authState.isLoggenIn? <FontAwesome6 name="door-open" size={24} color="white" />:<FontAwesome6 name="door-closed" size={24} color="white" />}
    </TouchableOpacity>  

                {loading && <ActivityIndicator style={styles.loading} size={50} color='white' />}
            </View>
        </View>
    );
};


