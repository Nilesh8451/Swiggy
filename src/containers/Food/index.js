import React from 'react';
import {Text, View, FlatList, Image, ScrollView} from 'react-native';
import LocationHeader from '../../components/LocationHeader';
import FoodCard from '../../components/FoodCard';
import {CustomText} from '../../components/Text';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

function Food() {
  return (
    <View style={{flex: 1}}>
      <View style={{paddingHorizontal: 15}}>
        <LocationHeader />
      </View>
      <ScrollView>
        <View
          style={{
            borderColor: '#dddddd',
            borderWidth: 0.5,
            marginVertical: 5,
          }}></View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
            }}>
            <CustomText style={{color: 'gray', fontSize: 12}}>
              ALL RESTAURANT
            </CustomText>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Icon2 name="sort" size={20} color="black" />
              <CustomText style={{color: 'gray', fontSize: 12, marginLeft: 5}}>
                sort/filter
              </CustomText>
            </View>
          </View>

          <View
            style={{
              borderColor: '#dddddd',
              borderWidth: 0.3,
              marginVertical: 5,
            }}></View>

          <View style={{marginVertical: 10, marginHorizontal: 15}}>
            <FlatList
              horizontal={true}
              data={[{}, {}, {}, {}, {}, {}, {}]}
              renderItem={({item}) => {
                return (
                  <>
                    <View>
                      <View
                        style={{
                          backgroundColor: '#dddddd',
                          width: 50,
                          height: 30,
                          marginRight: 20,
                          marginVertical: 10,
                          borderRadius: 5,
                        }}>
                        <Icon2
                          style={{
                            marginTop: 15,
                            position: 'absolute',
                            marginLeft: 15,
                          }}
                          name="wallet-membership"
                          size={20}
                          color="black"
                        />
                      </View>
                      <CustomText
                        numberOfLines={2}
                        style={{
                          color: 'gray',
                          fontSize: 12,
                          width: 50,
                          textAlign: 'center',
                        }}>
                        Offers near you
                      </CustomText>
                      <Text numberOfLines={2}></Text>
                    </View>
                  </>
                );
              }}
            />
          </View>
          <FlatList
            data={[{}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 10}}>
                  <FoodCard />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            borderColor: 'black',
            borderWidth: 0.3,
            marginVertical: 1,
            marginHorizontal: 15,
          }}></View>
        <View style={{marginVertical: 10}}>
          <CustomText
            style={{paddingHorizontal: 15, marginTop: 20, fontWeight: 'bold'}}>
            Popular Brands
          </CustomText>

          <FlatList
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 10, marginHorizontal: 10}}>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      // overflow: 'hidden',
                      borderRadius: 50,
                      backgroundColor: 'red',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={{width: 60, height: 60, borderRadius: 50}}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Jk1d3h24fYYxkPNMOu0gRVrR8Ls5tkduLb55o1jFHXvoo3OtSZjGY9QK2oK6aJCcOdU&usqp=CAU',
                      }}
                    />
                  </View>
                  <CustomText
                    // numberOfLines={1}
                    style={{
                      color: 'gray',
                      fontSize: 12,
                      width: 70,
                      textAlign: 'center',
                    }}>
                    DOMINO'S PIZZA
                  </CustomText>
                </View>
              );
            }}
          />
        </View>

        <View
          style={{
            borderColor: 'black',
            borderWidth: 0.3,
            marginVertical: 1,
            marginHorizontal: 15,
          }}></View>
        <FlatList
          data={[{}, {}]}
          renderItem={({item}) => {
            return (
              <View style={{marginVertical: 10}}>
                <FoodCard />
              </View>
            );
          }}
        />

        <View
          style={{
            borderColor: 'black',
            borderWidth: 0.3,
            marginVertical: 10,
            marginHorizontal: 15,
          }}></View>
        <View>
          <CustomText
            style={{paddingHorizontal: 15, marginTop: 20, fontWeight: 'bold'}}>
            Restaurants Current For
          </CustomText>

          <FlatList
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 10, marginHorizontal: 10}}>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      // overflow: 'hidden',
                      borderRadius: 50,
                      backgroundColor: 'red',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={{width: 60, height: 60, borderRadius: 50}}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Jk1d3h24fYYxkPNMOu0gRVrR8Ls5tkduLb55o1jFHXvoo3OtSZjGY9QK2oK6aJCcOdU&usqp=CAU',
                      }}
                    />
                  </View>
                  <CustomText
                    // numberOfLines={1}
                    style={{
                      color: 'gray',
                      fontSize: 12,
                      width: 70,
                      textAlign: 'center',
                    }}>
                    DOMINO'S PIZZA
                  </CustomText>
                </View>
              );
            }}
          />
        </View>

        <View
          style={{
            borderColor: 'black',
            borderWidth: 0.3,
            marginVertical: 1,
            marginHorizontal: 15,
          }}></View>
        <FlatList
          data={[{}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View style={{marginVertical: 10}}>
                <FoodCard />
              </View>
            );
          }}
        />
        <View
          style={{
            borderColor: 'black',
            borderWidth: 0.3,
            marginVertical: 1,
            marginHorizontal: 15,
          }}></View>

        <View style={{marginVertical: 20, marginBottom: 30, paddingright: 15}}>
          <CustomText
            style={{
              paddingHorizontal: 15,
              marginTop: 20,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Only on Swiggy
          </CustomText>

          <FlatList
            horizontal={true}
            data={[{}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 10}}>
                  <FoodCard />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            borderColor: 'black',
            borderWidth: 0.3,
            marginVertical: 1,
            marginHorizontal: 15,
          }}></View>
        <FlatList
          data={[{}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View style={{marginVertical: 10}}>
                <FoodCard />
              </View>
            );
          }}
        />
        <View
          style={{
            borderColor: 'black',
            borderWidth: 0.3,
            marginVertical: 1,
            marginHorizontal: 15,
          }}></View>

        <View style={{marginVertical: 20, marginBottom: 30, paddingright: 15}}>
          <CustomText
            style={{
              paddingHorizontal: 15,
              marginTop: 20,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Express Delivery
          </CustomText>

          <FlatList
            horizontal={true}
            data={[{}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 10}}>
                  <FoodCard />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            borderColor: 'black',
            borderWidth: 0.3,
            marginVertical: 1,
            marginHorizontal: 15,
          }}></View>

        <FlatList
          data={[{}, {}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View style={{marginVertical: 10}}>
                <FoodCard />
              </View>
            );
          }}
        />
        <View
          style={{
            borderColor: 'black',
            borderWidth: 0.3,
            marginVertical: 1,
            marginHorizontal: 15,
          }}></View>

        <View style={{marginVertical: 20, marginBottom: 30, paddingright: 15}}>
          <CustomText
            style={{
              paddingHorizontal: 15,
              marginTop: 20,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            What's New
          </CustomText>

          <FlatList
            horizontal={true}
            data={[{}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 10}}>
                  <FoodCard />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            borderColor: 'black',
            borderWidth: 0.3,
            marginVertical: 1,
            marginHorizontal: 15,
          }}></View>

        <FlatList
          data={[{}, {}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View style={{marginVertical: 10}}>
                <FoodCard />
              </View>
            );
          }}
        />
        <View
          style={{
            borderColor: 'black',
            borderWidth: 0.3,
            marginVertical: 1,
            marginHorizontal: 15,
          }}></View>

        <View style={{marginVertical: 20, marginBottom: 30, paddingright: 15}}>
          <CustomText
            style={{
              paddingHorizontal: 15,
              marginTop: 20,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Vegetarian Option
          </CustomText>

          <FlatList
            horizontal={true}
            data={[{}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 10}}>
                  <FoodCard />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            borderColor: 'black',
            borderWidth: 0.3,
            marginVertical: 1,
            marginHorizontal: 15,
          }}></View>

        <FlatList
          data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View style={{marginVertical: 10}}>
                <FoodCard />
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
}

export default Food;
