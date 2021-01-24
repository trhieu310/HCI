import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ClickButton from '../../../reuse/clickButton';
import * as theme from '../../../../constants/theme';
import pin from '../../../../Icons/pin_icon.png';

const PinWord = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Image style={styles.image} source={pin} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text}>
          Ghim từ là tính năng cao cấp trên VOCA cho phép bạn tự tạo bộ từ và
          lưu lại những từ vựng bạn muốn, sau đó bạn có thể học từ vựng đã tạo
          theo quy trình và phương pháp học của VOCA.
        </Text>
        <Text style={styles.text}>
          Đối với những thành viên thường, các bạn có thể dùng tính năng này để
          tạo và ghim từ vựng, với số lượng từ vựng được ghim tối đa là 200 từ,
          bạn cần nâng cấp nếu muốn ghim thêm cũng như sử dụng tính năng học các
          bộ từ vựng đã tạo.
        </Text>
        <Text style={styles.text}>
          Đối với thành viên đã mua tính năng, các bạn sẽ được tạo và ghim từ
          vựng không giới hạn, đồng thời bạn có thể học các tính năng học bộ từ
          theo phương pháp học VOCA.
        </Text>
        <Text style={styles.text}>
          Đối với thành viên đã năng cấp tài khoản VIP
        </Text>
        <Text style={styles.text}>
          sẽ được sử dụng miễn phí tính năng ghim từ
        </Text>
      </View>

      <View style={styles.viewButton}>
        <ClickButton
          text="Tạo bộ từ mới"
          color={theme.COLOR.WHITE}
          backgroundColor={theme.COLOR.LIGHT_BLUE}
          width={180}
          height={40}
          radius={20}
          fontSize={18}
        />
      </View>
    </View>
  );
};

export default PinWord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.COLOR.WHITE,
  },
  viewImage: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.COLOR.WHITE,
    backgroundColor: theme.COLOR.LIGHT_BLUE,
    borderRadius: 50,
    marginVertical: 15,
  },
  image: {
    maxWidth: 50,
    height: 50,
    padding: 20,
  },
  viewText: {
    flex: 3,
    paddingHorizontal: 20,
  },
  text: {
    paddingVertical: 6,
    textAlign: 'center',
    fontSize: 16,
  },
  viewButton: {
    flex: 1,
  },
});
