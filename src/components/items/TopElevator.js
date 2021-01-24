import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import bg from '../../Icons/msg_result_me.png'
import * as theme from '../../constants/theme'

const TopElevator = (props) => {
    const {level, number, numberLeft} = props
    return (
        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.imgBg}>
                <View style={styles.viewText}>
                    <Text style={[styles.text, styles.level]}>{level ? level : "Beginner"}</Text>
                    <Text style={[styles.text, styles.number]}>({number} từ)</Text>
                    <Text style={[styles.text, styles.description]}>Để vượt qua cấp độ {level ? level : "Beginner"} bạn cần học thêm {numberLeft} từ vựng mới.Hãy cố gắng để đạt được mục tiêu bạn nhé! </Text>
                </View>
                
            </ImageBackground>
        </View>
        
    )
}

export default TopElevator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 150
    },
    imgBg: {
        flex: 1,
        height: 150
    },
    viewText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
    }, 
    level: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.COLOR.WHITE
    },
    number: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 15,
        color: theme.COLOR.WHITE
    }
})
