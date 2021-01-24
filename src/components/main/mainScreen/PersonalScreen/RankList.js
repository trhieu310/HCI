import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RankButton from '../../../items/StartLearn/RankButton';

const RankList = (props) => {

    const userRank = {
        rank: 40,
        words: 17,
        time: 56,
        name: 'My Linh',
    }
    const rankList = [
        {
            rank: 1,
            words: 20,
            time: 20,
            name: 'Hai Nguyen',
        },
        {
            rank: 2,
            words: 20,
            time: 20,
            name: 'Tu Pham',
        },
        {
            rank: 3,
            words: 20,
            time: 20,
            name: 'Duong Ca',
        },
        {
            rank: 4,
            words: 20,
            time: 22,
            name: 'Tran Khai',
        },
        {
            rank: 5,
            words: 20,
            time: 23,
            name: 'Hoa Hoa',
        },
        {
            rank: 6,
            words: 20,
            time: 24,
            name: 'Minh Duc',
        },
        {
            rank: 7,
            words: 20,
            time: 27,
            name: 'Vu Nam',
        },
        {
            rank: 8,
            words: 20,
            time: 29,
            name: 'Ly Chi',
        },
    ];

    const renderList = () => {
        if (rankList != null) {
            let rs = null;
            rs = rankList.map((rankItem, index) => {
                return (
                    <RankButton
                        key={rankItem.rank}
                        rank={rankItem.rank}
                        words={rankItem.words}
                        time={rankItem.time}
                        name={rankItem.name}
                    />
                );
            });
            return rs;
        }
        return null;
    };
    return (
        <ScrollView style={styles.container}>
            <RankButton
                rank={userRank.rank}
                words={userRank.words}
                time={userRank.time}
                name={userRank.name}
            />
            {renderList()}
        </ScrollView>
    );
};

export default RankList;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
