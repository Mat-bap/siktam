import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MainStackNav from './android/app/navigations/MainStackNav';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={({ route }) => ({ headerShown: false })}>
        <Stack.Screen name='MainStackNav' component={MainStackNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;