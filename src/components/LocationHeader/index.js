import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomText} from '../Text';

function LocationHeader() {
  return (
    <View style={{flexDirection: 'row', paddingVertical: 5}}>
      <View style={{flex: 1, paddingRight: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="location" size={25} color="black" />
          <CustomText style={{fontWeight: '900', fontSize: 17, marginLeft: 5}}>
            Borivali East
          </CustomText>
        </View>
        <CustomText
          numberOfLines={1}
          style={{
            color: 'black',
            fontWeight: '700',
            marginTop: 3,
            fontSize: 13,
            opacity:0.4
          }}>
          Borivali East, Navghar Road, New Dham Society, Bhayander East
        </CustomText>
      </View>
      <View
        style={{
          width: 80,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon2 name="brightness-percent" size={20} color="#900" />
        <CustomText
          numberOfLines={1}
          style={{marginLeft: 5, fontWeight: '600'}}>
          Offers
        </CustomText>
      </View>
    </View>
  );
}

export default LocationHeader;
