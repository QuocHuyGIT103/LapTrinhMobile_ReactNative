import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity } from "react-native";

export default ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF", paddingLeft: 18 }}>
        {/* Product Image and Details */}
        <View style={{ marginBottom: 9, marginRight: 30 }}>
          <Image
            source={{ uri: './assets' }}
            resizeMode={"stretch"}
            style={{ height: 361 }}
          />
          <Text style={{ color: "#000000", fontSize: 15 }}>
            {"Điện Thoại Vsmart Joy 3 - Hàng chính hãng"}
          </Text>
        </View>

        {/* Rating Section */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 17, marginRight: 61 }}>
          {/* Placeholder for Star Ratings */}
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{ width: 23, height: 25, marginRight: 2 }}
            />
          ))}
          <Text style={{ color: "#000000", fontSize: 15, flex: 1 }}>
            {"(Xem 828 đánh giá)"}
          </Text>
        </View>

        {/* Price Section */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12, marginRight: 112 }}>
          <Text style={{ color: "#000000", fontSize: 18, fontWeight: "bold", marginRight: 47 }}>
            {"1.790.000 đ"}
          </Text>
          <View style={{ width: 80 }}>
            <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold" }}>
              {"1.790.000 đ"}
            </Text>
            <View style={{ position: "absolute", top: 6, left: -6, width: 92, height: 1, backgroundColor: "#000000" }} />
          </View>
        </View>

        {/* Discount and Button Section */}
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

        {/* Color Selection Button */}
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

        {/* Buy Now Button */}
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
};
