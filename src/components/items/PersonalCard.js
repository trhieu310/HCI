import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import avatarImage from '../../Icons/avatar_strong.png'
import menuBg from '../../Icons/menu_bg.png'
export default function PersonalCard() {
    return (
        <View style={styles.personalCard}>
            <ImageBackground style={styles.imageBackground} source={menuBg}>
                <View style={styles.imageView}> 
                    <Image source={avatarImage} size={50} style={styles.image} />
                </View>
                <View style={styles.personalDetail}>
                    <Text style={styles.name}>Trần Trọng X</Text>
                    <Text style={styles.point}>2500 từ đã thuộc</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    personalCard: {
        minHeight: 120,
        backgroundColor: '#52BEE5',
    },
    imageBackground: {
        flex: 1,
        height: 120,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    imageView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        borderRadius: 100
    },
    personalDetail: {
        flex: 5,
        justifyContent: 'center',
        paddingLeft: 20
    },
    name: {
        color: '#fff', 
        fontSize: 22,
        fontWeight: 'bold',
        paddingVertical: 2
    },
    point: {
        color: '#fff',
        fontSize: 18,
    }
})
