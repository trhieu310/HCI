import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InputText from '../../../../reuse/inputText'
import * as theme from '../../../../../constants/theme'

const Private = ({navigation, route}) => {
    const userInfo = {
        name: 'My Linh',
        phone: '0651816546',
        email: 'mylinh@example.com',
        gender: 'Female',
        address: 'Ngo Gia Tu'
    }
    return (
        
        <View style={styles.container}>
            <View style={styles.viewText}>
                <Text>Email</Text>
            </View>
            <InputText placeholder={userInfo.email} />
            <View style={styles.viewText}>
                <Text>Password</Text>
            </View>
            <InputText placeholder="*************" />

            {/* <ClickButton /> */}
        </View>
    )
}

export default Private

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: theme.COLOR.WHITE
    },
    viewText: {
        // flex: 1,
        // height: 30,
        paddingTop: 10,
    }
})
