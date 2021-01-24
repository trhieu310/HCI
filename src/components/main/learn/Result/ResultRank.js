import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RankButton from '../../../items/StartLearn/RankButton';
import * as theme from '../../../../constants/theme';

const ResultRank = (props) => {
    const user = {
        rank: 40,
        words: 18,
        time: 34,
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

    return <ScrollView style={styles.scrollView}>
        <RankButton
            rank={user.rank}
            words={user.words}
            time={user.time}
            name={user.name}
        />
        <View style={styles.viewText}>
            <Text style={styles.text}>Bảng xếp hạng VOCA</Text>
        </View>
        {renderList()}
    </ScrollView>;
};

export default ResultRank;

const styles = StyleSheet.create({
    scrollView: {
        paddingTop: 10,
        backgroundColor: theme.COLOR.WHITE,
    },
    viewText: {
        flex: 1,
        maxHeight: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18
    }
});
