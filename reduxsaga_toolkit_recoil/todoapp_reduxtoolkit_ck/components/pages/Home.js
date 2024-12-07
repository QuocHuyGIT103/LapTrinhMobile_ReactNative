import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {fetchJobs, removeJob} from '../redux/slices/todoSlice';
import TaskItem from '../../components/TaskItem';

export default function Home({navigation, route}) {
  const {username} = route.params;
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.todos.jobs);
  const [searchQuery, setSearchQuery] = useState('');


const handleSearch = (query) => {
  setSearchQuery(query);
}

const filteredJobs = jobs.filter((job) =>
  job.title.toLowerCase().includes(searchQuery.toLowerCase())
);

useEffect(() => {
  dispatch(fetchJobs());
}, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row', justifyContent: 'center'}}>
        <Image style ={{width: 40, height: 40}} source={require("../../assets/avatar.png")}/>
        <View style={styles.header}>
          <Text style={{ fontSize: 15, fontWeight: 600 }}>Chào {username}, Chúc bạn một ngày tốt lành!</Text>
        </View>
      </View>

      <View style={{borderWidth: 1, borderRadius: 5, width: 300, height: 40, borderColor: '#c4c4c4', padding: 10}}>
        <TextInput placeholder={'Search'} value={searchQuery} onChangeText={handleSearch}></TextInput>
      </View>

      <FlatList
        data = {filteredJobs}
        renderItem = {({item}) => <TaskItem job={item} refreshJobs={() => dispatch(fetchJobs())} />}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress = {() => navigation.navigate('AddItem')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header: { marginVertical: 20, alignItems: 'center' },
  addButton: { backgroundColor: '#00bdd6', borderRadius: 50, width: 45, height: 45, alignItems: 'center',   justifyContent: 'center', position: 'absolute', bottom: 20, right: 20 },
  addButtonText: { color: '#fff', fontSize: 30 }


});
