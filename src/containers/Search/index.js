import React from 'react';
import {View, TextInput, ScrollView, Image} from 'react-native';
import TagCard from '../../components/TagCard';
import {CustomText} from '../../components/Text';
import Seperator from '../../components/Seperator';
import CurationsCard from '../Home/PopularCurations';
function Search() {
  const history = [
    {name: 'Paneer Masala'},
    {name: 'Biryani'},
    {name: 'Paneer Pizza Wadapav'},
    {name: 'Dal Bati'},
    {name: 'Puri Bhaji'},
  ];

  const curations = [
    {
      name: 'Chocolate',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTB8X0lJN1Blpe9aos9c8-Oj7lZ0J_pDrgw&usqp=CAU',
    },
    {
      name: 'Milk',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTB8X0lJN1Blpe9aos9c8-Oj7lZ0J_pDrgw&usqp=CAU',
    },
    {
      name: 'Fruits',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTB8X0lJN1Blpe9aos9c8-Oj7lZ0J_pDrgw&usqp=CAU',
    },
    {
      name: 'Vegitables',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTB8X0lJN1Blpe9aos9c8-Oj7lZ0J_pDrgw&usqp=CAU',
    },
    {
      name: 'Chips',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTB8X0lJN1Blpe9aos9c8-Oj7lZ0J_pDrgw&usqp=CAU',
    },
    {
      name: 'Rice',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTB8X0lJN1Blpe9aos9c8-Oj7lZ0J_pDrgw&usqp=CAU',
    },
    {
      name: 'Tea',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTB8X0lJN1Blpe9aos9c8-Oj7lZ0J_pDrgw&usqp=CAU',
    },
    {
      name: 'Bread',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTB8X0lJN1Blpe9aos9c8-Oj7lZ0J_pDrgw&usqp=CAU',
    },
    {
      name: 'Eggs',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTB8X0lJN1Blpe9aos9c8-Oj7lZ0J_pDrgw&usqp=CAU',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          padding: 15,
          borderBottomWidth: 0.5,
          borderBottomColor: 'gray',
          paddingBottom: 20,
        }}>
        <TextInput
          style={{
            width: '100%',
            height: 50,
            borderWidth: 0.5,
            paddingLeft: 20,
            borderRadius: 5,
          }}
          placeholder="Search for restaurant, item or more"
          placeholderTextColor={'gray'}
        />
      </View>
      <ScrollView>
        <View style={{paddingLeft: 15, marginTop: 25, marginBottom: 10}}>
          <CustomText style={{fontWeight: '800'}}>Trending Searches</CustomText>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 15}}>
            {history.map(prod => {
              return <TagCard {...prod} />;
            })}
          </View>
        </View>

        <Seperator />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingVertical: 10,
          }}>
          <View>
            <CustomText style={{fontSize: 15}}>
              B'day cakes to handpicked treats!
            </CustomText>
            <CustomText style={{color: '#d537ed', fontWeight: '600'}}>
              Gift them with Swiggy Moments
            </CustomText>
          </View>
          <Image
            style={{width: 80, height: 80}}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0WrR-AA_nl2lqHiVSRmJE3B2sD6jOgQJVAQ&usqp=CAU',
            }}
          />
        </View>
        <Seperator />

        <CustomText
          style={{
            fontSize: 18,
            marginTop: 20,
            paddingLeft: 15,
            fontWeight: '800',
          }}>
          Popular on instamart
        </CustomText>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{paddingLeft: 15, marginTop: 20, marginBottom: 10}}>
          {curations.map((prod, index) => {
            return (
              <View>
                <CurationsCard {...prod} />
              </View>
            );
          })}
        </ScrollView>

        <Seperator />

        <CustomText
          style={{
            fontSize: 18,
            marginTop: 20,
            paddingLeft: 15,
            fontWeight: '800',
          }}>
          Popular Cuisines
        </CustomText>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{paddingLeft: 15, marginTop: 18, marginBottom: 30}}>
          {curations.map((prod, index) => {
            return (
              <View>
                <CurationsCard {...prod} />
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default Search;
