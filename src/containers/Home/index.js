import React from 'react';
import {Text, View} from 'react-native';
import {ADS} from '../../components/Ads';
import LocationHeader from '../../components/LocationHeader';

function Home() {
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
      <Text style={{color: 'black'}}>Home</Text>
    </View>
  );
}

export default Home;
