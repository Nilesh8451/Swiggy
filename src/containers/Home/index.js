import React from 'react';
import {Text, View} from 'react-native';
import {ADS} from '../../components/Ads';
import LocationHeader from '../../components/LocationHeader';
import {CategoryCard} from '../../components/CategoryCard';

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
      title: 'Food',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Food',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Food',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Food',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Food',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Food',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Food',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={{paddingHorizontal: 15}}>
        <LocationHeader />
        <View style={{marginTop: 10}}>
          <ADS />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        {data.map(i => {
          return <CategoryCard title={i.title} imgSrc={i.imgSrc} />;
        })}
      </View>
      {/* <Text style={{color: 'black'}}>Home</Text> */}
    </View>
  );
}

export default Home;
