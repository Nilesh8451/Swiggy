import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CustomText} from '../Text';

export const ADS = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['rgba(255,160,122,0.1)', 'rgba(255,160,122,0.8)']}
      style={{
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
      }}>
      <View style={{paddingHorizontal: 15, alignItems: 'center'}}>
        <CustomText style={{fontSize: 20, fontWeight: '700', letterSpacing: 2}}>
          ONE
        </CustomText>
      </View>
      <View style={{flex: 1}}>
        <CustomText>
          Get unlimited benefits @75/Month on Restaurants, Instamart & Genie{' '}
          {'<<'}
        </CustomText>
      </View>
    </LinearGradient>
  );
};
