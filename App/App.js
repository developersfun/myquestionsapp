import React, { Component, useState } from 'react';
import {TouchableOpacity, TextInput, Text, View , Image, StyleSheet, Button, ListView, ScrollView, Linking} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default class MyApp extends Component {

  
  render() {
    return srcGen()
  };
}

function srcGen(){
  return [  
    head(),
    body(),
    feet()
  ]
}

function head(){
  
  return (
    <View style={{flex:1,justifyContent: "center", backgroundColor:"#0A79DF", 
    alignItems: "center"}}>
    {/* <Image 
       source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 200}}
    /> */}
      <Text 
        style={{padding:0,
           fontSize:25,
            color:"#FFF", 
            alignItems: "center",
          justifyContent:'center'}}
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

function body(){

  var peed = ""; 

  return (
    <ScrollView style={{padding: 10, backgroundColor:"#e6f9ff"}} >     
    <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
      <Text 
        style={{fontSize:20, alignItems:'center', justifyContent:"center", textAlignHori:'center'}} >   
        Username
      </Text>
    </View>
      
      <View style={{padding: 10}} > 
       <TextInput
         style={{ height: 40, width: 300, borderColor: '#0A79DF', borderWidth: 1, alignSelf:'center'
         , backgroundColor:"#FFF"}}
        //  onChangeText={text => onChangeText(text)}
        //  value={value}
       />
     </View>

     <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>  
      <Text 
        style={{fontSize:20}}>
        Password
      </Text>
      </View>
      <View style={{padding: 10}} > 
       <TextInput
          secureTextEntry={true}
         style={{ height: 40,
           width: 300,
            borderColor: '#0A79DF',
             borderWidth: 1,
              alignSelf:'center'
              , backgroundColor:"#FFF"
             }}
             onChangeText={(text) => peed={text}}     
        //  onChangeText={text => onChangeText(text)}
        //  value={value}
       />
     </View>

  <Button
  style={{fontSize: 20, color: 'green', padding:20}}
  styleDisabled={{color: 'red'}}
  onPress={() => alert("this.props.peed")}
  title="Submit">
  </Button>

    </ScrollView>
  ); 
}