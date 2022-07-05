import React from 'react';
import { FlatList,Text,StyleSheet } from 'react-native';

const FlatLists = ()=> {
    const names = [
        {
            name: 'Zakairya'
        },
        {
            name: 'Zak'
        },
        {
            name: 'Grey'
        },
        {
            name: 'Ardent10'
        }
    ]
    return (
        <FlatList  
            horizontal
            inverted
            showsHorizontalScrollIndicator={false}
            style={styles.listStyles} data={names} renderItem={(element)=>{
            console.log(element);           
            return <Text style={styles.textStyle} key={element.index}>{element.item.name}</Text>  
        }}/>
    )
 
}

const styles = StyleSheet.create({
    textStyle:{
      fontSize:40,
      padding:30,
      backgroundColor: 'pink',
      margin:20,
      color:'white'
    },
    listStyles:{
        textAlign:'center',
        margin:20,
        padding:10,
    }
  })

export default FlatLists;