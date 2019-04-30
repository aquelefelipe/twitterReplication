import React, { Component } from 'react'
import { Text, View, FlatList, Image, StyleSheet, Button } from 'react-native'

import Tweet from './tweet'


export default class Feed extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Button title="teste" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#DA552F"
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