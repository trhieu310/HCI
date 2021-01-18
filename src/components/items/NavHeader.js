import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import * as theme from './../../constants/theme';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const myButton = (icon, action, route) => (
    <Icon
    name={icon}
    size={26}
    backgroundColor='transparent'
    onPress={(route) => action}
  >
  </Icon>
)

export default function NavHeader({navigation, route, right, menu, back, title}) {
    renderLeft = () => {
        if (back) {
            return <TouchableOpacity style={styles.left} onPress={(route) => navigation.goBack()}>
                <Icon
                    name='arrow-left'
                    size={26}
                    backgroundColor='transparent'
                    color='#fff'
                ></Icon>
            </TouchableOpacity>
        }
        if (menu) {
            return <TouchableOpacity style={styles.left} onPress={(route) => navigation.openDrawer()}>
                <Icon
                    name='bars'
                    size={26}
                    backgroundColor='transparent'
                    color='#fff'
                ></Icon>
            </TouchableOpacity>
        }
        return null
    }

    return (
        <View style={styles.navHeader}>
            {renderLeft()}
            <View style={styles.titleView}>
                <Text style={styles.title}>{title ? title : 'Title'}</Text>
            </View>
            <TouchableOpacity style={styles.right}>
                <Text>Right</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navHeader: {
        backgroundColor: '#fff',
        minHeight: theme.SIZES.NAHEADER_HEIGHT,
        paddingVertical: theme.SIZES.NAHEADER_HEIGHT / 2 - 12,
        paddingHorizontal: theme.SIZES.BASES / 2,
        flexDirection: 'row',
        backgroundColor: '#00B2E5'
    },
    left: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleView: {
        display: 'flex',
        flex: 8,
        justifyContent: 'center'
    },
    right: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: theme.SIZES.TITLE_FONT_SIZE,
        paddingHorizontal: theme.SIZES.BASES,
        color: '#fff',
        fontWeight: 'bold'
    }
})
