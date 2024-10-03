import React, { useState, useCallback } from 'react';
import { Button, TextInput, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

// Màn hình 1: Nhập tên và chuyển sang màn hình 2
function HomeScreen({ navigation }) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Your Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TaskList', { name })}
      >
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

// Màn hình 2: Hiển thị danh sách công việc
function TaskListScreen({ route, navigation }) {
  const { name } = route.params;
  const [tasks, setTasks] = useState([]);

  // Fetch dữ liệu từ API khi màn hình được focus
  useFocusEffect(
    useCallback(() => {
      axios.get('https://66fe70ea2b9aac9c997bf535.mockapi.io/task')
        .then(response => {
          setTasks(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi {name}, Have a great day ahead!</Text>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.task}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddJob')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

// Màn hình 3: Thêm công việc mới
function AddJobScreen({ navigation }) {
  const [job, setJob] = useState('');

  const handleAddJob = () => {
    axios.post('https://66fe70ea2b9aac9c997bf535.mockapi.io/task', { task: job })
      .then(response => {
        navigation.goBack();  // Quay lại TaskList sau khi thêm thành công
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Your Job</Text>
      <TextInput
        style={styles.input}
        placeholder="Input your job"
        value={job}
        onChangeText={setJob}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleAddJob}
      >
        <Text style={styles.buttonText}>FINISH</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TaskList" component={TaskListScreen} />
        <Stack.Screen name="AddJob" component={AddJobScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B0082',
    textAlign: 'center',
    marginBottom: 30,
  },
  greeting: {
    fontSize: 22,
    color: '#4B0082',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#4B0082',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  taskText: {
    fontSize: 18,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#4B0082',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  addButtonText: {
    fontSize: 36,
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 60,
  },
});
