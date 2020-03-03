import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class AlertSample extends Component {

  _pressButton() {
    Alert.alert(
      '알림메시지 타이틀이에여'
      , '난 알림메시지 이에여'
      , [
        {text : '나에게 물어봐', onPress: () => console.log('나에게 물어봐를 눌렀으')}
        , {text : '취소버튼', onPress : () => console.log('취소버튼을 눌렀으')}
        , {text : 'OK! 묻지 말고 더블로가!', onPress : () => console.log('더블로? 진짜?')}
      ]
      , {cancelable : false }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
            style={styles.buttonContainer}
            title="알림을 보여줘"
            onPress={this._pressButton}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
