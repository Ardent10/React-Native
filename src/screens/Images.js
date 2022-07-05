import React from 'react'
import { Text, View,Image,StyleSheet } from 'react-native'

const Images = () => {
    return (
      <View style={styles.listStyle}>
        <Text style={styles.textStyle}>This is Image component</Text>
        <Image style={styles.imageStyle} source={require("../../assets/pc.png")}/>
      
      </View>
    )

}

const styles = StyleSheet.create({
    listStyle: {
        height: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textStyle: {
        fontSize:40,
    },
    imageStyle:{
       width:500,
       height:500,

    }
})

export default Images;