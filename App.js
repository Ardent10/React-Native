// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome Professor</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// Import the basica libraries
import React from "react";
import {Text,StyleSheet,View } from 'react-native';
import Component from "./src/screens/Component";
import FlatLists from "./src/screens/FlatList";
import Images from "./src/screens/Images";

const App = () =>{
  return(
      <View>
        <Text style={styles.textStyle}>Welcome Zakariya</Text>
        <Component/>
        <FlatLists/>
        <Images/>
      </View>
    )  
}

// creating the style
const styles = StyleSheet.create({
  textStyle:{
    color: "green",
    marginTop:20,
    textAlign:'center',
    padding:50,
    backgroundColor:'yellow',
  }
})

export default App;