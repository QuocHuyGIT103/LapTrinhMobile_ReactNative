import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />

      <Text style={styles.title}>GROW YOUR BUSINESS</Text>
      
      <Text style={styles.subtitle}>
        We will help you to grow your business using online server
      </Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AEEF', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#FFD700', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default App;
