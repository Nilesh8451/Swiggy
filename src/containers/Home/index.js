import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {ADS} from '../../components/Ads';
import LocationHeader from '../../components/LocationHeader';
import {CategoryCard} from '../../components/CategoryCard';
import {SaleCard} from '../../components/SaleCard';
import Carousel from 'react-native-snap-carousel';
import {CustomText} from '../../components/Text';
import {TopPicCard} from './TopPicCard/index';
import Icon from 'react-native-vector-icons/Fontisto';
import PopularBrandsCard from './PopularBrands';
import Seperator from '../../components/Seperator';

function Home() {
  const data = [
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Food',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Instamart',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Genie',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Meat Stores',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Moments',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Health Hub',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Scootsy',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Speciality Stores',
    },
  ];

  const offerData = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2epi8rpNSNSSUCd4Lz-BXs7oK8tCgnWoxCQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUa7O_OGQ-gzkFhllibzg1EYMQFj9ZMpLS1A&usqp=CAU',
  ];

  const topPics = [
    {
      imageURI:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wfjvzbsyjruydaozbnzo',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wfjvzbsyjruydaozbnzo',
      off: '50%',
      upTo: '110',
      name: 'Fried Nation',
      time: '32 mins',
    },
    {
      imageURI:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wfjvzbsyjruydaozbnzo',
      // off:'10%',
      // upTo:'10',
      name: 'The Thali',
      time: '34 mins',
    },
    {
      imageURI:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wfjvzbsyjruydaozbnzo',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wfjvzbsyjruydaozbnzo',
      // off:'10%',
      // upTo:'10',
      name: 'The Thali',
      time: '34 mins',
    },
    {
      imageURI:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wfjvzbsyjruydaozbnzo',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wfjvzbsyjruydaozbnzo',
      // off:'10%',
      // upTo:'10',
      name: 'The Thali',
      time: '34 mins',
    },
    {
      imageURI:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wfjvzbsyjruydaozbnzo',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
  ];

  const popularBrands = [
    ,
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBQBuct-BxMJfyy3vtmqB7UzdDdoRN4SdYQ&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: "McDonald's",
      time: '34 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBQBuct-BxMJfyy3vtmqB7UzdDdoRN4SdYQ&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBQBuct-BxMJfyy3vtmqB7UzdDdoRN4SdYQ&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBQBuct-BxMJfyy3vtmqB7UzdDdoRN4SdYQ&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBQBuct-BxMJfyy3vtmqB7UzdDdoRN4SdYQ&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBQBuct-BxMJfyy3vtmqB7UzdDdoRN4SdYQ&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBQBuct-BxMJfyy3vtmqB7UzdDdoRN4SdYQ&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBQBuct-BxMJfyy3vtmqB7UzdDdoRN4SdYQ&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBQBuct-BxMJfyy3vtmqB7UzdDdoRN4SdYQ&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ScrollView>
        <View style={{paddingHorizontal: 15}}>
          <LocationHeader />
          <View style={{marginTop: 10}}>
            <ADS />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            {data.map((i, index) => {
              return (
                <View key={index}>
                  <CategoryCard
                    title={data[index].title}
                    imgSrc={data[index].imgSrc}
                  />
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            width: '100%',
            marginBottom: 30,
            marginTop: 20,
          }}>
          <Image
            style={{width: '100%', height: 200, borderRadius: 10}}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2epi8rpNSNSSUCd4Lz-BXs7oK8tCgnWoxCQ&usqp=CAU',
            }}
          />
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: 15, alignItems: 'center'}}>
          <Icon name="like" size={20} color="black" />

          <CustomText style={{marginLeft: 8, fontWeight: '700'}}>
            Top Picks For You
          </CustomText>
        </View>

        <ScrollView
          horizontal={true}
          style={{paddingLeft: 15, marginTop: 18, marginBottom: 30}}>
          {topPics.map((prod, index) => {
            return <TopPicCard key={index} {...prod} />;
          })}
        </ScrollView>

        <Seperator />
        <CustomText
          style={{
            paddingLeft: 15,
            marginTop: 30,
            marginBottom: 10,
            fontWeight: '800',
            fontSize: 16,
          }}>
          Popular Brands
        </CustomText>
        <ScrollView
          horizontal={true}
          style={{paddingLeft: 15, marginTop: 18, marginBottom: 30}}>
          {popularBrands.map((prod, index) => {
            return (
              <View>
                <PopularBrandsCard {...prod} />
                <PopularBrandsCard {...prod} />
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default Home;
