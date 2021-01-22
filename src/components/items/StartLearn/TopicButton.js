import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as theme from '../../../constants/theme'
import narrow from '../../../Icons/narrow_right.png'
import imageDefault from '../../../Icons/hobby.jpg'
import lockIcon from '../../../Icons/icon_key.png'

const TopicButton = (props) => {
    const {image, lock, title, studied, forget} = props
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.viewImage}>
                <Image style={styles.image} source={image ? image : imageDefault} />
            </View>
            <View style={styles.viewText}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>{title != null ? title : 'JOBS'}</Text>
                </View>
                <View style={styles.viewTextLearn}>
                    <Text style={[styles.text, styles.textLeft]}>{studied != null ? studied + ' từ đã thuộc' : null}</Text>
                    <Text style={[styles.text, styles.textRight]}>{forget != null ? forget + ' từ chưa thuộc': null}</Text>
                </View>
            </View>
            <View style={styles.viewIcon}>
                <Image source={lock ? lockIcon : narrow} style={styles.icon} />
            </View>
        </TouchableOpacity>
    )
}

export default TopicButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: theme.SIZES.HEIGHT_BUTTON + 20,
        // justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 2,
        backgroundColor: theme.COLOR.WHITE,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    viewImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        maxWidth: 50,
        height: 50,
        borderRadius: 25
    },
    viewText: {
        flex: 5,
        paddingLeft: 10,
        paddingVertical: 5
    },
    viewTitle: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        // fontWeight: 'bold',
        color: theme.COLOR.LIGHT_BLUE
    },
    viewTextLearn: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    text: {
        color: theme.COLOR.GRAY
    },
    textLeft: {},
    textRight: {},
    viewIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 5
    },
    icon: {
        maxWidth: 10,
        height: 15
    }
})
