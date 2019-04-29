import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


export default class Tweet extends Component {
    render() {
        return (
            <View style={styles.tweetView}>
                <View style={styles.photoView}> 
                    <Image source={require('../icons/relogio.jpg')} style={styles.photoViewDefinitions}/>
                </View>
                <View style={styles.infosView}>
                    {/* header */}
                    <View style={styles.headerView}>
                        <Text>Profile Name</Text>
                        <Text>Profile Handle + Time</Text>
                    </View>
                    {/* text block */}
                    <View>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View>
                    {/* footer */}
                    <View>
                        <Text>Footer</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tweetView: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "red"
    },
    photoView: {
        paddingLeft: 15,
        paddingRight: 15
    },
    photoViewDefinitions: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    infosView:{
        flexDirection: "column",
        width: 250
    },
    headerView: {
        flexDirection: "row",
        paddingBottom: 5,
        justifyContent: "flex-start"

    },
    textView: {
        // width: 
    }
})