import * as theme from '../constants/theme';
import premium from '../Icons/icon_premium_2.png';
import library from '../Icons/icon_learning_set.png';
import pin from '../Icons/learning_pin_icon.png';
import rank from '../Icons/icon_ranking.png';
import top from '../Icons/icon_level.png';
import setting from '../Icons/icon_setting.png';
import logout from '../Icons/icon_signout.png';

exports.ListMainButton = [
  {
    title: 'Nâng cấp tài khoản VOCA.VIP',
    to: null,
    bgColor: theme.COLOR.YELLOW,
    iconBg: theme.COLOR.WHITE,
    right: '',
    icon: premium,
    color: null,
  },
  {
    title: 'Bộ từ đang học',
    to: 'StartLearn',
    bgColor: theme.COLOR.WHITE,
    iconBg: theme.COLOR.PRIMARY,
    right: '3',
    icon: library,
    color: null,
  },
  {
    title: 'Từ vựng đã ghim',
    to: null,
    bgColor: theme.COLOR.WHITE,
    iconBg: theme.COLOR.LIGHT_GREEN,
    right: '0',
    icon: pin,
    color: null,
  },
  {
    title: 'Bảng xếp hạng',
    to: null,
    bgColor: theme.COLOR.WHITE,
    iconBg: theme.COLOR.TOMATO,
    right: '',
    icon: rank,
    color: null,
  },
  {
    title: 'Thang trình độ',
    to: null,
    bgColor: theme.COLOR.WHITE,
    iconBg: theme.COLOR.ORANGE,
    right: '',
    icon: top,
    color: null,
  },
  {
    title: 'Quản lý tài khoản',
    to: null,
    bgColor: theme.COLOR.WHITE,
    iconBg: theme.COLOR.PRIMARY,
    right: '',
    icon: setting,
    color: null,
  },
  {
    title: 'Đăng xuất',
    to: 'Login',
    bgColor: theme.COLOR.LIGHT_BLUE,
    iconBg: theme.COLOR.PRIMARY,
    right: '',
    icon: logout,
    color: theme.COLOR.WHITE,
  },
];
