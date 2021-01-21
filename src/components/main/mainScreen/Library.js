import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LibraryButton from '../../items/Libraries/LibraryButton';
import LibraryHeader from '../../items/Libraries/LibraryHeader';
import NavHeader from '../../items/NavHeader';
import {ListLibraryButton} from '../../../constants/listLibraryButton';

const Library = ({navigation, route}) => {
  const renderLibraryButton = () => {
    if (ListLibraryButton.length > 0) {
      var rs = null;
      rs = ListLibraryButton.map((btn) => {
        return (
          <LibraryButton
            key={btn.title}
            title={btn.title}
            icon={btn.icon}
            navigation={navigation}
            route={route}
            to={btn.to}
            bgColor={btn.bgColor}
          />
        );
      });
      return <View>{rs}</View>;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <NavHeader
        menu
        title="Thư viện VOCA"
        navigation={navigation}
        route={route}
        user
        right
      />
      <Button
        title="gotosell"
        onPress={(route) => navigation.navigate('BestSelling')}
      />
      <ScrollView style={styles.content}>
        <LibraryHeader />
        {renderLibraryButton()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#52BEE5',
  },
  content: {
    flex: 1,
  },
});

export default Library;
