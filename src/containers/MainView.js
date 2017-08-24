import React from 'react';
import {  Text, TouchableWithoutFeedback, Alert } from 'react-native';
import { history } from '../store'

export default class MainView extends React.Component {
  _onPressButton(){
    console.log('-00-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0');
    Alert.alert('pused');
    console.log(new Date());
    this.props.history.push('/about');
    console.log(this.props);
  }
  render(){
    return <TouchableWithoutFeedback onPress={this._onPressButton.bind(this)}><Text>MainViewMainViewMainViewMainViewMainViewMainViewMainViewMainViewMainViewMainViewMainViewMainViewMainViewMainViewMainViewMainViewMainViewMainViewMainViewMainView</Text></TouchableWithoutFeedback>;
  }
}