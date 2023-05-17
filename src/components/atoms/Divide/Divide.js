import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Box, Divider, Flex} from 'native-base';
import {colors, hp, wp} from '../../../constants';
import IconText from '../IconText/IconText';

function Divide() {
  return (
    <Box alignItems="center">
      <Flex style={styles.top} direction="row" h="42">
        <View style={styles.divide}>
          <IconText
            iconSource={require('../../../assets/icon/traveloka-icon-blue.png')}
            text="30 Apr 2023"
            color={colors.blue2}
            fontSize={14}
          />
        </View>
        <Divider bg="gray.300" thickness="1" mx="2" orientation="vertical" />
        <View style={styles.divide}>
          <IconText
            iconSource={require('../../../assets/icon/traveloka-icon-blue.png')}
            text="1 Malam"
            color={colors.blue2}
            fontSize={14}
          />
        </View>
        <Divider bg="gray.300" thickness="1" mx="2" orientation="vertical" />
        <View style={styles.divide}>
          <IconText
            iconSource={require('../../../assets/icon/traveloka-icon-blue.png')}
            text="1"
            color={colors.blue2}
            fontSize={14}
          />
          <IconText
            iconSource={require('../../../assets/icon/traveloka-icon-blue.png')}
            text="1"
            color={colors.blue2}
            fontSize={14}
          />
        </View>
      </Flex>
      <Divider bg="gray.300" thickness="1" mx="2" orientation="horizontal" />
    </Box>
  );
}

const styles = StyleSheet.create({
  top: {
    width: '100%',
    paddingHorizontal: wp(2),
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 8,
  },
  divide: {
    width: '30%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 8,
  },
});

export default Divide;
