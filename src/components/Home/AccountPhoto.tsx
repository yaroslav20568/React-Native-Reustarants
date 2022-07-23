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
	  	img={require("../../assets/icons/accountPhoto.png")}
		width={40}
		height={40}
	  />
    </TouchableOpacity>
  );
};

export default AccountPhoto;
