enum COLORS {
  white = '#fff',
  darkWhite = '#F2F5F8',
  black = '#000',
  lightGray = '#d3d3d3',
  mediumGray = '#667C8A',
  darkGray = '#435D6B',
  // lightPink1 = '#F8C6C8',
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

const YELP_API_KEY: string = 'Ikh6rOdGP7a3LpPTCfumachEEBl4XuDxA-0xdr0hwah4yWaaI6ZYRvN-CalASYMCfqTzrvN5HRVEotEVl9cZm4hLHCe0WHyR9cJU8M1PMRYAyRwMToH3rQdQl5_QYXYx'; 

export { COLORS, FONTS, FONTS_SIZE, ICONS, YELP_API_KEY };
