import React, { Component, useState } from 'react';
import {TouchableOpacity, TextInput, Text, View , Image, StyleSheet, Button, ListView, ScrollView, Linking} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import { createStackNavigator} from 'react-navigation';


export default function MyApp(){

  const [vari, meth] = useState("User");
  const [value, onChangeText] = React.useState('Useless Fellow');
  const [clr, onChangeColor] = React.useState('#d3f0f5');


  return srcGen();

}

function greetFunc(value){
  var hours = new  Date().getHours()
  var message = "Good Evening " + value + "...!!";
  
  if(hours<6 || hours>19){
    var message = "Good Night " + value + "...!!";
  }
  else if(hours<13 && hours>5){
    var message = "Good Morning " + value + "...!!";
  }
  else if(hours<20 && hours>12){
    var message = "Good Noon " + value + "...!!";
  }
  return message
}

function srcGen(){
  return [  
    head(),
    questions(),
    feet()
  ]
}

function head(){
  return (
    <View style={{padding: 10}} >     
        <Text 
        style={{padding: 40, fontSize:25, backgroundColor:"#0A79DF", color:"#FFF"}}
      >THE DEVELOPERS FUN</Text>
    </View>
  ); 
}
function feet(){
  return (
    <View style={{padding: 10}} >     
        <Text 
        style={{fontSize:20}}
      >Follow Us on: </Text>
      <Text
            onPress = { ()=>{
              Linking.openURL('https://www.facebook.com/thedevelopersfun')
            }}
            style={{fontSize:20, color:"#0A79DF"}}
          > Facebook</Text>
      <Text
            onPress = { ()=>{
              Linking.openURL('https://www.youtube.com/watch?v=Ak39XHvrXic&list=PLYJfgWU8zzUbROGZH8k26FiIBKFMi2GkF')
            }}
            style={{fontSize:20, color:"#BA2F16"}}
          > Youtube</Text>
      <Text
            onPress = { ()=>{
              Linking.openURL('https://www.instagram.com/thedeveloperfun')
            }}
            style={{fontSize:20, color:"#FF4848"}}
          > Instagram</Text>
    </View>
  ); 
}

function questions(){
  return [
      <View style={{padding: 10}} >     
        <Text 
        style={{padding: 20, fontSize:25, color:"#1287A5"}}
      >Java Questions:</Text>
    </View>,
    list()
  ];

}
function list(){
  return (
    <ScrollView>

    <View style={{padding: 10}} >     
      <Text 
        style={{padding: 10, fontSize:20}}
        onPress={() => Linking.openURL("https://www.youtube.com/watch?v=fL_lTlLO6SA")}
      >Q1 : Find kth node from the end of the Linked List.</Text>
      <Text 
        style={{padding: 10, fontSize:20}}
        onPress={() => alert("Q2 Clicked")}
      >Q2 : How is HashMap Implemented in Java.</Text>
        <Text 
        style={{padding: 10, fontSize:20}}
        onPress={() => alert("Q2 Clicked")}
      >Q2 : How is HashMap Implemented in Java.</Text>
        <Text 
        style={{padding: 10, fontSize:20}}
        onPress={() => alert("Q2 Clicked")}
      >Q2 : How is HashMap Implemented in Java.</Text>
        <Text 
        style={{padding: 10, fontSize:20}}
        onPress={() => alert("Q2 Clicked")}
      >Q2 : How is HashMap Implemented in Java.</Text>
        <Text 
        style={{padding: 10, fontSize:20}}
        onPress={() => alert("Q2 Clicked")}
      >Q2 : How is HashMap Implemented in Java.</Text>
        <Text 
        style={{padding: 10, fontSize:20}}
        onPress={() => alert("Q2 Clicked")}
      >Q2 : How is HashMap Implemented in Java.</Text>
        </View>
    </ScrollView>


  //   <TabViewVertical
  //   initialLayout={initialLayout}
  //   renderTabBar={this._renderTabs}
  //   style={styles.container}
  //   navigationState={this.state}
  //   renderScene={this._renderScene}
  //   onIndexChange={this._handleIndexChange}
  // />
  ); 
}
