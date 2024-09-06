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
      <Text style={styles.description}>
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

      <Text style={styles.footerText}>HOW WE WORK?</Text>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFD700', // Màu nền nút
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default App;
