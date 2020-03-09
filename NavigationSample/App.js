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

/*
1. Header 설정
- options 를 이용하여 헤더 설정이 가능합니다. 
- route 기능을 이용한 헤더 설정도 가능합니다.
ex: options={({route}) => ({title : route.params.name})}

2. Header 스타일 적용
Header 의 스타일 적용에는 크게 3가지의 props 으로 나뉩니다.
headerStyle, headerTintColor, headerTitleStyle
- headerStyle : 헤더의 뷰에 대한 스타일을 지정합니다 (배경색 설정등)
- headerTintColor : 헤더에 들어가는 버튼 또는 타이틀에 대한 글자색 지정이 가능합니다.
- headerTitleStyle : 헤더에 들어가는 글자에 대한 스타일을 지정합니다 (bold, fontFamily ...)
*/

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">      
        <Stack.Screen name="Home" component={HomeScreen} options={{title : 'Overview'}} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
        <Stack.Screen name="ThirdDetail" component={ThirdDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Detail')}></Button>
      <Button title="Update Title" onPress={() => navigation.setOptions({title : 'title is Updated!!'})}></Button>
    </View>
  );
}

function DetailScreen({navigation}) {
  return (
    <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
      <Text>Details Screen</Text>
      {/* 스택의 push 개념 */}
      <Button title="push Third" onPress={() => navigation.push('Third')}></Button>
      {/* 특정 위치로 이동할때 사용 */}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}></Button>
      {/* 스택의 pop개념 */}
      <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
      {/* 스택의 시작점으로 이동 */}
      <Button title="Go back to First Screen in Stack" onPress={() => navigation.popToTop()}></Button>
    </View>
  );
}


// Passing Data Example
function ThirdScreen({navigation}) {
  return (
    <View style={{ flex : 1, alignItems : 'center', justifyContent : 'center'}}>
      <Text>Third Screen</Text>
      <Button 
        title="Go to Details"
        onPress={() => {
          // navigate pass params
          navigation.navigate('ThirdDetail', {
            itemId : 86,
            otherParam: 'sss'
          });
        }}/>
    </View>
  )
}

function ThirdDetailScreen({route, navigation}) {
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Third Detail Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}



export default App;