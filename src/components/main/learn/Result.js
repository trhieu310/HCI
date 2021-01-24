import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, View } from 'react-native'
import ResultPage from './Result/ResultPage'
import ResultWord from './Result/ResultWord'
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
import * as theme from '../../../constants/theme'
import NavHeader from '../../items/NavHeader';
import ResultRank from './Result/ResultRank';

const Result = (props) => {
    const {navigation, route} = props
    // const {title} = route.params
    const {title} = props
    return (            
        <Stack.Navigator 
            initialRouteName="ResultPage"
        >
            <Stack.Screen 
                name="Result"
                options={{headerShown: false}}
            >
                {() => (
                    <Tab.Navigator
                        style={styles.tabTop}
                        initialRouteName="ResultPage"
                        tabBarOptions={{
                            activeTintColor: theme.COLOR.WHITE,
                            inactiveTintColor: '#eeeeee',
                            labelStyle: { fontSize: 16, fontWeight: 'bold' },
                            style: { 
                                backgroundColor: theme.COLOR.BLUE,
                                marginVertical: 6
                            },
                            tabStyle: { borderWidth: 1, borderColor: theme.COLOR.WHITE },
                        }}>
                        <Tab.Screen
                            name="ResultPage"
                            component={ResultPage}
                            options={{
                                tabBarLabel: 'Kết quả',
                            }}
                        />
                        <Tab.Screen
                            name="ResultWord"
                            component={ResultWord}
                            options={{
                                tabBarLabel: 'Từ vựng',
                            }}
                        />
                        <Tab.Screen
                            name="ResultRank"
                            component={ResultRank}
                            options={{
                                tabBarLabel: 'Xếp hạng',
                            }}
                        />
                    </Tab.Navigator>
                )}
            </Stack.Screen>
        </Stack.Navigator>
        
    )
}

export default Result

const styles = StyleSheet.create({})
