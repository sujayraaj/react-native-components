import React from 'react';
import { AppRegistry, ListView, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render(){
    return <Text>Hello World</Text>;
  }
}

const styles = StyleSheet.create({
  grid: {flex:1, flexDirection:'column',backgroundColor:'grey',paddingTop:50},
  col : {flexDirection:'row',backgroundColor:'green'},
  cell : {flex:0.5, height:20, backgroundColor:'blue'}
});
