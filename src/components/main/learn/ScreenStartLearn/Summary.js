import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as theme from '../../../../constants/theme'
import learning from '../../../../Icons/learning_icon.png'

const Summary = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewTop}>
                <View style={styles.viewTopChild}>
                    <Text style={styles.textTop}>13</Text>
                    <Text style={styles.textTopDetail}>Từ đã thuộc</Text>
                </View>
                <View style={styles.viewTopChild}>
                    <Text style={styles.textTop}>13</Text>
                    <Text style={styles.textTopDetail}>Từ đã thuộc</Text>
                </View>
                <View style={styles.viewTopChild}>
                    <Text style={styles.textTop}>13</Text>
                    <Text style={styles.textTopDetail}>Từ đã thuộc</Text>
                </View>
            </View>
            <View style={styles.viewBtn}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}>Bắt đầu chủ đề mới</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewBot}>
                <View style={styles.viewImage}>
                    <Image  style={styles.imageBot}  source={learning}/>
                </View>
                <Text style={styles.textBot}>JOB</Text>
                <TouchableOpacity style={styles.btnBot}>
                    <Text style={styles.textBtnBot}>Học bài mới</Text>
                </TouchableOpacity>
                <Text style={styles.textEndBot}>Hoặc</Text>
                <TouchableOpacity style={styles.btnBot}>
                    <Text style={styles.textBtnBot}>Học bài mới</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Summary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    viewTop: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    viewTopChild: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        borderBottomColor: theme.COLOR.WHITE,
        borderTopColor: theme.COLOR.WHITE
    },
    textTop: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 15
    },
    textTopDetail: {
        fontSize: 14
    },
    viewBtn: {
        flex: 1
    },
    btn: {
        width: 250,
        height: 45,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.COLOR.LIGHT_YELLOW
    },
    textBtn: {
        color: theme.COLOR.ORANGE,
        fontSize: 16
    },
    viewBot: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewImage: {},
    imageBot: {
        width: 46,
        height: 46
    },
    textBot: {},
    btnBot: {},
    textBtnBot: {},
    textEndBot: {}
})
