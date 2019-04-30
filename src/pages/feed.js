import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native'

import Tweet from './tweet'


export default class Feed extends Component {


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Tweet navigation={this.props.navigation}/>
                    <Tweet navigation={this.props.navigation}/>
                    <Tweet navigation={this.props.navigation}/>
                </ScrollView>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white"
    },
    list:{
        padding: 20
    },
    tweet: {
        flex: 1,
        padding: 5,
        flexDirection: "row",
        backgroundColor: "black"
    }
})