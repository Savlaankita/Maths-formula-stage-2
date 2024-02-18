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

  import AppHeader from "../components/AppHeader"

export default class HomeScreen extends Component {
  render() {
    return(
       <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
    
    <ImageBackground
          source={require('../assets/bg.png')}
          style={styles.backgroundImage}>
     <AppHeader/>
     <TouchableOpacity style={styles.button}
     onPress = {()=>this.props.navigation.navigate("D2")}>
     <Text style = {styles.buttonText}> 2-D Shapes </Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.button}
     onPress = {()=>this.props.navigation.navigate("D3")}>
     <Text style = {styles.buttonText}> 3-D Shapes </Text>
     </TouchableOpacity>
     </ImageBackground>
     
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
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
     height : 100,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
    opacity:0.6
   },
   buttonText:{
     fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    textAlign:"center",
    alignItems:"center",
    marginTop:25
   }
})