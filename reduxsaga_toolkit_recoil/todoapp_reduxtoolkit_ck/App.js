import { Text, SafeAreaView, StyleSheet, View, Image} from 'react-native';
import Start from './components/pages/Start'
import Home from './components/pages/Home'
import AddItem from './components/pages/AddItem'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {store} from './components/redux/store';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddItem" component={AddItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
 
});
