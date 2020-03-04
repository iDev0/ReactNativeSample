// In App.js in a new project
// ==================================================================
// 시작전 필수 확인사항
// npm 설치 (2개의 링크 참고하여 설치 진행)
// https://reactnavigation.org/docs/getting-started
// https://reactnavigation.org/docs/hello-react-navigation
// ==================================================================
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title : 'Overview'}} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Detail')}></Button>
    </View>
  );
}

function DetailScreen({navigation}) {
  return (
    <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
      <Text>Details Screen</Text>
      {/* 스택의 push 개념 */}
      <Button title="again Details" onPress={() => navigation.push('Detail')}></Button>
      {/* 특정 위치로 이동할때 사용 */}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}></Button>
      {/* 스택의 pop개념 */}
      <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
      {/* 스택의 시작점으로 이동 */}
      <Button title="Go back to First Screen in Stack" onPress={() => navigation.popToTop()}></Button>
    </View>
  );
}

export default App;