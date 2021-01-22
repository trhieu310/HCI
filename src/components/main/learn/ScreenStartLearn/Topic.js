import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TopicButton from '../../../items/StartLearn/TopicButton';

const Topic = () => {
    return (
        <ScrollView style={styles.container}>
            <TopicButton />
        </ScrollView>
    );
};

export default Topic;

const styles = StyleSheet.create({});
