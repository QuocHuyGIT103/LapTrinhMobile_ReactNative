import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsRequest, deleteJobRequest } from '../../redux/jobSlice';

const Item = ({ job, handleDelete }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderRadius: 20, backgroundColor: '#c4c4c4', margin: 5, height: 40 }}>
      <Image source={require('../../assets/tick.png')} />
      <Text style={{ fontWeight: '700', paddingVertical: 10 }}>{job.title}</Text>
      <TouchableOpacity onPress={() => handleDelete(job.id)}>
        <Text style={{ color: 'red' }}>Del</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Home({ route, navigation }) {
  const { userName } = route.params;
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.list);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchJobsRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteJobRequest(id));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/back.png')} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Image source={require('../../assets/avata.png')} style={{ width: 40, height: 40 }} />
          <View style={{ justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: '700' }}>Hi {userName}</Text>
            <Text style={{ fontSize: 13 }}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', borderWidth: 1, height: 35, alignItems: 'center', padding: 10, borderRadius: 12, width: '100%', borderColor: '#c4c4c4' }}>
        <Image source={require('../../assets/search.png')} />
        <TextInput placeholder={'Search'} style={{ padding: 10, width: '90%' }} value={searchQuery} onChangeText={handleSearch} />
      </View>

      <View style={{ width: '100%', padding: 10, height: '60%' }}>
        <FlatList
          data={filteredJobs}
          renderItem={({ item }) => <Item job={item} handleDelete={handleDelete} />}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ paddingBottom: 20 }}>
        <TouchableOpacity style={{ backgroundColor: '#00bdd6', alignItems: 'center', borderRadius: '50%', width: 45, height: 45, justifyContent: 'center' }} onPress={() => navigation.navigate('AddItem', { userName: userName })}>
          <Text style={{ fontSize: 40, color: '#ffffff', paddingBottom: 5 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
});
