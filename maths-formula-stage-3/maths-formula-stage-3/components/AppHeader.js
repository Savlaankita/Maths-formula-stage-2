import React, { Component } from 'react';
import { Text,Button,View,TouchableOpacity,StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return(
      <View>
      <Text style = {styles.header} > 
       Math Formula Finder
      </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    fontSize:25,
    fontWeight:"Bold",
    color:"Black",
    textAlign:"center",
  backgroundColor:"grey",
  padding:35
  }
})