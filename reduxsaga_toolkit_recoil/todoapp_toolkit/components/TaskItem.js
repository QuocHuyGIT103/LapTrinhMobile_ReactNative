import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { updateJob, deleteJob } from './api';

export default function TaskItem({ job, refreshJobs }) {
  const [input, setInput] = useState(job.title);

  const handleEdit = async () => {
    await updateJob(job.id, input);
    refreshJobs();
  };

  const handleDelete = async () => {
    await deleteJob(job.id);
    refreshJobs();
  };

  return (
    <View style={styles.itemContainer}>
      <Image source={require('../assets/tick.png')} />
      <TextInput
        style={styles.input}
        placeholder={job.title}
        onChangeText={(text) => setInput(text)}
        value={input}
      />
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleDelete}>
          <Text>Xóa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEdit}>
          <Image source={require('../assets/edit.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#c4c4c4',
    margin: 5,
    height: 40,
  },
  input: {
    fontWeight: '700',
    paddingVertical: 10,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
