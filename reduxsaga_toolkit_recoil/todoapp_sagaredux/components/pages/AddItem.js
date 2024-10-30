import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJobRequest } from '../../redux/jobSlice';

export default function AddItem({ route, navigation }) {
  const { userName } = route.params;
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const create = () => {
    if (!input) {
      Alert.alert('Error', 'Please fill in the job title field.');
      return;
    }

    dispatch(addJobRequest(input));
    setInput('');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Image source={require('../../assets/avata.png')} style={{ width: 40, height: 40 }} />
          <View style={{ justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: '700' }}>Hi {userName}</Text>
            <Text style={{ fontSize: 13 }}>Have a great day ahead</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/back.png')} />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'space-between', height: '90%', width: '100%' }}>
        <View style={{ alignItems: 'center', justifyContent: 'space-around', height: 150, width: '100%' }}>
          <Text style={{ fontWeight: '700', fontSize: 25 }}>ADD YOUR JOB</Text>
          <View style={{ flexDirection: 'row', borderWidth: 1, height: 35, alignItems: 'center', padding: 10, borderRadius: 10, width: '100%', borderColor: '#c4c4c4' }}>
            <Image source={require('../../assets/task.png')} />
            <TextInput placeholder={'Input your job'} style={{ padding: 10, width: '90%' }} value={input} onChangeText={setInput} />
          </View>
          <TouchableOpacity style={{ backgroundColor: '#00bdd6', borderRadius: 10, width: 120, height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }} onPress={create}>
            <Text style={{ color: '#fff', fontWeight: '400' }}>FINISH ></Text>
          </TouchableOpacity>
        </View>
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
