import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "./screens/Home"
import D3 from "./screens/d3"
import D2 from "./screens/d2"
import SquareShape from "./screens/square"
import RectangleShape from "./screens/rectangle"
import CircleShape from "./screens/circle"
import TriangleShape from "./screens/triangle"
import Cube Shape from "./screens/cube"
import Cubiod Shape from "./screens/cuboid"
import Sphere Shape from "./screens/sphere"
import Cylinder Shape from "./screens/cylinder"
const Stack = createStackNavigator();

export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
    <Stack.Screen name = "Home" component ={HomeScreen} />
    <Stack.Screen name = "D3" component = {D3} />
    <Stack.Screen name  = "D2" component = {D2} />
    <Stack.Screen name  = "SquareShape" component = {SquareShape} />
    <Stack.Screen name  = "RectangleShape" component = {RectangleShape} />
    <Stack.Screen name  = "CircleShape" component = {CircleShape} />
    <Stack.Screen name  = "TriangleShape" component = {TriangleShape} />
    <Stack.Screen name  = "CubeShape" component = {CubeShape} />
    <Stack.Screen name  = "CuboidShape" component = {CuboidShape} />
    </Stack.Navigator>
</NavigationContainer>
 
  );
}
