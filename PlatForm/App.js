import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>iDev's Live Coding</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios : {
        backgroundColor : 'tomato'
      },
      android : {
        backgroundColor : 'green'
      }
    })
  },
});
