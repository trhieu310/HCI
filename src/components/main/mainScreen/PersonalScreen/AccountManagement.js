import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Info from './AccountSubScreen/Info';
import Private from './AccountSubScreen/Private';
import WordAccount from './AccountSubScreen/WordAccount';
import * as theme from '../../../../constants/theme'


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const AccountManagement = ({navigation, route}) => {
    return (
        <Stack.Navigator initialRouteName="BestSell">
            <Stack.Screen name="AccountManagement" options={{headerShown: false}}>
                {() => (
                <Tab.Navigator
                    style={styles.tabTop}
                    initialRouteName="Info"
                    tabBarOptions={{
                        activeTintColor: theme.COLOR.WHITE,
                        inactiveTintColor: '#eeeeee',
                        labelStyle: {fontSize: 16, fontWeight: 'bold'},
                        style: {backgroundColor: theme.COLOR.BLUE, marginTop: 5},
                        tabStyle: {borderWidth: 1, borderColor: theme.COLOR.WHITE},
                    }}
                >
                    <Tab.Screen
                        name="Info"
                        component={Info}
                        options={{
                            tabBarLabel: 'Thông tin',
                        }}
                    />
                    <Tab.Screen
                        name="Private"
                        component={Private}
                        options={{
                            tabBarLabel: 'Riêng Tư',
                        }}
                    />
                        <Tab.Screen
                        name="WordAccount"
                        component={WordAccount}
                        options={{
                            tabBarLabel: 'Bộ từ vựng',
                        }}
                    />
                </Tab.Navigator>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default AccountManagement

const styles = StyleSheet.create({})
