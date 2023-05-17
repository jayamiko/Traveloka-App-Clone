import React from 'react';
import {View} from 'native-base';
import {StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {colors, wp} from '../../../constants';

function ImageCarousel({images}) {
  return (
    <View style={styles.carousel}>
      <SliderBox
        images={images}
        parentWidth={345}
        sliderBoxHeight={150}
        resizeMethod={'resize'}
        resizeMode={'cover'}
        dotColor={colors.blue2}
        inactiveDotColor={colors.white}
        dotStyle={styles.dotStyle}
        paginationBoxStyle={styles.paginationBoxStyle}
        ImageComponentStyle={{borderRadius: 6, width: '100%'}}
        imageLoadingColor="#2196F3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    width: 360,
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 15,
    padding: 0,
    margin: 0,
  },
  paginationBoxStyle: {
    width: 360,
    bottom: 0,
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});

export default ImageCarousel;
