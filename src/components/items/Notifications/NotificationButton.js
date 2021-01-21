import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as theme from '../../../constants/theme'
import bell from '../../../Icons/notification_icon_gray.png'

const NotificationButton = ({
    navigation,
    route,
    to = 'Personal',
    title,
    active
  }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(to != '' ? to : 'Personal')}>
            <View style={styles.viewIcon}>
                <Image style={styles.icon} source={bell} />
            </View>
            <View style={styles.viewText}> 
                <Text style={styles.text}>{title ? title : 'Thông báo'}</Text>
            </View>
            <View style={styles.viewPoint}>
                <View style={[styles.point, active ? styles.activePoint : null]}></View>
            </View>
        </TouchableOpacity>
    )
}

export default NotificationButton

const styles = StyleSheet.create({
    container: {
        minHeight: 55,
        maxHeight: 55,
        flex: 1,
        borderColor: theme.COLOR.WHITE,
        borderBottomColor: theme.COLOR.LIGHT_GRAY,
        borderWidth: 1,
        backgroundColor: theme.COLOR.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 1
    },
    viewIcon: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        maxWidth: 20,
        height: 20
    },
    viewText: {
        flex: 16
    },
    text: {
        fontSize: 16,
        color: theme.COLOR.GRAY
    },
    viewPoint: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 7
    },
    point: {
        backgroundColor: theme.COLOR.GRAY,
        maxWidth: 5,
        height: 5,
        borderRadius: 3
    },  
    activePoint: {
        backgroundColor: theme.COLOR.LIGHT_GREEN
    }
})
