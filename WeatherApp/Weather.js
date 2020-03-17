import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from "prop-types";

const weatherCase = {
    Rain : {
        colors : ["#00C6FB", "#005BEA"],
        title : "비 온다아~",
        subtitle : '비오는날에는 파전이지',
        iconName : 'ios-rainy'
    },
    Clear : {
        colors : ["#FEF253", "#FF7300"],
        title : "날이 좋군",
        subtitle : '산책좀 나가볼까?',
        iconName : 'ios-sunny'
    },
    Thunderstorm : {
        colors : ["#00ECBC", "#007ADF"],
        title : "폭풍?",
        subtitle : '무섭다아',
        iconName : 'ios-thunderstorm'
    },
    Clouds : {
        colors : ["#D7D2CC", "#304352"],
        title : "흐려흐려",
        subtitle : '구름이 왜케 많아',
        iconName : 'ios-cloudy'
    },
    Snow : {
        colors : ["#7DE2FC", "#B986E5"],
        title : "와 첫눈이다!",
        subtitle : '눈사람 만들어 갈까?',
        iconName : 'ios-snow'
    },
    Drizzle : {
        colors : ["#89F7FE", "#66A6FF"],
        title : "흐리고 갬",
        subtitle : '곧 맑아져요',
        iconName : 'ios-rainy-outline'
    }
}


function Weather({temperature, weatherName})  {
    return (
        <LinearGradient colors={weatherCase[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCase[weatherName].iconName}></Ionicons>
                <Text style={styles.temp}>{temperature}º</Text>
            </View> 

            <View style={styles.lower}>
    <Text style={styles.title}>{weatherCase[weatherName].title}</Text>
    <Text style={styles.subtitle}>{weatherCase[weatherName].subtitle}</Text>
            </View> 

        </LinearGradient>
    )
}

Weather.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherName : PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    upper : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    temp : {
        fontSize : 48,
        backgroundColor : 'transparent',
        color : 'white',
        marginTop : 10
    },
    lower : {
        flex : 1,
        alignItems : 'flex-start',
        justifyContent : 'flex-end',
        paddingLeft : 70,        
    },
    title : {
        fontSize : 38,
        backgroundColor : 'transparent',
        color : 'white',
        marginBottom : 10,
        fontWeight : '300'
    }, 
    subtitle : {
        fontSize : 24,
        backgroundColor : 'transparent',
        color : 'white',
        marginBottom : 100
    }
});

export default Weather;