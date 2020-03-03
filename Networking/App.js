import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';

// ==================================================================================
// Fetch 
// 리액트 네이티브에선 네트워킹 도구로 Fetch API 를 제공합니다.
// ==================================================================================

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading : true }
  }

  componentDidMount() {
    return fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading : false,
        dataSource : responseJson.movies
      }, function() {

      });
    })
    .catch((error) => {
      console.error(error);
    })
  }


  // Tip! ActivityIndicator
  // 모바일 앱에서 자주쓰이는것 중에 하나로써 네트워킹이 지연될수도 있는 상황을 대비해 네트워크 통신중이라는 걸 나타내기 위해 사용
  // 빙글빙글 돌아가는거 말하는거임
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex : 1, padding :20}}>
           <ActivityIndicator/>
        </View>
        )
    }

    return (
      <View style={{flex : 1, paddingTop : 20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    )

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
