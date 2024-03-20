import { Inter, Noto_Sans, ZCOOL_XiaoWei } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const notoSans = Noto_Sans({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['300', '500', '700'],
  variable: '--noto-sans',
});

export const zcoolXiaoWei = ZCOOL_XiaoWei({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400'],
  // 指定生成的字体变量名
  variable: '--ZCOOL-XiaoWei',
});
