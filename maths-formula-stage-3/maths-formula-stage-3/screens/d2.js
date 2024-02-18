import React, {Component} from 'react';
import {Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  Image} from 'react-native';

import {Icon} from "react-native-elements"
  import AppHeader from "../components/AppHeader"

  

export default class D2 extends Component {
  render() {
    return(
       <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
    
    <ImageBackground
          source={require('../assets/math_bg.jpg')}
          style={styles.backgroundImage}>
     <AppHeader/>
     <TouchableOpacity style={styles.button}
     onPress = {()=>this.props.navigation.navigate("SquareShape")}>
     <Text style = {styles.buttonText}> Square </Text>
     </TouchableOpacity>

        <TouchableOpacity style={styles.button}
     onPress = {()=>this.props.navigation.navigate("TriangleShape")}>
     <Text style = {styles.buttonText}> Triangle </Text>
     </TouchableOpacity>

        <TouchableOpacity style={styles.button}
     onPress = {()=>this.props.navigation.navigate("CircleShape")}>
     <Text style = {styles.buttonText}> Circle </Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.button}
     onPress = {()=>this.props.navigation.navigate("RectangleShape")}>
     <Text style = {styles.buttonText}> Rectangle </Text>
     </TouchableOpacity>

     <Icon name='home' type='font-awesome' color='#696969' size={25}
     onPress={()=>this.props.navigation.navigate("Home")}/>
     </ImageBackground>
     
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
   backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width :500,
    height:500
   },
   button : {
     marginLeft : 150,
     width : 200,
     height : 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'lightblue',
    opacity:0.6
   },
  
   buttonText:{
     fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    textAlign:"center",
    alignItems:"center",
    marginTop:10
   }
})