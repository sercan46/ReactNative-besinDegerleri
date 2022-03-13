// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './src/mainPage';
import FoodDetailPage from './src/foodDetailPage'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'crimson' },
        }} >
        <Stack.Screen name="Home"
          component={MainPage}
          options={{ title: 'Home' }} />
        <Stack.Screen name="detailPage" component={FoodDetailPage}
          options={({ route }) => ({ title: route.params.name })}

        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;