import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';
import Weather from './Weather';


const API_KEY = "20939baf1d21f5d3dd3f3e548ab7d9ea"

export default class App extends Component {

  state = {
    isLoaded : false,
    error : null,
    temperature : null,
    name : null
  }

  componentDidMount() {
    // 현재 위치정보를 불러오는 것
    navigator.geolocation.getCurrentPosition(position => {
      
      this._getWeahter(position.coords.latitude, position.coords.longitude)

    }, error => {
      this.setState({
        error : error
      })
    })
  }

  _getWeahter = (lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    )
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        temperature : json.main.temp,
        name : json.weather[0].main,
        isLoaded : true
      })
    })
    .catch(error => {
      console.log(error)
    })
  };

  componentDidCatch(error, info) {
    console.log(error)
    console.log(info)
  }


  render() {
    const { isLoaded, error, temperature, name } = this.state
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        {isLoaded ? (
          <Weather weatherName={name} temperature={Math.floor(temperature - 273.15)} />
          ) : (
          <View style={styles.loading}>
              <Text style={styles.loadingText}>Getting the Fucking Weather</Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }

}


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText : {
    color : 'red',
    backgroundColor : 'transparent',
    marginBottom : 40
  },
  loading : {
    flex : 1,
    backgroundColor : '#FDF6AA',
    justifyContent : 'flex-end',
    paddingLeft : 25
  },
  loadingText : {
    fontSize : 34,
    marginBottom : 100
  }
});
