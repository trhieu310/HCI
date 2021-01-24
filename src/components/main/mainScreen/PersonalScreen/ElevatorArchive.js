import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ElevatorTag from '../../../items/ElevatorTag';
import TopElevator from '../../../items/TopElevator';
import * as theme from '../../../../constants/theme'

const elevators = [
    {
        title: "Beginner",
        rank: 1,
        color: theme.COLOR.RED
    },
    {
        title: "High Beginner",
        rank: 2,
        color: theme.COLOR.ORANGE
    },
    {
        title: "Low Intermediate",
        rank: 3,
        color: theme.COLOR.LIGHT_GREEN
    },
    {
        title: "Intermediate",
        rank: 4,
        color: theme.COLOR.LIGHT_BLUE
    },
    {
        title: "High Intermediate",
        rank: 5,
        color: theme.COLOR.BLUE
    },
]

const renderElevator = () => {
    if (elevators != null) {
        let rs = null
        rs = elevators.map((ele, index) => {
            return <ElevatorTag key={index} rank={ele.rank} title={ele.title} color={ele.color} />
        })
        return rs
    }
    return null
}

const ElevatorArchive = () => {
    return (
        <View style={styles.container}>
            <TopElevator level="Beginner" number={700} numberLeft={1300} />
            <View style={styles.viewTag}>
                {renderElevator()}
            </View>
        </View>
    );
};

export default ElevatorArchive;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewTag: {
        flex: 1,
        backgroundColor: '#ddd'
    }
});
