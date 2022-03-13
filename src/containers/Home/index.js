import React from 'react';
import {Text, View, Image, ScrollView, FlatList} from 'react-native';
import {ADS} from '../../components/Ads';
import LocationHeader from '../../components/LocationHeader';
import {CategoryCard} from '../../components/CategoryCard';
import {CustomText} from '../../components/Text';
import {TopPicCard} from './TopPicCard/index';
import Icon from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/SimpleLineIcons';
import PopularBrandsCard from './PopularBrands';
import Seperator from '../../components/Seperator';
import CurationsCard from './PopularCurations';
import FoodCard from '../../components/FoodCard';
import ProductCard from '../../components/ProductCard';

function Home() {
  const data = [
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSx5XJ4dufb81k9jpKc8WYzWNM6tdlJYdwOg&usqp=CAU',
      title: 'Food',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIu-TinU1W0uA5YLLtXoZKXGjgzIEK8aNtw&usqp=CAU',
      title: 'Instamart',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSx5XJ4dufb81k9jpKc8WYzWNM6tdlJYdwOg&usqp=CAU',
      title: 'Genie',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIu-TinU1W0uA5YLLtXoZKXGjgzIEK8aNtw&usqp=CAU',
      title: 'Meat Stores',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSx5XJ4dufb81k9jpKc8WYzWNM6tdlJYdwOg&usqp=CAU',
      title: 'Moments',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSx5XJ4dufb81k9jpKc8WYzWNM6tdlJYdwOg&usqp=CAU',
      title: 'Health Hub',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ83QWZQTc2CRx8a52hIZkObf-04P1zB4-QQ&usqp=CAU',
      title: 'Scootsy',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSx5XJ4dufb81k9jpKc8WYzWNM6tdlJYdwOg&usqp=CAU',
      title: 'Speciality Stores',
    },
  ];

  const topPics = [
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoNyuIRCzGhCL9bpCshxhOlflQ4yZETjKYw&usqp=CAU',
      off: '60%',
      upTo: '80',
      name: 'Spicy Red Chilly',
      time: '35 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIfJCtuWW9P-wF2vRvvI2COOs8zmB_IHwtQ&usqp=CAU',
      off: '70%',
      upTo: '190',
      name: 'Red Hot Chillies',
      time: '85 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIfJCtuWW9P-wF2vRvvI2COOs8zmB_IHwtQ&usqp=CAU',
      // off:'10%',
      // upTo:'10',
      name: 'The Thali',
      time: '34 mins',
    },

    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIfJCtuWW9P-wF2vRvvI2COOs8zmB_IHwtQ&usqp=CAU',
      off: '50%',
      upTo: '110',
      name: 'Fried Nation',
      time: '32 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoNyuIRCzGhCL9bpCshxhOlflQ4yZETjKYw&usqp=CAU',
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
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoNyuIRCzGhCL9bpCshxhOlflQ4yZETjKYw&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
  ];

  const popularBrands = [
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7l5PsxDNg6eF4Vtsyl4rV7KASYpQEI93aA&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Pizza Hut',
      time: '34 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7l5PsxDNg6eF4Vtsyl4rV7KASYpQEI93aA&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Pizza Hut',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7l5PsxDNg6eF4Vtsyl4rV7KASYpQEI93aA&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Pizza Hut',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7l5PsxDNg6eF4Vtsyl4rV7KASYpQEI93aA&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Pizza Hut',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7l5PsxDNg6eF4Vtsyl4rV7KASYpQEI93aA&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7l5PsxDNg6eF4Vtsyl4rV7KASYpQEI93aA&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbnDBfSgzpVkWJH96cud7QE3wSgcCkB4q8g&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbnDBfSgzpVkWJH96cud7QE3wSgcCkB4q8g&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbnDBfSgzpVkWJH96cud7QE3wSgcCkB4q8g&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
  ];

  const curations = [
    {
      name: 'Biryani',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzTUTSiZZ-cGftv_ao7nNeSC656Mb0Qohxw&usqp=CAU',
    },
    {
      name: 'Pizza',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITXxQQ4cSLkQUGaG-qaxSq1ioDHTtwFYmWA&usqp=CAU',
    },
    {
      name: 'Burger',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgAmwgy5AM6EkXt7HrK6YamrViu7RrjS0fA&usqp=CAU',
    },
    {
      name: 'Biryani',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzTUTSiZZ-cGftv_ao7nNeSC656Mb0Qohxw&usqp=CAU',
    },
    {
      name: 'Biryani',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITXxQQ4cSLkQUGaG-qaxSq1ioDHTtwFYmWA&usqp=CAU',
    },
    {
      name: 'Biryani',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzTUTSiZZ-cGftv_ao7nNeSC656Mb0Qohxw&usqp=CAU',
    },
    {
      name: 'Biryani',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzTUTSiZZ-cGftv_ao7nNeSC656Mb0Qohxw&usqp=CAU',
    },
    {
      name: 'Biryani',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzTUTSiZZ-cGftv_ao7nNeSC656Mb0Qohxw&usqp=CAU',
    },
    {
      name: 'Pizza',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTB8X0lJN1Blpe9aos9c8-Oj7lZ0J_pDrgw&usqp=CAU',
    },
    {
      name: 'Pizza',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTB8X0lJN1Blpe9aos9c8-Oj7lZ0J_pDrgw&usqp=CAU',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ScrollView>
        <View style={{paddingHorizontal: 15, marginTop: 10}}>
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
              justifyContent: 'flex-start',
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
            style={{width: '100%', height: 180, borderRadius: 10}}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEanQp6wUDSAHZxDSPscLWhq-vwS-fGjP_Jw&usqp=CAU',
            }}
          />
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: 15, alignItems: 'center'}}>
          <Icon4 name="like" size={20} color="black" />
          <CustomText style={{marginLeft: 8, fontWeight: '800', fontSize: 15}}>
            Top Picks For You
          </CustomText>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
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
              showsHorizontalScrollIndicator={false}
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

        <Seperator />
        <CustomText
          style={{
            paddingLeft: 15,
            marginTop: 30,
            marginBottom: 10,
            fontWeight: '800',
            fontSize: 16,
          }}>
          Popular Curations
        </CustomText>
        <ScrollView
          horizontal={true}
              showsHorizontalScrollIndicator={false}
          style={{paddingLeft: 15, marginTop: 18, marginBottom: 30}}>
          {curations.map((prod, index) => {
            return (
              <View>
                <CurationsCard {...prod} />
                <CurationsCard {...prod} />
              </View>
            );
          })}
        </ScrollView>

        <Seperator />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: 10,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 15,
                marginTop: 30,
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 30,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="lightbulb" size={15} color="black" />
              </View>
              <CustomText
                style={{
                  fontWeight: '800',
                  fontSize: 16,
                  marginLeft: 10,
                }}>
                In the Spotlight
              </CustomText>
            </View>
            <CustomText
              style={{
                paddingLeft: 15,
                marginTop: 0,
                marginBottom: 10,
                fontSize: 14,
                color: 'gray',
              }}>
              Explore sponsored partner brands
            </CustomText>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText style={{fontSize: 12, fontWeight: '600'}}>
              SEE ALL
            </CustomText>
            <View
              style={{
                marginLeft: 8,
                padding: 5,
                backgroundColor: '#FF7F50',
                borderRadius: 30,
              }}>
              <Icon4 name="arrow-right" size={12} color="white" />
            </View>
          </View>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{paddingLeft: 15}}
          data={[{}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View style={{marginVertical: 20}}>
                <ProductCard />
                <ProductCard />
              </View>
            );
          }}
        />

        <Seperator />
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 15,
            marginTop: 30,
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <View
            style={{
              width: 25,
              height: 25,
              borderRadius: 30,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon2 name="restaurant" size={15} color="black" />
          </View>
          <CustomText
            style={{
              fontWeight: '800',
              fontSize: 16,
              marginLeft: 10,
            }}>
            All Restaurants Nearby
          </CustomText>
        </View>
        <CustomText
          style={{
            paddingLeft: 15,
            marginTop: 0,
            marginBottom: 10,
            fontSize: 14,
            color: 'gray',
          }}>
          Discover unique taste near you
        </CustomText>

        <FlatList
              showsHorizontalScrollIndicator={false}
              data={[{}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View style={{marginVertical: 20}}>
                <FoodCard />
              </View>
            );
          }}
        />

        <View
          style={{
            marginTop: 50,
            paddingTop: 50,
            paddingBottom: 40,
            backgroundColor: '#F4F4F5',
            paddingLeft: 20,
          }}>
          <CustomText
            style={{
              fontSize: 80,
              fontWeight: '900',
              color: 'gray',
              opacity: 0.3,
            }}>
            𝐋𝐈𝐕𝐄
          </CustomText>
          <CustomText
            style={{
              fontSize: 80,
              fontWeight: '900',
              color: 'gray',
              opacity: 0.3,
              marginTop: -40,
            }}>
            𝐅𝐎𝐑
          </CustomText>
          <CustomText
            style={{
              fontSize: 80,
              fontWeight: '900',
              color: 'gray',
              opacity: 0.3,
              marginTop: -40,
            }}>
            𝐅𝐎𝐎𝐃
          </CustomText>

          <CustomText
            style={{
              fontSize: 12,
              color: 'gray',
              opacity: 0.4,
              marginTop: 25,
              fontWeight: '700',
            }}>
            MADE BY FOOD LOVERS
          </CustomText>

          <CustomText
            style={{
              fontSize: 12,
              color: 'gray',
              opacity: 0.4,
              fontWeight: '700',
            }}>
            SWIGGY HQ. BANGALORE
          </CustomText>

          <View
            style={{
              width: 60,
              height: 2,
              backgroundColor: 'gray',
              opacity: 0.2,
              marginTop: 30,
            }}></View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
