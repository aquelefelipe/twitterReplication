import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Tweet = () => {
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
}