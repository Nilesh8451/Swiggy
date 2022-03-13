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
            instamart
          </CustomText>
          <CustomText
            numberOfLines={2}
            style={{
              color: '#9A0680',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            30-35 MINS
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
            fontSize: 14,
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

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <CustomText
            style={{
              color: '#FF7F3F',
              fontSize: 30,
              paddingRight: 10,
              fontWeight: 'bold',
            }}>
            One
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
                Don't missed out
              </CustomText>
              <CustomText
                style={{
                  color: '#FF7F3F',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                Buy @₹75/mo >
              </CustomText>
            </View>
          </View>
        </View>
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
                      backgroundColor: '#F2FFE9',
                      width: 60,
                      height: 60,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={{width: 50, height: 50}}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDPtN8h6biBmjaMu5jOtZKKGzUdGmRGVatQ&usqp=CAU',
                      }}
                    />
                  </View>

                  <View
                    style={{
                      backgroundColor: '#F2FFE9',
                      width: 220,
                      height: 60,
                      paddingHorizontal: 10,
                      justifyContent: 'center',
                      marginLeft: 1,
                    }}>
                    <CustomText
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}>
                      Free delivery on first 5 orders
                    </CustomText>
                    <CustomText
                      style={{
                        fontSize: 13,
                      }}>
                      Use FROLNEW
                    </CustomText>
                  </View>
                </View>
              );
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}>
            <View>
              <CustomText
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Frequently brought items
              </CustomText>
              <CustomText
                style={{
                  color: 'gray',
                  fontSize: 13,
                }}>
                Grate options for your first order
              </CustomText>
            </View>
            <View style={{flexDirection: 'row', alignItem: 'center'}}>
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
                <InstamartCard
                  image={
                    'https://media.istockphoto.com/photos/heap-of-raw-potato-picture-id1005339436?k=20&m=1005339436&s=612x612&w=0&h=FDkAw2b69RnUAyV3LWs6UbwEZdlMgwbde4eUx52pPno='
                  }
                />
              );
            }}
          />
          <View style={{marginVertical: 20}}>
            <FlatList
              horizontal={true}
              data={[{}, {}, {}, {}]}
              renderItem={({item}) => {
                return (
                  <>
                    <Image
                      resizeMode="cover"
                      style={{
                        width: 300,
                        height: 200,
                        borderRadius: 5,
                        marginRight: 15,
                      }}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKBUg9PfcVpZHF429LsTYOjFa79w9kVI0zg&usqp=CAU',
                      }}
                    />
                    <Image
                      style={{width: 300, height: 200, marginRight: 15}}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9QlyTKKLc9bxnfId_wsaDsfnMTe08Z9DGQ&usqp=CAU',
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

            <FlatList
              numColumns={4}
              data={[
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ]}
              renderItem={({item}) => {
                return (
                  <>
                    <View
                      style={{
                        marginRight: 13,
                        borderRadius: 5,
                      }}>
                      <Image
                        style={{width: 80, height: 80, marginTop: 10}}
                        source={{
                          uri: 'https://esha.com/wp-content/uploads/2016/01/chips-packaging-01.jpg',
                        }}
                      />
                      <CustomText
                        numberOfLines={2}
                        style={{
                          fontSize: 12,
                          width: 70,
                          marginVertical: 5,
                          textAlign: 'center',
                        }}>
                        Fruits and Vegetables
                      </CustomText>
                    </View>
                    <View style={{marginRight: 13, borderRadius: 5}}>
                      <Image
                        style={{width: 80, height: 80, marginTop: 10}}
                        source={{
                          uri: 'data:image/jpeg;base64,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',
                        }}
                      />
                      <CustomText
                        numberOfLines={2}
                        style={{
                          fontSize: 12,
                          width: 70,
                          marginVertical: 5,
                          textAlign: 'center',
                        }}>
                        Fruits and Vegetables
                      </CustomText>
                    </View>
                  </>
                );
              }}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#FEE3EC',
            paddingVertical: 15,
            paddingHorizontal: 15,
            marginVertical: 40,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: '#A3423C',

                  fontWeight: 'bold',
                }}>
                Deals you shouldn't miss
              </CustomText>
              <CustomText
                style={{
                  fontSize: 18,

                  color: '#A3423C',
                }}>
                out on before they are gone!
              </CustomText>
            </View>
          </View>
          <FlatList
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}, {}, {}]}
            renderItem={({}) => {
              return (
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 5,
                    alignItems: 'center',
                    width: 120,
                    height: 180,
                    borderRadius: 8,
                    marginVertical: 10,
                    borderColor: '#A3423C',
                    borderWidth: 0.6,
                    marginRight: 20,
                  }}>
                  <CustomText
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#A3423C',
                    }}>
                    upto 50% off
                  </CustomText>
                  <CustomText
                    style={{
                      fontSize: 18,

                      color: '#A3423C',
                    }}>
                    -
                  </CustomText>
                  <CustomText
                    style={{
                      fontSize: 16,
                      color: '#A3423C',
                      textAlign: 'center',
                    }}>
                    For unstoppable Holi
                  </CustomText>
                  <Image
                    style={{width: 50, height: 50, marginVertical: 10}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiKZEWdoQW2CWng1b09uA2bJod1uW2pY6cw&usqp=CAU',
                    }}
                  />
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
            In Focus Today
          </CustomText>
          <CustomText
            style={{
              fontSize: 14,
              color: 'gray',
            }}>
            Explore more categories
          </CustomText>
          <FlatList
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 15, flexDirection: 'row'}}>
                  <Image
                    style={{
                      width: 170,
                      height: 300,
                      borderRadius: 10,
                      marginRight: 0.5,
                    }}
                    source={{
                      uri: 'https://i.pinimg.com/originals/c9/e9/9e/c9e99ea9e3618de0319c46ba6ecfa1e2.jpg',
                    }}
                  />
                  <Image
                    style={{
                      width: 170,
                      height: 300,
                      borderRadius: 5,
                      marginRight: 0.5,
                    }}
                    source={{
                      uri: 'https://as2.ftcdn.net/v2/jpg/02/30/60/43/1000_F_230604396_xIpBFK8OX63u8C6c99o2eLtuFQlqQ9CD.jpg',
                    }}
                  />
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
                      style={{width: 150, height: 150}}
                      source={{
                        uri: 'https://cpb-us-w2.wpmucdn.com/blog.smu.edu/dist/d/10/files/2010/11/heinz_ketchup_21.jpg',
                      }}>
                      <CustomText
                        style={{
                          fontSize: 18,
                          width: 100,
                          color: 'white',
                          paddingHorizontal: 10,
                          fontWeight: 'bold',
                        }}>
                        What's holi tested like
                      </CustomText>
                    </ImageBackground>
                    <ImageBackground
                      style={{width: 150, height: 150}}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Knwo1weP93D6XMQtg-T6sdAQa-L55y1_gA&usqp=CAU',
                      }}>
                      <CustomText
                        style={{
                          fontSize: 18,
                          width: 100,
                          color: 'white',
                          paddingHorizontal: 10,
                          fontWeight: 'bold',
                        }}>
                        What's holi tested like
                      </CustomText>
                    </ImageBackground>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <ImageBackground
                      style={{width: 150, height: 150}}
                      source={{
                        uri: 'https://cpb-us-w2.wpmucdn.com/blog.smu.edu/dist/d/10/files/2010/11/heinz_ketchup_21.jpg',
                      }}>
                      <CustomText
                        style={{
                          fontSize: 18,
                          width: 100,
                          color: 'white',
                          paddingHorizontal: 10,
                          fontWeight: 'bold',
                        }}>
                        What's holi tested like
                      </CustomText>
                    </ImageBackground>
                    <ImageBackground
                      style={{width: 150, height: 150}}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Knwo1weP93D6XMQtg-T6sdAQa-L55y1_gA&usqp=CAU',
                      }}>
                      <CustomText
                        style={{
                          fontSize: 18,
                          width: 100,
                          color: 'white',
                          paddingHorizontal: 10,
                          fontWeight: 'bold',
                        }}>
                        What's holi tested like
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
            data={[{}, {}, {}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 15, flexDirection: 'row'}}>
                  <ImageBackground
                    style={{
                      width: 170,
                      height: 300,
                      borderRadius: 10,
                      marginRight: 0.5,
                    }}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwZ7ywjTgqO-qeHOeCvFOmtrSQrmUU8Q-rg&usqp=CAU',
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
                      width: 170,
                      height: 300,
                      borderRadius: 50,
                      marginRight: 0.5,
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

        <View
          style={{
            backgroundColor: '#FFFCDC',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: '#A3423C',

                  fontWeight: 'bold',
                }}>
                Fresh Vegitable
              </CustomText>
              <CustomText
                style={{
                  fontSize: 18,

                  color: '#A3423C',
                }}>
                {' '}
                Vegetables that have balanced nutrients for a healthy lifestyle
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
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDvfDInFcsz3Hb6nH1Xl0SVDtQV6xiMqWfQ&usqp=CAU'
                    }
                  />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#CEE5D0',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: '#A3423C',

                  fontWeight: 'bold',
                }}>
                Breakfast needs
              </CustomText>
              <CustomText
                style={{
                  fontSize: 18,

                  color: '#A3423C',
                }}>
                {' '}
                Sorted with fresh bread and eggs
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
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHnGQIy-Ips7QPQmsp8dCn6wZpQp1aJbs8A&usqp=CAU'
                    }
                  />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#FEF5ED',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: '#A3423C',

                  fontWeight: 'bold',
                }}>
                Your Holi laundry
              </CustomText>
              <CustomText
                style={{
                  fontSize: 18,

                  color: '#A3423C',
                }}>
                {' '}
                is stored with ariel
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
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dS7HGabIfSwe_NyUJZhJkVrd4nUMTFmAGQ&usqp=CAU'
                    }
                  />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#FFCCD2',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: '#A3423C',

                  fontWeight: 'bold',
                }}>
                Staple collection
              </CustomText>
              <CustomText
                style={{
                  fontSize: 18,

                  color: '#A3423C',
                }}>
                {' '}
                All The kitchen staples are now under one roof
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
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3qBNBP9AXpHK_o_n8PGf8VXxolKY-km4Og&usqp=CAU'
                    }
                  />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#CEE5D0',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: '#A3423C',

                  fontWeight: 'bold',
                }}>
                Delicious juice & fruits drinks
              </CustomText>
              <CustomText
                style={{
                  fontSize: 18,

                  color: '#A3423C',
                }}>
                {' '}
                to whip amazing beverage & refreshment
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
                      'https://5.imimg.com/data5/IY/HN/MY-25220361/thumbsup-500x500.jpg'
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
