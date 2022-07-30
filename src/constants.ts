enum COLORS {
  white = '#fff',
  darkWhite = '#F2F5F8',
  black = '#000',
  lightGray = '#d3d3d3',
  mediumGray = '#667C8A',
  darkGray = '#435D6B',
  lightPink = '#F9C8CA',
  darkPink = '#F27D82',
  red = '#C8161D',
  burgundy = '#910203'
}

enum FONTS {
  poppinsRegular = 'Poppins-Regular',
  poppinsMedium = 'Poppins-Medium',
  poppinsSemiBold = 'Poppins-SemiBold'
}

enum FONTS_SIZE {
  small12 = 12,
  small14 = 14,
  medium16 = 16,
  medium17 = 17,
  medium18 = 18,
  medium20 = 20,
  large24 = 24,
  large28 = 28,
  large30 = 30
}

enum ICONS {
  homeIcon = require('./assets/icons/tabs/homeIcon.png'),
  favoritesIcon = require('./assets/icons/tabs/favoritesIcon.png'),
  accountIcon = require('./assets/icons/tabs/accountIcon.png'),
  cartIcon = require('./assets/icons/tabs/cartIcon.png')
}

const YELP_API_KEY: string = 'URmBU2AAP3ghri1S_fKYgD_KMNEgyuY35WMgG7IQpmBgeYb5LAzIUPtQONnCTxVMf2XXxbnscBuylVHWXQsoPwDjCf-JmoEeSpykessKFmhU7qd7FE_jAImYhffkYnYx'; 

export { COLORS, FONTS, FONTS_SIZE, ICONS, YELP_API_KEY };
