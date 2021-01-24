import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as theme from '../../constants/theme'

const TopTitle = ({title, number, backgroundColor}) => {
    return (
        <View style={[styles.container, {backgroundColor: backgroundColor}]}>
            <View style={styles.viewLeft}>
                <Text style={[styles.text, styles.textLeft]}>{title ? title : 'Từ đã thuộc'}</Text>
            </View>
            <View style={styles.viewRight}>
                <Text style={[styles.text, styles.textRight]}>{number ? number : '0'}</Text>
            </View>
        </View>
    )
}

export default TopTitle

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 45,
        height: 45,
        paddingHorizontal: 7,
        marginVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    viewLeft: {
        flex: 6
    },
    textLeft: {},
    viewRight: {
        flex: 1,
        alignItems: 'flex-end'
    },
    textRight: {},
    text: {
        fontSize: 16,
        color: theme.COLOR.WHITE
    }
})
