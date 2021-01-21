import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import rule from '../../../../Icons/rule_me.png'

const Screen_1 = ({icon, text}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={icon ? icon : rule} />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default Screen_1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50
    },
    image: {
        marginBottom: 20,
        maxWidth: 120,
        maxHeight: 120
    },
    text: {
        fontSize: 15,
        textAlign: 'center'
    }
})
