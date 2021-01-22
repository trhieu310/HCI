import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as theme from '../../../constants/theme'

const TopicButton = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>Button</Text>
        </TouchableOpacity>
    )
}

export default TopicButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: theme.SIZES.HEIGHT_BUTTON
    }
})
