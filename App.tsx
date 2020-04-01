import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Tabs from './src'
import Cities from './src/Components/Cities/Cities';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Cities" component={Cities} />
        </Stack.Navigator>
    </NavigationContainer>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
