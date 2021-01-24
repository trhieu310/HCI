import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TopicButton from '../../../items/StartLearn/TopicButton';

const listTopic = [
    {
        image: null,
        title: 'JOBS',
        studied: '16',
        forget: '4',
        lock: null,
    },
    {
        image: null,
        title: 'SCHOOL',
        studied: '17',
        forget: '3',
        lock: null,
    },
    {
        image: null,
        title: 'HOLLIDAY',
        studied: null,
        forget: null,
        lock: true,
    },
    {
        image: null,
        title: 'HOBBIES',
        studied: null,
        forget: null,
        lock: true,
    },
    {
        image: null,
        title: 'NATURE',
        studied: null,
        forget: null,
        lock: true,
    },
    {
        image: null,
        title: 'HOLLIDAY',
        studied: null,
        forget: null,
        lock: true,
    },
    {
        image: null,
        title: 'HOBBIES',
        studied: null,
        forget: null,
        lock: true,
    },
    {
        image: null,
        title: 'NATURE',
        studied: null,
        forget: null,
        lock: true,
    }
]

const renderButton = () => {
    if (listTopic != null) {
        var rs = null
        rs = listTopic.map((button, index) => {
            return <TopicButton 
                        key={index}
                        image={button.image}
                        title={button.title}
                        studied={button.studied}
                        forget={button.forget}
                        lock={button.lock}
                    />
        })
        return rs
    }
    return null
}

const Topic = () => {
    return (
        <ScrollView style={styles.container}>
            {renderButton()}
        </ScrollView>
    );
};

export default Topic;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10
    }
});
