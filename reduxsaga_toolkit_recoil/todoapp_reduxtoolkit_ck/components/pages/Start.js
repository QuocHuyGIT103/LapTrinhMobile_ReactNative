import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react'

export default function Start({navigation}) {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
        <Image style={{width: 200, height: 200, marginTop: 30, marginBottom: 20}} source={require("../../assets/Image.png")} />
        <Text style={{fontWeight:600, fontSize: 25, color:'#8353E2', marginBottom: 30}}>MANAGE YOUR TASK</Text>
      </View>

      <View style={{flexDirection: 'row', borderWidth: 1, borderRadius: 5, padding: 5, width: 300, height: 40}}>
        <Image style={{width: 35, height: 35, marginRight: 15}} source={require("../../assets/Frame.png")} />
        <TextInput placeholder={"ENTER YOUR NAME"} style={{padding:10}} value={text} onChangeText={(text)=>{setText(text)}}></TextInput>
      </View>

      <View>
        <TouchableOpacity style={{marginTop: 30, borderRadius: 10, backgroundColor: '#00bdd6', width: 190, height: 44, justifyContent: 'center', alignItems: 'center'}} >
          <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 600}} onPress={() => {navigation.navigate("Home", {username: text})}}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
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

});
