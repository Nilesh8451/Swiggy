import {View, Text, Image} from 'react-native';
import React from 'react';
import {CustomText} from '../Text';

const index = ({image}) => {
  return (
    <View style={{flex: 1, marginRight: 20, marginVertical: 40}}>
      <View
        style={{
          width: 100,
          height: 100,

          justifyContent: 'center',
        }}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: image,
          }}
        />
        <CustomText
          style={{
            fontSize: 12,
            marginTop: 5,
            fontWeight: 'bold',
          }}>
          Paneer Pure Plate Roha
        </CustomText>
        <CustomText
          style={{
            fontSize: 12,
            color: 'gray',
          }}>
          300ml
        </CustomText>
        <CustomText
          style={{
            fontSize: 12,
            fontWeight: 'bold',
          }}>
          Price: ₹100
        </CustomText>
      </View>
      <View
        style={{
          backgroundColor: 'black',
          width: 28,
          height: 28,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          borderRadius: 5,
          // marginBottom: -120,
          top: -40,
          right: -10,
        }}>
        <CustomText
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          +
        </CustomText>
      </View>
    </View>
  );
};

export default index;
