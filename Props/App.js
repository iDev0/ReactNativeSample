import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// export default class Bananas extends Component {
//   render() {
//     let pic = { uri : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };
//   return (<Image source={pic} style={{width: 193, height: 110}}/>);
//   }
// }

class Greeting extends Component {
  render() {
    return (<View style={{alignItems : 'center'}}><text>Hello {this.props.name}!</text></View>);
  }
}

class TextCell extends Component {
  render() {
    return (
      <view style={{alignItems : 'center'}}>
        <text>Hello My Name is {this.props.name}</text>
        <Image source={this.props.uri} style={{width : 200, height : 300}}></Image>
      </view>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <view style={{alignItems : 'center', top : 50}}>
        <TextCell name='iDev0' uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"></TextCell>
      </view>
    );
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
