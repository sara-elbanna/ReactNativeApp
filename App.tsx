import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Tabs from './src'
import Users from './src/Components/Users/Users';
import User from './src/Components/Users/User';
import configureStore from './src/store/configureStore';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, connect } from 'react-redux';

const Stack = createStackNavigator();
let store = configureStore();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Users" component={Users} />
        </Stack.Navigator>
    </NavigationContainer>
    </Provider> 
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
