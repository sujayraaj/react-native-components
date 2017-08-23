import React from 'react';
import { AppRegistry, ListView, StyleSheet, Text, View, Dimensions, TouchableHighlight, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var appWidth = Dimensions.get('window').width; 

function myAlert(){
  Alert.alert('You tapped the button!');
}

export default class Calendar extends React.Component {
  render(){
    return       <View style={{flex: 1}}>
        <View style={{flex: 0.7, backgroundColor: '#1abc9c', flexDirection: 'row', justifyContent: 'center',
        alignItems: 'center'}} >
              <View style={{width: appWidth*0.2,flexDirection: 'row', justifyContent: 'center',
        alignItems: 'center'}}><Text>&#10094;</Text></View>
    <View style={{width: appWidth*0.6,flexDirection: 'row', justifyContent: 'center',
        alignItems: 'center'}}>
      <Text>August 2016</Text>
    </View>
    <TouchableHighlight onPress={myAlert} underlayColor="white">
      <View style={{width: appWidth*0.2,flexDirection: 'row', justifyContent: 'center',
        alignItems: 'center'}}><Text>&#10095;</Text></View>
      
    </TouchableHighlight>

        </View>
        <View style={{flex:0.15, flexDirection: 'row', justifyContent:'space-around', alignItems: 'center', backgroundColor:'#ddd'}}> 
            <Text>Mo</Text>
  <Text>Tu</Text>
  <Text>We</Text>
  <Text>Th</Text>
  <Text>Fr</Text>
  <Text>Sa</Text>
  <Text>Su</Text>

        </View>
        <View style={{flex:0.2, flexDirection: 'row', justifyContent:'space-around', alignItems: 'center', backgroundColor:'#eee'}}> 
           <Text>1</Text>
  <Text>2</Text>
  <Text>3</Text>
  <Text>4</Text>
  <Text>5</Text>
  <Text>6</Text>
  <Text>7</Text>
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
;
  }
}

const styles = StyleSheet.create({
  col : {flexDirection:'row',backgroundColor:'green'},
  cell : {flex:0.5, height:70, backgroundColor:'blue'}
});
