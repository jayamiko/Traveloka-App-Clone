import React, {useState, useRef} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  TravelokaSplash1,
  TravelokaSplash2,
  TravelokaSplash3,
} from '../../assets';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {colors} from '../../constants';

const data = [
  {image: TravelokaSplash1},
  {image: TravelokaSplash2},
  {image: TravelokaSplash3},
];

const CarouselComponent = () => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const renderCarouselItem = ({item}) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderCarouselItem}
        sliderWidth={395}
        itemWidth={395}
        autoplay={true}
        autoplayDelay={2000}
        autoplayInterval={2000}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    height: '75%',
    padding: 0,
  },
  carouselItem: {
    backgroundColor: colors.black,
    borderRadius: 5,
    width: '100%',
    height: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 20,
  },
  paginationContainer: {
    position: 'absolute',
    top: -20,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 100,
    height: 6,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  paginationInactiveDot: {
    backgroundColor: '#cccccc',
  },
});

export default CarouselComponent;
