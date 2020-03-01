// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// ==========================================================================================
// Button And Touchables
// ==========================================================================================
// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     alert('버튼을 눌렀습니다.')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="날 눌러줘"/>
//         </View>

//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="날 눌러줘2"
//             color="#841584"/>
//         </View>

//         <View style={styles.alternativeLayoutButtonContainer}>
//             <Button
//               onPress={this._onPressButton}
//               title="날 눌러줘3"/>

//             <Button
//               onPress={this._onPressButton}
//               title="날 눌러줘4"
//               color="#841584"/>
//         </View>
//       </View>

//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// });


// ==========================================================================================
// Touchables (=Gesture?)
// ==========================================================================================
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
    _onPressButton() {
        alert('You tapped the button!')
    }
    
    _onLongPressButton() {
        alert('You long-pressed the button!')
    }

    render() {
        // ==========================================================================================
        // TouchableHighlight
        // - 일반적으로 버튼이나 링크로 사용할 수 있는곳에 사용가능하며, 클릭시 배경이 어두워짐
        // TouchableOpacity
        // - 버튼을 누르는동안 배경이 보일 수 있도록 버튼의 불투명도를 줄입니다.
        // TouchableWithoutFeedback
        // - tap gesture 처리는 가능하나 제스처 효과가 보이고 싶지 않은경우 사용합니다 (즉, 터치는 가능하나 터치가 되었는지 확인불가)
        // ==========================================================================================
        return (
          <View style={styles.container}>
            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableHighlight</Text>
              </View>
            </TouchableHighlight>
            <TouchableOpacity onPress={this._onPressButton}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableOpacity</Text>
              </View>
            </TouchableOpacity>
            <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableWithoutFeedback
                onPress={this._onPressButton}
                >
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Touchable with Long Press</Text>
              </View>
            </TouchableHighlight>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white'
    }
});