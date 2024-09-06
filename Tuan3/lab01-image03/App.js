import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      <Text style={styles.title}>FORGET PASSWORD</Text>

      <Text style={styles.description}>
        Provide your account's email for which you want to reset your password
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC', // Màu nền xanh nhạt
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  input: {
    height: 40,
    flex: 1,
  },
  button: {
    backgroundColor: '#FFD700', // Màu nền của nút
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default App;
