import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../containers/Home';
import Food from '../../containers/Food';
import Instamart from '../../containers/Instamart';
import Search from '../../containers/Search';
import Account from '../../containers/Account';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';

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
          name="Swiggy"
          component={Home}
          options={({route, navigation}) => {
            return {
              tabBarLabelStyle: navigation.isFocused()
                ? {
                    color: 'black',
                    fontSize: 12,
                  }
                : {color: 'gray', fontSize: 12},

              tabBarIcon: ({focused}) =>
                focused ? (
                  <Icon name="home" size={25} color="black" />
                ) : (
                  <Icon name="home" size={25} color="gray" />
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
                    color: 'black',
                    fontSize: 12,
                  }
                : {color: 'gray', fontSize: 12},
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Icon2 name="fastfood" size={25} color="black" />
                ) : (
                  <Icon2 name="fastfood" size={25} color="gray" />
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
                    color: 'black',
                    fontSize: 12,
                  }
                : {color: 'gray', fontSize: 12},
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Icon2 name="fiber-smart-record" size={25} color="black" />
                ) : (
                  <Icon2 name="fiber-smart-record" size={25} color="gray" />
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
                    color: 'black',
                    fontSize: 12,
                  }
                : {color: 'gray', fontSize: 12},
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Icon3 name="search1" size={25} color="black" />
                ) : (
                  <Icon3 name="search1" size={25} color="gray" />
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
                    color: 'black',
                    fontSize: 12,
                  }
                : {color: 'gray', fontSize: 12},
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Icon4 name="account" size={25} color="black" />
                ) : (
                  <Icon4 name="account" size={25} color="gray" />
                ),
              headerShown: false,
            };
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
