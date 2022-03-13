import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {CustomText} from '../Text';

function LocationHeader() {
  return (
    <View style={{flexDirection: 'row', paddingVertical: 5}}>
      <View style={{flex: 1, paddingRight: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="location" size={25} color="#900" />
          <CustomText style={{fontWeight: '900', fontSize: 17, marginLeft: 5}}>
            101/30
          </CustomText>
        </View>
        <CustomText
          numberOfLines={1}
          style={{color: '#9AA0A6', fontWeight: '600', marginTop: 3}}>
          Bhayander, Shiv Kripa Chawl, Sai sheena park, Sai baba nagar,
          Bhayander East
        </CustomText>
      </View>
      <View
        style={{
          width: 80,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{padding: 3, borderRadius: 100, borderWidth: 1}}>
          <Icon2 name="local-offer" size={15} color="#900" />
        </View>
        <CustomText
          numberOfLines={1}
          style={{marginLeft: 8, fontWeight: '600'}}>
          Offers
        </CustomText>
      </View>
    </View>
  );
}

export default LocationHeader;
