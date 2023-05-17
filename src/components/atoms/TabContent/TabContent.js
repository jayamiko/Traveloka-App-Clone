import React from 'react';
import {colors, wp, hp} from '../../../constants';
import {View, Text, Image} from 'react-native';
import Gap from '../Gap';

function TabContent({data}) {
  return (
    <View>
      {data.map((item, i) => {
        return (
          <View
            key={i}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: wp(2),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Image source={item.icon} style={{width: 28, height: hp(3)}} />
              </View>
              <Gap width={wp(2)} />
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  {item.place}
                </Text>
                <Text style={{fontSize: 10}}>{item.category}</Text>
              </View>
            </View>
            <View>
              <Text style={{fontSize: 12, color: colors.grayMuda}}>
                {item.distance}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

export default TabContent;
