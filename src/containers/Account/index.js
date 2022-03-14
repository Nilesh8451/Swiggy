import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import More from '../../components/More';
import {CustomText} from '../../components/Text';

function Account() {
  const routes = [
    {
      name: 'My Account',
      subTitle: 'Favourite, Offers & Settings',
      isMore: true,
      bottomLine: true,
      list: [
        {
          name: 'Favourites',
        },
        {
          name: 'Offers',
        },
        {
          name: 'Settings',
        },
      ],
    },
    {
      name: 'Addresses',
      subTitle: 'Edit & Add New Addresses',
      isMore: false,
      bottomLine: true,
    },
    {
      name: 'Payments & Refunds',
      subTitle: 'Refunds Status & Payment Modes',
      isMore: true,
      bottomLine: true,
      list: [
        {
          name: 'Refund Status',
        },
        {
          name: 'Payment Modes',
        },
      ],
    },
    {
      name: 'Swiggy Money',
      subTitle: 'View Account Balance & Transactions History',
      isMore: false,
      bottomLine: true,
    },
    {
      name: 'Help',
      subTitle: 'FAQs & Links',
      isMore: false,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <View
            style={{
              borderBottomWidth: 2,
              paddingBottom: 20,
              marginHorizontal: 15,
              paddingTop: 25,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <CustomText
                style={{fontWeight: '800', fontSize: 15, marginBottom: 5}}>
                NILESH
              </CustomText>
              <TouchableOpacity>
                <CustomText style={{color: 'orange'}}>EDIT</CustomText>
              </TouchableOpacity>
            </View>
            <CustomText style={{fontSize: 12, color: 'gray'}}>
              +91 - 8451834334 - nilesh.chavan@gmail.com
            </CustomText>
          </View>
          {routes.map((route, index) => {
            return <More key={index} {...route} />;
          })}
        </View>

        <View
          style={{paddingVertical: 5, backgroundColor: 'white', marginTop: 25}}>
          <More name="LOGOUT" />
        </View>

        <CustomText
          style={{
            fontSize: 10,
            color: 'gray',
            textAlign: 'center',
            marginTop: 30,
            marginBottom: 100,
          }}>
          App version 1.0.0 (1022)
        </CustomText>
      </ScrollView>
    </View>
  );
}

export default Account;
