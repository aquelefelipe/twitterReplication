import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Trends extends Component {

    static avigationOptions = {
        headerTitle: 'Trends'
    }

    render() {
        return (
            <View>
                <Text>Trends</Text>
            </View>
        )
    }
}