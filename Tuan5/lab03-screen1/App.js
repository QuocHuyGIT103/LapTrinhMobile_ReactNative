import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();
function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF", paddingLeft: 18 }}>
        
        <View style={{ marginBottom: 9, marginRight: 30 }}>
          <Image
            source={require('./assets/vs_blue.png')} 
            resizeMode={"stretch"}
            style={{ height: 361 }}
          />
          <Text style={{ color: "#000000", fontSize: 15 }}>
            {"Điện Thoại Vsmart Joy 3 - Hàng chính hãng"}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 17, marginRight: 61 }}>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              source={require('./assets/star.png')}
              resizeMode={"stretch"}
              style={{ width: 23, height: 25, marginRight: 2 }}
            />
          ))}
          <Text style={{ color: "#000000", fontSize: 15, flex: 1 }}>
            {"(Xem 828 đánh giá)"}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12, marginRight: 112 }}>
          <Text style={{ color: "#000000", fontSize: 18, fontWeight: "bold", marginRight: 47 }}>
            {"1.790.000 đ"}
          </Text>
          <View style={{ width: 80 }}>
            <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold" , textDecorationLine: 'line-through'}}>
              {"1.790.000 đ"}
            </Text>
            
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16, marginRight: 163 }}>
          <Text style={{ color: "#F90000", fontSize: 12, fontWeight: "bold", marginRight: 9 }}>
            {"Ở ĐÂU RẺ HƠN HOÀN TIỀN"}
          </Text>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{ width: 20, height: 20 }}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#00000075",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 9,
            paddingLeft: 104,
            paddingRight: 20,
            marginBottom: 59,
            marginRight: 10,
            shadowColor: "#00000040",
            shadowOpacity: 0.3,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 4,
            elevation: 4,
          }}
          onPress={() => navigation.navigate('ColorSelectionScreen')}
        >
          <Text style={{ color: "#000000", fontSize: 15, marginRight: 4, flex: 1 }}>
            {"4 MÀU-CHỌN MÀU"}
          </Text>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{ width: 11, height: 14 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#EE0909",
            borderColor: "#C91535",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 16,
            marginRight: 13,
            shadowColor: "#00000040",
            shadowOpacity: 0.3,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 4,
            elevation: 4,
          }}
          onPress={() => alert('Item added to cart!')}
        >
          <Text style={{ color: "#F8F2F2", fontSize: 20, fontWeight: "bold" }}>
            {"CHỌN MUA"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}


function ProductScreen({ navigation }) {
  return (
    <SafeAreaView 
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}>
      <ScrollView  
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
        }}>
        <View 
          style={{
            flexDirection: "row",
            marginBottom: 17,
            marginHorizontal: 4,
          }}>
          <Image
            source={require('./assets/vs_blue.png')}
            resizeMode = {"stretch"}
            style={{
              width: 112,
              height: 132,
              marginRight: 11,
            }}
          />
          <Text 
            style={{
              color: "#000000",
              fontSize: 15,
              marginTop: 20,
              flex: 1,
            }}>
            {"Điện Thoại Vsmart Joy 3\nHàng chính hãng"}
          </Text>
        </View>
        <View 
          style={{
            backgroundColor: "#C4C4C4",
            paddingVertical: 14,
          }}>
          <Text 
            style={{
              color: "#000000",
              fontSize: 18,
              marginBottom: 12,
              marginLeft: 19,
            }}>
            {"Chọn một màu bên dưới:"}
          </Text>
          <View 
            style={{
              height: 80,
              backgroundColor: "#C5F1FA",
              marginBottom: 13,
              marginHorizontal: 135,
              shadowColor: "#00000040",
              shadowOpacity: 0.3,
              shadowOffset: {
                  width: 0,
                  height: 4
              },
              shadowRadius: 4,
              elevation: 4,
            }}>
          </View>
          <View 
            style={{
              height: 80,
              backgroundColor: "#F30D0D",
              marginBottom: 13,
              marginHorizontal: 135,
            }}>
          </View>
          <View 
            style={{
              height: 80,
              backgroundColor: "#000000",
              marginBottom: 13,
              marginHorizontal: 135,
            }}>
          </View>
          <View 
            style={{
              height: 80,
              backgroundColor: "#234896",
              marginBottom: 34,
              marginHorizontal: 135,
            }}>
          </View>
          <TouchableOpacity 
            style={{
              alignItems: "center",
              backgroundColor: "#1951E291",
              borderColor: "#C91535",
              borderRadius: 10,
              borderWidth: 1,
              paddingVertical: 16,
              marginHorizontal: 17,
              shadowColor: "#00000040",
              shadowOpacity: 0.3,
              shadowOffset: {
                  width: 0,
                  height: 4
              },
              shadowRadius: 4,
              elevation: 4,
            }}
            onPress={() => navigation.navigate('Confirmation')}
          >
            <Text 
              style={{
                color: "#F8F2F2",
                fontSize: 20,
                fontWeight: "bold",
              }}>
              {"XONG"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Product Details' }} />
        <Stack.Screen name="ColorSelectionScreen" component={ProductScreen} options={{ title: 'Select Color' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
