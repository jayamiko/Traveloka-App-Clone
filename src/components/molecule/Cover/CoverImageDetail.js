import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, wp} from '../../../constants';
import {Gap} from '../../atoms';

function CoverImageDetail({item}) {
  const externalLink = item.external;
  const mainImage = item.image[0];
  const moreImages = [item.image[1], item.image[2], item.image[3]];
  const lasImage = item.image[4];

  function ImageView({link, image, index, styles}) {
    if (link == true) {
      return <Image key={index} source={{uri: image}} style={styles} />;
    } else {
      return <Image key={index} source={image} style={styles} />;
    }
  }

  return (
    <View style={styles.cover}>
      {/* IMAGE 1 */}
      <ImageView
        link={externalLink}
        image={mainImage}
        styles={styles.mainImage}
      />
      <View style={styles.moreImage}>
        {moreImages.map((image, i) => {
          return (
            <>
              <ImageView
                link={externalLink}
                index={i}
                image={image}
                styles={styles.image}
              />
              <Gap width={wp(0.4)} />
            </>
          );
        })}
        {/* IMAGE 5 */}
        <View style={styles.lastImageView}>
          {/* IMAGE 5 */}
          <ImageView
            link={externalLink}
            image={lasImage}
            styles={styles.lastImage}
          />
          <View style={styles.lastImageSub}></View>
          <TouchableOpacity style={styles.textViewImage}>
            <Text style={styles.button}>Lihat semua foto</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: 300,
  },
  mainImage: {
    width: '100%',
    height: '80%',
  },
  moreImage: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  image: {
    width: '25%',
    height: '100%',
  },
  lastImageView: {
    position: 'relative',
    width: '25%',
    height: '100%',
  },
  lastImage: {
    width: '100%',
    height: '100%',
  },
  lastImageSub: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.black,
    opacity: 0.5,
  },
  textViewImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: colors.white,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default CoverImageDetail;
