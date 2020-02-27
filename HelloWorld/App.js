import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const views = (<View style={{ flex : 1, justifyContent : "center", alignItems  : "center"}}><Text>Hello React Native?</Text></View>);
export default class HelloWorldApp extends Component {
  render() {
    return views;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
