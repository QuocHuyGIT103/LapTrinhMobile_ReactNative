import React from 'react';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './components/pages/Start';
import Home from './components/pages/Home';
import AddItem from './components/pages/AddItem';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Bao bọc toàn bộ ứng dụng trong RecoilRoot
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="AddItem" component={AddItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
