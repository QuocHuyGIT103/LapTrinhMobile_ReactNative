import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addJob } from '../redux/slices/todoSlice';

export default function AddItem ({navigation, route}) {
  const username = route.params;
  const [input, setInput] = useState('');
  const dispatch = useDispatch();


  const handleCreate = async () => {
    if (!input) {
      alert('Vui lòng nhập tiêu đề công việc');
      return;
    }
    await dispatch(addJob(input));
    setInput('');
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row', justifyContent: 'center'}}>
        <Image style ={{width: 40, height: 40}} source={require("../../assets/avatar.png")}/>
        <View style={styles.header}>
          <Text style={{ fontSize: 15, fontWeight: 600 }}>Chào {username}, Chúc bạn một ngày tốt lành!</Text>
        </View>
      </View>

      <View>
        <Text style ={{fontSize: 30, fontWeight: 600, marginTop: 50}}>ADD YOUR JOB</Text>
      </View>

      <View style={{borderWidth: 1, borderRadius: 5, backgroundColor: '#fff', flexDirection: 'row', marginTop: 30, padding: 10, marginHorizontal: 5}}>
          <Image source={require('../../assets/add.png')}/>
          <TextInput
            placeholder ='Input your job'
            value = {input}
            onChangeText = {(text => setInput(text))}
          style ={{marginLeft: 10}}></TextInput>
      </View>

      <TouchableOpacity style={{marginTop: 30, borderRadius: 10, backgroundColor: '#00bdd6', width: 190, height: 44, justifyContent: 'center', alignItems: 'center'}}  onPress={handleCreate}>
          <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 600}} onPress={handleCreate}>Finish</Text>
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


});

