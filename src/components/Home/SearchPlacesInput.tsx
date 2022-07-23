import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchPlacesInput = () => {
  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data.description);
        }}
        styles={{
          textInputContainer: {
            width: 200
          }
        }}
        query={{
          key: 'AIzaSyBTaMZYVg6aum0NggLS5lrwt374Cm5TWSU',
          language: 'en',
        }}
      />
    </View>
  );
};

export default SearchPlacesInput;
