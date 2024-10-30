import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { createJob } from '../api';

export default function AddItem({ navigation, route }) {
  const [input, setInput] = useState('');

  const handleCreate = async () => {
    if (!input) {
      alert('Vui lòng nhập tiêu đề công việc');
      return;
    }
    await createJob(input);
    setInput('');
    route.params.refreshJobs();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style = {{flexDirection: 'row'}}>
      <View><Image source={require("../../assets/avata.png")} style = {{width:40, height:40, marginRight: 20}}/></View>
      <View style={styles.header}>
        <Text style={{fontSize: 15, fontWeight: 600}}>Hi Chúc bạn một ngày tốt lành!</Text>
      </View>
    </View>
      <Text style={styles.title}>Add Your Job</Text>
      <TextInput
        placeholder="Input your job"
        style={styles.input}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleCreate}>
        <Text style={styles.addButtonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#c4c4c4', borderRadius: 8, padding: 10, marginBottom: 20 },
  addButton: { backgroundColor: '#00bdd6', borderRadius: 8, padding: 15, alignItems: 'center' },
  addButtonText: { color: '#fff', fontWeight: 'bold', marginHorizontal: 30 },
});
