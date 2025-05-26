const baseColors = {
  yellow: [
    '#F3B40A', '#F6BB33', '#F9C14C', '#FBC862', '#FDCF76',
    '#FFD58A', '#FFDC9E', '#FFEAC4', '#FFF1D8',
  ],
  red: [
    '#BE1313', '#C83727', '#D14F3A', '#D9644E', '#E17862',
    '#E88C77', '#EE9F8D', '#F8C5B9', '#FBD9D0',
  ],
  green: [
    '#057234', '#2C7F45', '#458B56', '#5A9868', '#6FA479',
    '#83B18B', '#98BE9E', '#C1D8C4', '#D5E5D7',
  ],
  blue: [
    '#306CEF', '#477CF1', '#5E8CF3', '#759DF4', '#8CADF6',
    '#A3BEF8', '#BACEFA', '#D1DEFB', '#E8EFFD',
  ],
  neutral: [
    '#0C1024', '#0E1422', '#333845', '#474B57', '#5C5F6A',
    '#71747E', '#878A92', '#B6B7BC', '#E6E7E8',
  ],
  white: ['#E9E9EB', '#F6F6F6'],
};

// Расширяем объект, добавляя ссылку на blue как primary
export const tailwindColors = {
  ...baseColors,
  primary: baseColors.blue,
};
