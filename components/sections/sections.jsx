import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

import { SliderBox } from "react-native-image-slider-box";

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;



const Sections = ({text, subtext, buttontext}) => {
  const image ={ uri: "https://live.staticflickr.com/3675/12405674394_1e82631bce_b.jpg"}
  
  return(
  <TouchableNativeFeedback> 
    <View style={styles.container}>
      
      <ImageBackground source={image} resizeMode="cover" style={styles.image} >
      <View style={styles.innerContainer}>
      <Text style={styles.heading}>{text}</Text>
      <Text style={styles.text}>{subtext}</Text>
      <TouchableNativeFeedback  >
        <View style={styles.button}> 
        <Text style={styles.buttontext}>{buttontext}</Text>
        </View>
        </TouchableNativeFeedback>
        </View>
      </ImageBackground>
    
    </View>
    </TouchableNativeFeedback>
  );}

  const styles = StyleSheet.create({
    container: {
      alignSelf:"center",
      flex: 1,
      marginTop:10,
      marginBottom:10,
      overflow:"hidden",
      borderRadius:15,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      width: windowWidth*0.9,
     
     
      borderRadius:50,
    },
    heading:{
      color: "white",
      fontSize: 35,
      
      fontWeight: "bold",
     
      marginLeft:10,
    },
    text: {
      color: "white",
      fontSize: 10,
      
      fontWeight: "bold",
   
      marginLeft:10,
    },
    button:{
      backgroundColor:"#037ffc",
      color:"white",
      padding:7,
      width: 100,
      borderRadius: 25,
      marginLeft:30,
      marginTop:10,
      marginBottom:30,
      
    },
    buttontext:{
      color: "white",
      fontSize: 10,
      
      fontWeight: "bold",
      textAlign: "center",
    },
    innerContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,50,0.5)',
      justifyContent:"flex-end",
    },
  });
  

export default Sections