import React, { Component } from 'react'
import { Text, View, FlatList, Image, StyleSheet, Button } from 'react-native'


export default class Feed extends Component {

    renderTweets = ({ item }) => (
        <View style={styles.tweet}>
            <View>
                <Image source={require('../icons/relogio.jpg')}/>
            </View>
            <View>
                <View>
                    <Text>Profile Name</Text>
                    <Text>Profile Handle</Text>
                    <Text>Time</Text>
                </View>
                <View>
                    <Text>Tweet Text</Text>
                </View>
                <View>
                    <Image/>
                    <Image/>
                    <Image/>
                </View>
            </View>
        </View>
    )


    render() {
        return (
            <View style={styles.container}>
                {/* <FlatList 
                    contentContainerStyle={styles.list}
                    renderItem={this.renderTweets}
                /> */}
                <Button onPress={this.loadTweets} title="teste" />
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