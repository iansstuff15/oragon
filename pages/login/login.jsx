import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


const Login = () =>  (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>LOGIN</Text>
      <TextInput  placeholder="email" />
      <TextInput  placeholder="password" secureTextEntry={true} textAlign={'center'} />
      <TouchableOpacity>
        <Text>
          CONTINUE
        </Text>
      </TouchableOpacity>
    </View>
  );

export default Login