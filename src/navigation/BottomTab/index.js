import React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../containers/Home';
import Food from '../../containers/Food';
import Instamart from '../../containers/Instamart';
import Search from '../../containers/Search';
import Account from '../../containers/Account';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: 'white',
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={({route, navigation}) => {
            return {
              tabBarLabelStyle: navigation.isFocused()
                ? {
                    color: '#8cb133',
                    fontSize: 12,
                  }
                : {color: '#402E00', fontSize: 12},

              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    resizeMode="contain"
                    style={{height: 25, width: 25}}
                    source={{
                      uri: 'https://cdn.iconscout.com/icon/free/png-256/swiggy-1543564-1306067.png',
                    }}
                  />
                ) : (
                  <Image
                    resizeMode="contain"
                    style={{height: 25, width: 25}}
                    source={{
                      uri: 'https://cdn.iconscout.com/icon/free/png-256/swiggy-1543564-1306067.png',
                    }}
                  />
                ),
              headerShown: false,
            };
          }}
        />
        <Tab.Screen
          name="Food"
          component={Food}
          options={({route, navigation}) => {
            return {
              tabBarLabelStyle: navigation.isFocused()
                ? {
                    color: '#8cb133',
                    fontSize: 12,
                  }
                : {color: '#402E00', fontSize: 12},
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    resizeMode="contain"
                    style={{height: 30, width: 30}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeahVBxW16kypJUTRFKvTPbEqqQ9WwY_Jbow&usqp=CAU',
                    }}
                  />
                ) : (
                  <Image
                    resizeMode="contain"
                    style={{height: 30, width: 30}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeahVBxW16kypJUTRFKvTPbEqqQ9WwY_Jbow&usqp=CAU',
                    }}
                  />
                ),
              headerShown: false,
            };
          }}
        />
        <Tab.Screen
          name="Instamart"
          component={Instamart}
          options={({route, navigation}) => {
            return {
              tabBarLabelStyle: navigation.isFocused()
                ? {
                    color: '#8cb133',
                    fontSize: 12,
                  }
                : {color: '#402E00', fontSize: 12},
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    resizeMode="contain"
                    style={{height: 25, width: 25}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcU_TZlS5bsFofSMrlOWjaPnK3QcZryKmOUA&usqp=CAU',
                    }}
                  />
                ) : (
                  <Image
                    resizeMode="contain"
                    style={{height: 25, width: 25}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcU_TZlS5bsFofSMrlOWjaPnK3QcZryKmOUA&usqp=CAU',
                    }}
                  />
                ),
              headerShown: false,
            };
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={({route, navigation}) => {
            return {
              tabBarLabelStyle: navigation.isFocused()
                ? {
                    color: '#8cb133',
                    fontSize: 12,
                  }
                : {color: '#402E00', fontSize: 12},
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    resizeMode="contain"
                    style={{height: 25, width: 25}}
                    source={{
                      uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwD9A6g8PSNT7fyMuZsywBgDSqWUPKgQWpA&usqp=CAU`,
                    }}
                  />
                ) : (
                  <Image
                    resizeMode="contain"
                    style={{height: 25, width: 25}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwD9A6g8PSNT7fyMuZsywBgDSqWUPKgQWpA&usqp=CAU',
                    }}
                  />
                ),
              headerShown: false,
            };
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={({route, navigation}) => {
            return {
              tabBarLabelStyle: navigation.isFocused()
                ? {
                    color: '#8cb133',
                    fontSize: 12,
                  }
                : {color: '#402E00', fontSize: 12},
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    resizeMode="contain"
                    style={{height: 20, width: 20}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsQh8tvclNkrB57vus8zpRAo72kuSDkBOXQ&usqp=CAU',
                    }}
                  />
                ) : (
                  <Image
                    resizeMode="contain"
                    style={{height: 20, width: 20}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsQh8tvclNkrB57vus8zpRAo72kuSDkBOXQ&usqp=CAU',
                    }}
                  />
                ),
              headerShown: false,
            };
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
