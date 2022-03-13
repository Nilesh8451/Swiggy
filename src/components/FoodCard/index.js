import {View, Text, Image} from 'react-native';
import React from 'react';
import {CustomText} from '../Text';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const index = () => {
  return (
    <View style={{paddingHorizontal: 15, flexDirection: 'row'}}>
      <View>
        <Image
          style={{width: 80, height: 80}}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXc7PKmThijqe5yuxq2xs5g0412oUKVB0yg&usqp=CAU',
          }}
        />
        <View
          style={{
            backgroundColor: 'white',
            width: 70,
            height: 30,
            // padding: 5,
            paddingHorizontal: 5,
            marginTop: -26,
            marginLeft: 5,
            borderRadius: 5,
          }}>
          <CustomText
            style={{
              fontSize: 12,
              color: '#E45826',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            50% OFF
          </CustomText>
          <CustomText
            style={{
              color: '#E45826',
              fontSize: 8,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            UPTO ₹ 125
          </CustomText>
        </View>
      </View>

      <View
        style={{
          paddingLeft: 15,
          justifyContent: 'center',
        }}>
        <CustomText style={{fontSize: 16, fontWeight: 'bold'}}>
          {' '}
          Absolute China{' '}
        </CustomText>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon2 name="star" size={20} color="gray" />
          <CustomText style={{fontSize: 12}}> 3.9 . </CustomText>
          <CustomText style={{fontSize: 12}}> 27 mins .</CustomText>
          <CustomText style={{fontSize: 12}}> ₹ 350 for two </CustomText>
        </View>
        <CustomText style={{fontSize: 12, color: 'gray'}}>
          Pizzas fast food
        </CustomText>
        <CustomText style={{fontSize: 12, color: 'gray'}}> Kothrud </CustomText>
      </View>
    </View>
  );
};

export default index;
