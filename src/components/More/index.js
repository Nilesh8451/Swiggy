import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {CustomText} from '../Text';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useState} from 'react/cjs/react.development';
import Seperator from '../../components/Seperator'

const More = props => {
  const [clicked, setClicked] = useState(false);

  return (
    <View style={{paddingHorizontal: 15}}>
      <TouchableOpacity
        onPress={() => setClicked(prevState => !prevState)}
        activeOpacity={0.7}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 25,
        }}>
        <View>
          <CustomText style={{fontWeight: '600'}}>{props.name}</CustomText>
          {props.subTitle ? (
            <CustomText style={{fontSize: 12, color: 'gray', marginTop: 5}}>
              {props.subTitle}
            </CustomText>
          ) : null}
        </View>
        {props.isMore ? (
          <Icon
            name={clicked ? 'arrow-up' : 'arrow-down'}
            size={12}
            color="gray"
          />
        ) : (
          <Icon name="arrow-right" size={12} color="gray" />
        )}
      </TouchableOpacity>
      {props.isMore && clicked ? (
        <>
          <View
            style={{
              borderStyle: 'dotted',
              borderWidth: 0.2,
              borderRadius: 1,
              marginBottom: 10,
            }}></View>
          <View style={{marginBottom: 10}}>
            {props.list?.map?.((l,index) => {
              return (
                <TouchableOpacity
                key={props.name+index.toString()}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                  }}>
                  <View>
                    <CustomText>{l.name}</CustomText>
                  </View>
                  <View>
                    <Icon name="arrow-right" size={12} color="gray" />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </>
      ) : null}

      {props.bottomLine ? (
       <Seperator/>
      ) : null}
    </View>
  );
};

export default More;
