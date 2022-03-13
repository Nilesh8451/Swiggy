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
        {data.map((i, index) => {
          if (data.length / 2 > index) {
            console.log(index);
            return (
              <View>
                <CategoryCard
                  title={data[2 * index].title}
                  imgSrc={data[2 * index].imgSrc}
                />
                {data?.[2 * index + 1]?.title != undefined && (
                  <CategoryCard
                    title={data[2 * index + 1].title}
                    imgSrc={data[2 * index + 1].imgSrc}
                  />
                )}
              </View>
            );
          } else {
            return <></>;
          }
        })}
      </View>
      {/* <Text style={{color: 'black'}}>Home</Text> */}
    </View>
  );
}

export default Home;
