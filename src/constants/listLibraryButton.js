import * as theme from '../constants/theme';
import productIcon from '../Icons/product_cate_icon_1.png'
import bestSelling from '../Icons/learning_finish_icon.png'
import free from '../Icons/product_cate_icon_2.png'
import communication from '../Icons/product_cate_icon_3.png'
import workE from '../Icons/product_cate_icon_4.png'
import popular from '../Icons/product_cate_icon_5.png'
import freeDiploma from '../Icons/product_cate_icon_6.png'


exports.ListLibraryButton = [
    {
        icon: productIcon,
        to: '',
        title: 'Tài khoản VIP.VOCA',
        bgColor: theme.COLOR.YELLOW
    },
    {
        icon: bestSelling,
        to: '',
        title: 'Best Selling: Được Yêu Thích',
        bgColor: theme.COLOR.WHITE
    },
    {
        icon: free,
        to: '',
        title: 'Miễn Phí',
        bgColor: theme.COLOR.WHITE
    },
    {
        icon: communication,
        to: '',
        title: 'Giao Tiếp',
        bgColor: theme.COLOR.WHITE
    },
    {
        icon: null,
        to: '',
        title: 'EF Fortless English',
        bgColor: theme.COLOR.WHITE
    },
    {
        icon: freeDiploma,
        to: '',
        title: 'Chứng Chỉ Miễn Phí',
        bgColor: theme.COLOR.WHITE
    },
    {
        icon: null,
        to: '',
        title: 'CEFR',
        bgColor: theme.COLOR.WHITE
    },
    {
        icon: popular,
        to: '',
        title: 'Phổ Thông',
        bgColor: theme.COLOR.WHITE
    },
    {
        icon: workE,
        to: '',
        title: 'Chuyên Ngành',
        bgColor: theme.COLOR.WHITE
    }
]