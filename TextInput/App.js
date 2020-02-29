import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class PizzaTranslator extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return this.getView();
  }
}

PizzaTranslator.prototype.getView = function () {
  const tags = (
    <View style={{padding : 10}}>
      <TextInput style={{height : 40}} placeholder="Text Here" value={this.state.text} onChangeText={(text) => this.setState({text})}></TextInput>
      <Text style={{padding : 10, fontSize : 40}}>{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}</Text>
    </View>
  );
  return tags;
}

