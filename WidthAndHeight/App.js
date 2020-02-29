import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FixedDimensionBasics extends Component {
  render() {
    return FlexView();
  }
}

function WidthAndHeigthView() {
  const tag = (<View>
    <View style={{width : 50, height : 50, backgroundColor : 'powderblue'}}></View>
    <View style={{width : 100, height : 100, backgroundColor : 'skyblue'}}></View>
    <View style={{width : 150, height : 150, backgroundColor : 'steelblue'}}></View>
  </View>);
  return tag;
}

// 꽉찬 화면 구현
function FlexView() {
  const tag = (<View style={{flex : 1}}>
    <View style={{flex : 1, backgroundColor : 'powderblue'}}></View>
    <View style={{flex : 2, backgroundColor : 'skyblue'}}></View>
    <View style={{flex : 3, backgroundColor : 'steelblue'}}></View>
  </View>);
  return tag;
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
