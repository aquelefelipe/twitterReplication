import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class Details extends Component {

    render(){
        return (
            <View style={styles.tweetDetailView}>
                {/* Header View */}
                <View style={styles.tweetHeaderView}>
                    <View style={styles.tweetProfileImageBox}>
                        <Image style={styles.tweetProfileImage} source={require('../icons/relogio.jpg')}/>
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>Error 404</Text>
                        <Text style={styles.profileHandler}>@aquelefelipe_</Text>
                    </View>
                </View>
                {/* Text View */}
                <View style={styles.tweetTextBox}>
                    <Text style={styles.tweetText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>

                {/* Data and Time */}
                <View style={styles.footerView}>
                    <Text style={styles.dataTimeText}> 09:30 . 30/04.2019 </Text>
                    <Text style={styles.originText}> Twitter for iPhone </Text>
                </View>
                <View style={styles.drawHorizontalLine}></View>
                <View style={styles.counterTweet}>
                    <Text style={styles.numberCounterText}>2 </Text>
                    <Text style={styles.counterText}>Retweets </Text>
                    <Text style={styles.numberCounterText}>7 </Text>
                    <Text style={styles.counterText}>Curtidas</Text>
                </View>
                <View style={styles.drawHorizontalLine}></View>

                {/* Comment, Retweet, Like, Share */}
                <View style={styles.buttonsView}>
                    <View style={styles.footerButtons}>
                        <Image style={styles.buttonIcon} source={require('../icons/comments.png')}/>
                    </View>
                    <View style={styles.footerButtons}>
                        <Image style={styles.buttonIcon} source={require('../icons/RT.png')}/>
                    </View>
                    <View style={styles.footerButtons}>
                        <Image style={styles.buttonIcon} source={require('../icons/icons8-hearts2.png')}/>
                    </View>
                    <View style={styles.footerButtons}>
                        <Image style={styles.buttonIcon} source={require('../icons/share.png')}/>
                    </View>
                </View>
                <View style={styles.drawHorizontalLine}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tweetDetailView:{
        padding: 5
    },
    tweetHeaderView:{
        flexDirection: "row"
    },
    tweetProfileImageBox:{
        padding: 10
    },
    tweetProfileImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    profileInfo:{
        justifyContent: "center"
    },
    profileName: {
        fontWeight: "bold",
    },
    profileHandler: {
        color: 'gray'
    },
    tweetTextBox: {
        padding: 15
    },
    tweetText:{
        fontSize: 18,
        textAlign: "left",
        lineHeight: 28
    },
    footerView: {
        paddingLeft: 15,
        flexDirection: "row"
    },
    dataTimeText: {
        color: 'gray'
    },
    originText: {
        color: '#74BEE9',
        fontWeight: 'bold'
    },
    drawHorizontalLine:{
        paddingTop: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    counterTweet: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingLeft: 15
    },
    numberCounterText:{
        fontWeight: 'bold'
    },
    counterText: {
        color: 'gray'
    },
    buttonsView: {
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonIcon: {
        width: 25,
        height: 25
    }


})