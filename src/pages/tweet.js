import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'


export default class Tweet extends Component {

    render() {
        return (
            <View style={styles.tweetView} >
                <View style={styles.photoView}> 
                    <Image source={require('../icons/relogio.jpg')} style={styles.photoViewDefinitions}/>
                </View>
                <View style={styles.infosView}>
                    {/* header */}
                    <View style={styles.headerView}>
                        <Text style={styles.profileName}>Error 404</Text>
                        <Text>@aquelefelipe . 5h</Text>
                    </View>
                    {/* text block */}
                    <TouchableWithoutFeedback onPress={() => {
                        this.props.navigation.navigate('DetailsScreen')
                    }}>
                        <View>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    {/* footer */}
                    <View style={styles.footerView}>
                        <View style={styles.footerButtons}>
                            <Image style={styles.commentsIcon} source={require('../icons/comments.png')}/>
                            <Text style={styles.textCounter}>13</Text>
                        </View>
                        <View style={styles.footerButtons}>
                            <Image style={styles.retweetIcon} source={require('../icons/RT.png')}/>
                            <Text style={styles.textCounter}>5</Text>
                        </View>
                        <View style={styles.footerButtons}>
                            <Image style={styles.likesIcon} source={require('../icons/icons8-hearts2.png')}/>
                            <Text style={styles.textCounter}>30</Text>
                        </View>
                        <View style={styles.footerButtons}>
                            <Image style={styles.shareIcon} source={require('../icons/share.png')}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tweetView: {
        // flex: 1,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "white"
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
    profileName: {
        fontWeight: "bold",
        paddingRight: 5
    },
    footerView:{
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingTop: 7
    },
    footerButtons:{
        width: 70,
        flexDirection: "row"
    },
    textCounter:{
        color: "gray"
    },
    commentsIcon: {
        width: 15,
        height: 15
    },
    retweetIcon:{
        width: 15,
        height: 15
    },
    likesIcon:{
        width: 15,
        height: 15
    },
    shareIcon:{
        width: 15,
        height: 15
    }
})