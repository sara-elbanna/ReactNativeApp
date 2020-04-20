import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Users from './src/Components/Users/Users';
import User from './src/Components/Users/User';
import Home from './src/Components/Notes/Home';
import Category from './src/Components/Notes/Category';

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
        <Stack.Navigator headerMode='none'>
          <Stack.Screen options={{headerTransparent: true}} name='home' component={Home} />
          <Stack.Screen  options={{headerTransparent: true}} name="category" component={Category} />


          <Stack.Screen name="user" component={User} />
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
