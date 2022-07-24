import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from '../importComponents';

const AccountPhoto = (/* { navigation } */) => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
	  onPress={() => navigation.navigate('Account')}
	>
	  <Image 
	  	img={"https://i03.fotocdn.net/s119/9c4a25d1afe85016/public_pin_l/2730300326.jpg"}
		width={40}
		height={40}
		borderRadius={3}
	  />
    </TouchableOpacity>
  );
};

export default AccountPhoto;
