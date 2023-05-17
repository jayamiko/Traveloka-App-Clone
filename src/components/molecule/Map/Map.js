import React from 'react';
import {Image} from 'react-native';

function Map() {
  return (
    <Image
      source={require('../../../assets/ilustrasi/location-mock.jpg')}
      style={{
        width: '100%',
        height: 240,
      }}
    />
  );
}

export default Map;
