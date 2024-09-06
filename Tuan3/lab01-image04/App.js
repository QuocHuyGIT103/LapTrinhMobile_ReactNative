import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CODE</Text>
      <Text style={styles.subtitle}>VERIFICATION</Text>

      <Text style={styles.description}>
        Enter onetime password sent on {'\n'} ++849092605798
      </Text>
      <View style={styles.codeContainer}>
        {code.map((value, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="number-pad"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleCodeChange(text, index)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
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
  subtitle: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#FFD700', // Màu nền của nút
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default App;
