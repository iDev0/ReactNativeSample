import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class FlexDirectionBasics extends Component {
  render() {
    return LayoutDirectionView();
  }
}

function FlexDirectionView() {
  const fd = (

    // FlexDirection 
    // 필독사항 !! 모든 컴포넌트의 시작은 왼쪽 > 오른쪽, 위쪽 > 아래쪽
    // ============================================================================================
    // row : 가로로 하위의 컴포넌트들을 나열
    // column : 세로로 하위 컴포넌트들을 나열
    // row-reverse : 가로의 반대 (가로로 시작하며 컴포넌트의 시작이 오른쪽에서 왼쪽으로 향합니다.)
    // column-reverse : 세로의 반대 (세로로 시작하며 컴포넌트의 시작이 아래쪽에서 위쪽으로 향합니다.)
    // ============================================================================================
    
    <View style={{flex : 1, flexDirection : 'column-reverse'}}>
      <View style={{width : 50, height : 50, backgroundColor : 'powderblue' }}></View>
      <View style={{width : 50, height : 50, backgroundColor : 'green' }}></View>
      <View style={{width : 50, height : 50, backgroundColor : 'red' }}></View>
    </View>
  );
  return fd;
}

function LayoutDirectionView() {
  const fd = (

    // LayoutDirection 종류
    // ============================================================================================
    // JustifyContent : [flex-start, center, flex-end, space-between, space-around]
    // AlignItems : [stretch, flex-start, flex-end, center, baseline]
    // ============================================================================================

    <View style={{flex : 1, flexDirection : 'column-reverse', justifyContent : 'center', alignItems : 'stretch'}}>
      <View style={{width : 50, height : 50, backgroundColor : 'powderblue' }}></View>
      <View style={{width : 50, height : 50, backgroundColor : 'green' }}></View>
      <View style={{width : 50, height : 50, backgroundColor : 'red' }}></View>
    </View>
  );
  return fd;
}

