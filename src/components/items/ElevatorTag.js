import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as theme from '../../constants/theme'

const ElevatorTag = (props) => {
    const {rank, title, color} = props
    return (
        <View style={styles.container}>
            <View style={styles.viewTitle}>
                <Text style={[styles.title, color ? {color: color} : null]}>{title ? title : "Beginner"}</Text>
            </View>
            <View style={styles.viewBot}>
                <View style={styles.viewBotLeft}>
                    <View 
                        style={[styles.nav, rank === 1 ? {width: 50} : (rank === 2 ? {width: 80} : (rank === 3 ? {width: 120} : (rank === 4 ? {width: 160}: null)))]}
                    >
                        <View style={[styles.navLeft, color ? {backgroundColor: color} : null]}></View>
                        <View style={styles.navRight}></View>
                    </View>
                </View>
                <View style={styles.viewBotRight}>
                    <Text style={styles.textRight}>{rank === 1 ? '2000' : (rank === 2 ? '3000' : (rank === 3 ? '3000' : (rank === 4 ? '4000': '>5000')))}</Text>
                </View>
            </View>
        </View>
    )
}

export default ElevatorTag

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 60,
        paddingHorizontal: 7,
        justifyContent: 'center',
        backgroundColor: theme.COLOR.WHITE
    },
    viewTitle: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        color: theme.COLOR.RED
    },
    viewBot: {
        flex: 1,
        flexDirection: 'row'
    },
    viewBotLeft: {
        flex: 7,
        justifyContent: 'center'
    },
    nav: {
        flex: 1,
        borderRadius: 20,
        maxHeight: 15,
        height: 15,
        backgroundColor: theme.COLOR.LIGHT_GRAY,
        flexDirection: 'row',
        maxWidth: 220 
    },
    navLeft: {
        flex: 3,
        backgroundColor: theme.COLOR.RED,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    navRight: {
        flex: 7,
    },
    viewBotRight: {
        flex: 1,
        justifyContent: 'center'
    },
    textRight: {}
})
