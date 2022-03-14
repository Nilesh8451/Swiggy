import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {CustomText} from '../../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InstamartCard from '../../components/InstamartCard';
import Icon4 from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';

function Instamart() {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginTop: 30,
            alignItems: 'center',
          }}>
          <CustomText
            style={{
              color: '#9A0680',
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            iຖŞtค๓คrt
          </CustomText>
        </View>
        <View
          style={{
            borderColor: 'orange',
            borderWidth: 0.3,
            marginHorizontal: 15,
            marginVertical: 5,
          }}></View>
        <CustomText
          numberOfLines={2}
          style={{
            color: '#9A0680',
            fontSize: 13,
            marginHorizontal: 15,
          }}>
          POWERED BY SWIGGY
        </CustomText>
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            paddingBottom: 20,
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              width: '100%',
              height: 50,
              borderColor: '#dddddd',
              borderWidth: 0.5,
              paddingLeft: 20,
              borderRadius: 5,
              backgroundColor: 'white',
            }}
            placeholder="Search for items in instamart "
            placeholderTextColor={'gray'}
          />
          <AntDesign style={{marginLeft: -40}} name="search1" size={22} />
        </View>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['white', 'rgba(255, 128, 198 ,0.5)']}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 8,
            marginHorizontal: 15,
          }}>
          <CustomText
            style={{
              color: '#FF7F3F',
              fontSize: 30,
              paddingRight: 10,
              fontWeight: 'bold',
            }}>
            ꪮꪀꫀ
          </CustomText>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <CustomText
                style={{
                  fontSize: 12,
                  marginRight: 5,
                }}>
                Get
              </CustomText>
              <CustomText
                numberOfLines={1}
                style={{
                  fontWeight: 'bold',
                  fontSize: 12,
                }}>
                Unlimited Free Delivery above just ₹199!
              </CustomText>
            </View>
            <View style={{flexDirection: 'row'}}>
              <CustomText
                style={{
                  fontSize: 12,
                }}>
                Don't missed out{' '}
              </CustomText>
              <CustomText
                style={{
                  color: '#FF7F3F',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                Buy @₹75/month {'>>'}
              </CustomText>
            </View>
          </View>
        </LinearGradient>

        <View style={{paddingHorizontal: 15}}>
          <CustomText
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginVertical: 15,
            }}>
            Coupons for you
          </CustomText>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[{}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{flexDirection: 'row', marginRight: 10}}>
                  <View
                    style={{
                      backgroundColor: '#b9faf2',
                      padding: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      resizeMode="contain"
                      style={{width: 50, height: 50, borderRadius: 5}}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmyWF8BSixpltiRjUYNVoM39t9NVUlC9lng&usqp=CAU',
                      }}
                    />
                  </View>

                  <View
                    style={{
                      backgroundColor: '#9bd4cd',
                      width: 220,
                      // height: 60,
                      paddingHorizontal: 10,
                      justifyContent: 'center',
                      marginLeft: 1,
                    }}>
                    <CustomText
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}>
                      Free delivery on first 2 orders
                    </CustomText>
                    <CustomText
                      style={{
                        fontSize: 13,
                      }}>
                      Use Code FASTTWO
                    </CustomText>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={{paddingHorizontal: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginVertical: 15,
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View>
              <CustomText
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Frequently brought items
              </CustomText>
              <CustomText
                style={{
                  color: 'gray',
                  fontSize: 12,
                }}>
                Grate options for your first order
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
                  backgroundColor: 'orange',
                  borderRadius: 30,
                }}>
                <Icon4 name="arrow-right" size={12} color="white" />
              </View>
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <InstamartCard
                  image={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdoY5yKA3R6zQn_ZrCGPHJsYV2QoNZo_Nzww&usqp=CAU'
                  }
                />
              );
            }}
          />
          <View style={{marginVertical: 20}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={[{}, {}, {}, {}]}
              renderItem={({item}) => {
                return (
                  <>
                    <Image
                      resizeMode="cover"
                      style={{
                        width: 280,
                        height: 180,
                        borderRadius: 5,
                        marginRight: 15,
                      }}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7nMr_qjiT00CVZESzzdRRJWgsJG34Amykg&usqp=CAU',
                      }}
                    />
                    <Image
                      style={{width: 280, height: 180, marginRight: 15}}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDoF03InixkFf05LEnbcTcIzP33J0wmHQPw&usqp=CAU',
                      }}
                    />
                  </>
                );
              }}
            />
          </View>
          <View>
            <CustomText
              numberOfLines={2}
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginVertical: 5,
              }}>
              Shop by category
            </CustomText>
            <View style={{alignItems: 'center'}}>
              <FlatList
                numColumns={4}
                data={[
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa13z5dI0EO8N9tghVZSHSGhTT0iqbhyrMvg&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnhcBGvC7kgq11ave8mhMbbGZI6Pf1IDUkw&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3G40jnzD2Q7rgPDJwE_CIuFGPuYAkliR5w&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDw0zfbjExXcN9ajtY8DpFJZBBGak2nIjAvw&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOu3y8mMz_myEB90OA-9m7a0WoNTN1_TUvzw&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1bPJyZFSVNJArocOLzfbkRMC5_GsbZFUfw&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrE7tfAUNho0I9lQzKYLKUSOZV9Gtz2LjsVw&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmKQQcKahvWsP6iwmB8X4Eohtpz93kFEa6Q&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOu3y8mMz_myEB90OA-9m7a0WoNTN1_TUvzw&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1bPJyZFSVNJArocOLzfbkRMC5_GsbZFUfw&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrE7tfAUNho0I9lQzKYLKUSOZV9Gtz2LjsVw&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmKQQcKahvWsP6iwmB8X4Eohtpz93kFEa6Q&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOu3y8mMz_myEB90OA-9m7a0WoNTN1_TUvzw&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1bPJyZFSVNJArocOLzfbkRMC5_GsbZFUfw&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrE7tfAUNho0I9lQzKYLKUSOZV9Gtz2LjsVw&usqp=CAU',
                  },
                  {
                    name: 'Paneer',
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmKQQcKahvWsP6iwmB8X4Eohtpz93kFEa6Q&usqp=CAU',
                  },
                ]}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <>
                      <View
                        style={{
                          marginRight: 10,
                          borderRadius: 5,
                        }}>
                        <Image
                          style={{
                            width: 75,
                            height: 75,
                            marginTop: 10,
                            borderRadius: 10,
                          }}
                          source={{
                            uri: item.uri,
                          }}
                        />
                        <CustomText
                          numberOfLines={2}
                          style={{
                            fontSize: 13,
                            marginVertical: 5,
                            textAlign: 'center',
                            lineHeight: 19,
                            fontWeight: '600',
                            opacity: 0.7,
                          }}>
                          {item.name}
                        </CustomText>
                      </View>
                    </>
                  );
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'rgba(38, 87, 235,0.1)',
            paddingVertical: 15,
            paddingHorizontal: 15,
            marginVertical: 40,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: 'red',

                  fontWeight: 'bold',
                }}>
                Deals you shouldn't miss{' '}
                <CustomText
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                    color: 'red',
                  }}>
                  out on before they are gone!
                </CustomText>
              </CustomText>
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}, {}, {}]}
            renderItem={({}) => {
              return (
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 5,
                    alignItems: 'center',
                    width: 130,
                    height: 145,
                    borderRadius: 8,
                    marginVertical: 10,
                    borderColor: 'black',
                    borderWidth: 0.6,
                    marginRight: 20,
                    overflow: 'hidden',
                  }}>
                  <CustomText
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: 'red',
                    }}>
                    upto 70% off
                  </CustomText>
                  <CustomText
                    style={{
                      fontSize: 18,
                      color: '#A3423C',
                    }}>
                    ---
                  </CustomText>
                  <CustomText
                    style={{
                      fontSize: 16,
                      color: '#A3423C',
                      textAlign: 'center',
                    }}>
                    Fruits Market
                  </CustomText>
                  <Image
                    style={{width: 90, height: 80, marginTop: 10}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT67evcrI2WUip8dtI0FP7awtxE6eQpXuHajg&usqp=CAU',
                    }}
                  />
                </View>
              );
            }}
          />
        </View>

        <View
          style={{
            paddingHorizontal: 15,
          }}>
          <CustomText
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Explore more categories
          </CustomText>
          <FlatList
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{flexDirection: 'column', marginVertical: 15}}>
                  <View style={{flexDirection: 'row'}}>
                    <ImageBackground
                      style={{
                        width: 160,
                        height: 180,
                        marginRight: 20,
                        borderRadius: 10,
                        overflow: 'hidden',
                      }}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAJ0diw-sm_H6SsnIgvOn22Du3MzrKye7ng&usqp=CAU',
                      }}>
                      <CustomText
                        style={{
                          fontSize: 18,
                          width: 100,
                          color: 'white',
                          paddingHorizontal: 10,
                          fontWeight: 'bold',
                          marginTop: 10,
                          marginLeft: 5,
                        }}>
                        Engery Drink To Bring You Back
                      </CustomText>
                    </ImageBackground>
                    <ImageBackground
                      style={{
                        width: 160,
                        height: 180,
                        marginRight: 20,
                        borderRadius: 10,
                        overflow: 'hidden',
                      }}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-9iBn1400BrZ_S38MIyFyl6SDmlq7jWjgw&usqp=CAU',
                      }}>
                      <CustomText
                        style={{
                          fontSize: 18,
                          width: 100,
                          color: 'white',
                          paddingHorizontal: 10,
                          fontWeight: 'bold',
                          marginTop: 10,
                          marginLeft: 5,
                        }}>
                        Drink And Fire On Alarms
                      </CustomText>
                    </ImageBackground>
                  </View>

                  <View style={{flexDirection: 'row', marginTop: 20}}>
                    <ImageBackground
                      style={{
                        width: 160,
                        height: 180,
                        marginRight: 20,
                        borderRadius: 10,
                        overflow: 'hidden',
                      }}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8G3i5eVr2unVT8XgUf5Vsa7WBR3mzrs5GXA&usqp=CAU',
                      }}>
                      <CustomText
                        style={{
                          fontSize: 18,
                          width: 100,
                          color: 'white',
                          paddingHorizontal: 10,
                          fontWeight: 'bold',
                          marginTop: 10,
                          marginLeft: 5,
                        }}>
                        Coco Cola To Show You Like Cool
                      </CustomText>
                    </ImageBackground>
                    <ImageBackground
                      style={{
                        width: 160,
                        height: 180,
                        marginRight: 20,
                        borderRadius: 20,
                        overflow: 'hidden',
                      }}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofcR4yxMBn2LXTJ-gj_HKI3YTLBDnDlE5pg&usqp=CAU',
                      }}>
                      <CustomText
                        style={{
                          fontSize: 18,
                          width: 100,
                          color: 'white',
                          paddingHorizontal: 10,
                          fontWeight: 'bold',
                          marginTop: 10,
                          marginLeft: 5,
                        }}>
                        Hope You Are Doing Good
                      </CustomText>
                    </ImageBackground>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 20,
            paddingHorizontal: 15,
          }}>
          <CustomText
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Household favourite
          </CustomText>
          <CustomText
            style={{
              fontSize: 14,
              color: 'gray',
            }}>
            Items from your trusted
          </CustomText>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[{}, {}, {}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 15, flexDirection: 'row'}}>
                  <ImageBackground
                    style={{
                      width: 140,
                      height: 200,
                      borderRadius: 10,
                      marginRight: 15,
                    }}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXBQoktmdoYUPtf410rrDH65omGF7QdEThQ&usqp=CAU',
                    }}>
                    <View
                      style={{
                        backgroundColor: 'white',
                        borderRadius: 50,
                        width: 80,
                        height: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 20,
                      }}>
                      <Image
                        style={{width: 50, height: 50}}
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwZ7ywjTgqO-qeHOeCvFOmtrSQrmUU8Q-rg&usqp=CAU',
                        }}
                      />
                    </View>
                    <CustomText
                      style={{
                        fontSize: 16,
                        color: 'white',
                        marginVertical: 5,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      Beauty at it Best
                    </CustomText>
                  </ImageBackground>
                  <ImageBackground
                    style={{
                      width: 140,
                      height: 200,
                      borderRadius: 50,
                      marginRight: 15,
                    }}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXa4IaPrO5EgpP309LbgtEgdG19GeAizP4g&usqp=CAU',
                    }}>
                    <View
                      style={{
                        backgroundColor: 'white',
                        borderRadius: 50,
                        width: 80,
                        height: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 20,
                      }}>
                      <Image
                        style={{width: 50, height: 50, borderRadius: 50}}
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXa4IaPrO5EgpP309LbgtEgdG19GeAizP4g&usqp=CAU',
                        }}
                      />
                    </View>
                    <CustomText
                      style={{
                        fontSize: 16,
                        color: 'white',
                        marginVertical: 5,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      Beauty at it Best
                    </CustomText>
                  </ImageBackground>
                </View>
              );
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginVertical: 15,
            marginHorizontal: 15,
          }}>
          <View>
            <CustomText
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              The Universal Happiness!
            </CustomText>
            <CustomText
              style={{
                color: 'gray',
                fontSize: 13,
              }}>
              Just one bite to take you into the world of warmth & happiness
              this Holi.
            </CustomText>
          </View>
          <View style={{flexDirection: 'row', alignItem: 'center', right: 20}}>
            <CustomText
              style={{
                fontSize: 13,
                marginRight: 5,
                fontWeight: 'bold',
              }}>
              SEE ALL
            </CustomText>
            <View
              style={{
                backgroundColor: '#F14A16',
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <CustomText
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                >
              </CustomText>
            </View>
          </View>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={[{}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginHorizontal: 10,
                }}>
                <InstamartCard
                  image={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGSW_IomSz5fhL9kOCZk1YH623j-JlLZ_gg&usqp=CAU'
                  }
                />
              </View>
            );
          }}
        />
        <View
          style={{
            borderColor: '#dddddd',
            borderWidth: 0.5,
            marginHorizontal: 15,
            marginVertical: 20,
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginVertical: 15,
            marginHorizontal: 15,
          }}>
          <View>
            <CustomText
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Unlimited Protection!
            </CustomText>
            <CustomText
              style={{
                color: 'gray',
                fontSize: 13,
              }}>
              Sheild yourself and your loved ones from illness causing germs
            </CustomText>
          </View>
          <View style={{flexDirection: 'row', alignItem: 'center', right: 50}}>
            <CustomText
              style={{
                fontSize: 13,
                marginRight: 5,
                fontWeight: 'bold',
              }}>
              SEE ALL
            </CustomText>
            <View
              style={{
                backgroundColor: '#F14A16',
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <CustomText
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                >
              </CustomText>
            </View>
          </View>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={[{}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginHorizontal: 10,
                }}>
                <InstamartCard
                  image={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxhIeUv8oqQGf4h3YNrMm9JP9fN0ts7a6Nw&usqp=CAU'
                  }
                />
              </View>
            );
          }}
        />

        <View
          style={{
            backgroundColor: '#B8E4F0',
            paddingVertical: 10,
            paddingHorizontal: 15,
            marginTop: 20,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: '#A3423C',

                  fontWeight: 'bold',
                }}>
                Irresistible offers
              </CustomText>
              <CustomText
                style={{
                  fontSize: 18,

                  color: '#A3423C',
                }}>
                {' '}
                are waiting for yoy
              </CustomText>
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 20,
                  }}>
                  <InstamartCard
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtim-JlM5hZh4q2IoR14y60k1Bjmt1WNVMkv9b8zj3pBBz3e9NFXip36AM0_uVFormrsI&usqp=CAU'
                    }
                  />
                </View>
              );
            }}
          />
        </View>

      </ScrollView>
    </View>
  );
}

export default Instamart;
