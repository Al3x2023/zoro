
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d32f2f', // Crimson background color
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 48,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
      textShadowColor: '#000',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 5,
    },
    subtitle: {
      fontSize: 24,
      color: '#fff',
      marginBottom: 20,
    },
    inputContainer: {
      width: '80%',
      marginBottom: 15,
    },
    label: {
      fontSize: 16,
      color: '#fff',
      marginBottom: 5,
    },
    input: {
      backgroundColor: '#e0e0e0', // Light gray input background
      borderRadius: 10,
      padding: 10,
      fontSize: 16,
      borderColor: '#bdbdbd', // Gray border
      borderWidth: 1,
    },
    button: {
      backgroundColor: '#b71c1c', // Darker red for buttons
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      width: '60%',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
    registerButton: {
      backgroundColor: '#d32f2f', // Regular red for register button
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '40%',
      marginTop: 20,
    },
    iconButton: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 30,
    },
    iconText: {
      fontSize: 24,
    },
  });
  
