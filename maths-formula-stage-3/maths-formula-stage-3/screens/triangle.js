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

     
  
     <AppHeader/>
   
     <Text style ={styles.text}> TRIANGLE </Text>
     <Image
              source={require('../assets/triangle.jpg')}
              style={styles.iconImage}></Image>
 <Icon name='home' type='font-awesome' color='#696969' size={25}
     onPress={()=>this.props.navigation.navigate("Home")}/>
     
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
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
   text:{
     marginTop:1,
     color : "blue",
     fontSize:30,
     fontWeight:'bold',
   },
   iconImage:{
     width: 350,
     height:350,
    marginLeft:20,
    marginTop:0
   }
})