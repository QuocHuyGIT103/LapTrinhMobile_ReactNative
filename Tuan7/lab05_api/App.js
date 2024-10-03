import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);            // Dữ liệu từ API
  const [editId, setEditId] = useState(null);      // Lưu trữ ID của record đang chỉnh sửa
  const [newName, setNewName] = useState('');      // Lưu trữ tên mới khi chỉnh sửa
  const [addName, setAddName] = useState('');      // Lưu trữ tên khi thêm bản ghi mới
  const [showData, setShowData] = useState(false); // Kiểm soát việc hiển thị dữ liệu
  const [showAddForm, setShowAddForm] = useState(false); // Kiểm soát việc hiển thị form thêm mới
  const apiURL = 'https://66fc90c6c3a184a84d1754f7.mockapi.io/user'; 

  const fetchData = async () => {
    try {
      const response = await axios.get(apiURL);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Thêm 1 record mới với tên từ `addName`
  const addRecord = async () => {
    if (addName.trim() === '') {
      alert('Please enter a name!');
      return;
    }
    try {
      const newRecord = { name: addName };
      await axios.post(apiURL, newRecord);
      setAddName(''); // Xóa nội dung trong input sau khi thêm thành công
      fetchData(); // Gọi lại API để re-render nếu dữ liệu đang được hiển thị
      setShowAddForm(false); // Ẩn form sau khi thêm
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  // Sửa 1 record
  const editRecord = async (id) => {
    try {
      const updatedRecord = { name: newName };
      await axios.put(`${apiURL}/${id}`, updatedRecord);
      setEditId(null); // Sau khi chỉnh sửa xong, đặt lại editId
      setNewName('');  // Xóa nội dung nhập sau khi lưu
      fetchData();     // Gọi lại API để re-render nếu dữ liệu đang được hiển thị
    } catch (error) {
      console.error('Error editing record:', error);
    }
  };

  // Xóa 1 record
  const deleteRecord = async (id) => {
    try {
      await axios.delete(`${apiURL}/${id}`);
      fetchData(); // Gọi lại API để re-render nếu dữ liệu đang được hiển thị
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  // Render danh sách
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {editId === item.id ? (
        <TextInput
          style={styles.input}
          value={newName}
          onChangeText={setNewName}
          placeholder="Enter new name"
        />
      ) : (
        <Text style={styles.itemText}>{item.name}</Text>
      )}
      <View style={styles.buttonGroup}>
        {editId === item.id ? (
          <Button title="Save" onPress={() => editRecord(item.id)} />
        ) : (
          <Button title="Edit" onPress={() => {
            setEditId(item.id);
            setNewName(item.name); // Đặt tên hiện tại vào input
          }} />
        )}
        <Button title="Delete" onPress={() => deleteRecord(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button 
        title="Add New Record" 
        onPress={() => setShowAddForm(true)}  // Hiển thị form khi nhấn nút "Add New Record"
      />

      {showAddForm && ( // Hiển thị TextInput và nút "Add Record" khi showAddForm là true
        <View>
          <TextInput
            style={styles.input}
            value={addName}
            onChangeText={setAddName}
            placeholder="Enter name to add"
          />
          <Button 
            title="Add Record" 
            onPress={addRecord} 
          />
        </View>
      )}
      
      <Button 
        title="Display Records" 
        onPress={() => {
          fetchData();
          setShowData(true);  // Sau khi nhấn nút, hiển thị dữ liệu
        }} 
      />
      
      {showData && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
  itemText: {
    flex: 1, // Chiếm không gian bên trái
    fontSize: 16,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Căn chỉnh các nút về bên phải
    gap: 10, // Khoảng cách giữa các nút
  },
});

export default App;
