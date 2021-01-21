import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import taskActive from '../../../Icons/task_improve_icon.png'
import taskDeactive from '../../../Icons/task_review_icon.png'
import * as theme from '../../../constants/theme'

const MissionButton = ({navigation, active, route, number = 0, match = 'chủ đề cần', text = 'ôn tập'}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Personal')}>
            <View style={styles.viewIcon}>
                <Image 
                    style={[styles.icon, active ? styles.iconActive : styles.iconDeactive]} 
                    source={active ? taskActive : taskDeactive}
                />
            </View>
            <View style={styles.viewText}>
                <Text style={styles.text}>Bạn có </Text>
                <Text style={[styles.text, active ? styles.textActive : styles.textDeactive]}>{number} </Text>
                <Text style={styles.text}>{match} </Text>
                <Text style={[styles.text, active ? styles.textActive : styles.textDeactive]}>{text}.</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MissionButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 72,
        minHeight: 72,
        flexDirection: 'row',
        borderColor: theme.COLOR.WHITE,
        borderBottomColor: theme.COLOR.LIGHT_GRAY,
        borderWidth: 1
    },
    viewIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        maxWidth: 50,
        height: 50
    },
    iconActive: {
        
    },
    iconDeactive: {},
    viewText: {
        flex: 3,
        flexDirection: 'row'
    },
    text: {
        fontSize: 18
    },
    textActive: {
        color: theme.COLOR.LIGHT_GREEN
    },
    textDeactive: {
        color: theme.COLOR.TOMATO
    }
})
