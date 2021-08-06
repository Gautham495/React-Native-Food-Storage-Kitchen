import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {useSelector, useDispatch} from 'react-redux';
import {addToGroceries} from '../../Redux/Actions/Action';
import {getShadow} from '../../utils/Shadow';
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const Expiring = () => {
  const dispatch = useDispatch();
  const {ingredients} = useSelector(state => state.MainReducer);

  const addGroceries = item => {
    const formData = {
      id: item.id,
      ingredientName: item.ingredientName,
      confectionType: item.confectionType,
      category: item.category,
    };

    dispatch(addToGroceries(formData));
  };

  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
            Expiring
          </Text>
        </View>
        {ingredients.map(item => (
          <View
            key={Math.random()}
            style={{
              ...getShadow(2),
              borderRadius: 10,
              margin: 10,
              padding: 10,
            }}>
            {item.ingredientName ? (
              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                  Ingredient Name : {item.ingredientName}
                </Text>
              </View>
            ) : (
              <View></View>
            )}
            {item.category ? (
              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                  Ingredient Category : {item.category}
                </Text>
              </View>
            ) : (
              <View></View>
            )}
            {item.location ? (
              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                  Ingredient Location : {item.location}
                </Text>
              </View>
            ) : (
              <View></View>
            )}
            {item.confectionType ? (
              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                  Confection Type: {item.confectionType}
                </Text>
              </View>
            ) : (
              <View></View>
            )}
            {item.entryDate ? (
              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                  {`Entry Date : ${item.entryDate}`}
                </Text>
              </View>
            ) : (
              <View></View>
            )}
            {item.expiryDate ? (
              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                  Expiry Date: {item.expiryDate}
                </Text>
              </View>
            ) : (
              <View></View>
            )}
            {item.expiryDate ? (
              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                  Will Expire in {dayjs().to(item.expiryDate)}
                </Text>
              </View>
            ) : (
              <View></View>
            )}
            <View>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  backgroundColor: 'blue',
                  borderRadius: 10,
                  ...getShadow(1),
                  width: '85%',
                  padding: 10,
                  marginBottom: 10,
                  marginHorizontal: 10,
                  marginLeft:10
                }}
                onPress={() => addGroceries(item)}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    color: 'white',
                    fontSize: 17,
                  }}>
                  Add To Groceries
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Expiring;
