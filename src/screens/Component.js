import React from "react";
import {Text,StyleSheet } from 'react-native';

const Component = () =>{
  return(
    <Text style={styles.textStyle}>Zakariya is Learning React Native</Text>
  )  
}

// creating the style
const styles = StyleSheet.create({
  textStyle:{
    color: "blue",
    marginTop:20,
    textAlign:'center',
    padding:50,
    backgroundColor:'green',
  }
})

export default Component;