import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


const Register = () =>  (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Register</Text>
      <TextInput  placeholder="first name" textAlign={'center'} />
      <TextInput  placeholder="middle name" textAlign={'center'} />
      <TextInput  placeholder="last name" textAlign={'center'} />
      <TextInput  placeholder="address" textAlign={'center'} />
      <TextInput  placeholder="contact number" keyboardType="number-pad" textAlign={'center'} />
      <TextInput  placeholder="password" secureTextEntry={true} textAlign={'center'} />
      <TouchableOpacity>
        <Text>
          CONTINUE
        </Text>
      </TouchableOpacity>
    </View>
  );

export default Register