import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './pages/home/home';
import AboutUs from './pages/about-us/about-us';
import CaramoanHistory from './pages/caramoan-history/caramoan-history';
import Profile from './pages/profile/profile';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
    
    <Tab.Navigator tabBarStyle={{backgroundColor:"#0c0e24"}}>
      <Tab.Screen name="Home" component={HomeScreen}  options={{ headerShown:false }}/>
      <Tab.Screen name="Caramoan History" component={CaramoanHistory} options={{  }}/>
      <Tab.Screen name="About Us" component={AboutUs} options={{ }} />
      <Tab.Screen name="Profile" component={Profile} options={{  }}/>
    </Tab.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48aafa',

  },
});
