import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import TaskItem from '../../components/TaskItem';
import { getJobs } from '../api';

export default function Home({ navigation, route }) {
  const { userName } = route.params;
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const refreshJobs = async () => {
    const fetchedJobs = await getJobs();
    setJobs(fetchedJobs);
  };

  useEffect(() => {
    refreshJobs();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = jobs.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
      setJobs(filtered);
    } else {
      refreshJobs();
    }
  };

  return (
    <View style={styles.container}>
    <View style = {{flexDirection: 'row'}}>
      <View><Image source={require("../../assets/avata.png")} style = {{width:40, height:40, marginRight: 20}}/></View>
      <View style={styles.header}>
        <Text style={{fontSize: 15, fontWeight: 600}}>Chào {userName}, Chúc bạn một ngày tốt lành!</Text>
      </View>
    </View>
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={jobs}
        renderItem={({ item }) => <TaskItem job={item} refreshJobs={refreshJobs} />}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddItem', { refreshJobs })}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8 },
  header: { marginVertical: 20, alignItems: 'center' },
  searchInput: { borderWidth: 1, borderColor: '#c4c4c4', borderRadius: 12, padding: 10 },
  addButton: { backgroundColor: '#00bdd6', borderRadius: 50, width: 45, height: 45, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 20, right: 20 },
  addButtonText: { color: '#fff', fontSize: 30 },
});
