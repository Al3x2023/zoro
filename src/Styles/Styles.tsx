
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d32f2f', // Crimson background color
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  containerwhite: {
    flex: 1,
    backgroundColor: 'whitesmoke', // Crimson background color
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
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
  titlered: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#e60000',
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
    borderColor: '#fff', // Gray border
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#cf111f', // Darker red for buttons
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
  buttonwhite: {
    backgroundColor: 'whitesmoke', // Darker red for buttons
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
  buttontext: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttontextred: {
    color: '#cf111f',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#d32f2f', // Regular red for register button
  },
 
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 20,
  },
  iconButton: {
    padding: 10,
    borderRadius: 30,
  },
  iconText: {
    fontSize: 30,
  },
  scanner: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    margin: 0,
    padding: 0,
  },
  ticketItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 5,
  },

  ticketTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },

  ticketText: {
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
    alignSelf: 'center',
  },

  header: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  
  buttonsContainer: {
    width: '90%',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
},
icon: {
    fontSize: 40,
    fontWeight: '100',
    color: '#db1313',
},
text: {
    color: '#db1313',
    textAlign: 'center',
    marginBottom: 15,
},
texts: {
    color: '#db1313',
    textAlign: 'center',
    marginBottom: 10,
},
form: {
    width: '100%',
    alignItems: 'center',
},
inputredlogin: {
    width: '90%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    backgroundColor:'whitesmoke',
    borderColor: 'whitesmoke',
    borderRadius: 50,
},
item: {
  alignItems: 'center',
  marginBottom: 20,
},
margin: {
  marginTop: 100,
},
loading: {
  marginTop: 20,
},
});

