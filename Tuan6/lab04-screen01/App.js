import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // For icons like cart

// Sample product data
const data = [
  { id: '1', name: 'Ca nấu lẩu, nấu mì mini...', shop: 'Shop Devang', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1b23bf16a6076904ebae9efc97525c08' },
  { id: '2', name: '1KG KHÔ GÀ BƠ TỎI...', shop: 'Shop LTD Food', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9ab0977e701a3b60212fe42c2e4a5978' },
  { id: '3', name: 'Xe cần cẩu đa năng', shop: 'Shop Thế giới đồ chơi', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2e12f444a97ba9496d459350d8db21cf' },
  { id: '4', name: 'Đồ chơi dạng mô hình', shop: 'Shop Thế giới đồ chơi', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1e16fd49126755d9cbb436502fbcf2e1' },
  { id: '5', name: 'Lãnh đạo giản đơn', shop: 'Shop Minh Long Book', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/71a4c105ff3a7badb5fddce7495e2af4' },
  { id: '6', name: 'Hiểu lòng con trẻ', shop: 'Shop Minh Long Book', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/13aa479de897d65bb302eab27c7a3ed3' },
];

// Main Shop Screen
const ShopScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.shopName}>{item.shop}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon name="cart-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// Cart Screen
const CartScreen = ({ route }) => {
  const { cartItems } = route.params || [];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Giỏ Hàng</Text>
      {cartItems.length === 0 ? (
        <Text>Giỏ hàng trống.</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

// App navigation structure
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Shop" component={ShopScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles optimized for mobile
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e88e5',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    color: '#fff',
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3, 
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 15,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  shopName: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatButton: {
    backgroundColor: '#ff3d00',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
});

export default App;
