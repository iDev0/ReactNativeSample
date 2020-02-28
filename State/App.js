import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Blink extends Component {

  state = { isShowText : true }

  // 컴포넌트가 마운트 되었을때 
  // 1초간 상태를 변경합니다.
  componentDidMount() {
    setInterval(() => {
      this.setState(previousState => ({isShowText : !previousState.isShowText}));
    }, 1000);
  }


  render() {
    if (!this.state.isShowText) {
      return null;
    }

  return (<Text>{this.props.text}</Text>);
  }
}


export default class BlinkApp extends Component{
  render() {
return (          <View>
      <Blink text='I love to blink' />
      <Blink text='Yes blinking is so great' />
      <Blink text='Why did they ever take this out of HTML' />
      <Blink text='Look at me look at me look at me' />
    </View>);
  }
}



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
