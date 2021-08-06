import React, {useState, useEffect} from 'react';
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
const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const {ingredients} = useSelector(state => state.MainReducer);

  useEffect(() => {
    console.log(
      ingredients.map(item => {
        var size = Object.keys(item).length;
        return size;
      }),
    );
  }, []);

  const navigateToEdit = item => {
    navigation.navigate('Edit', {
      id: item.id,
      ingredientName: item.ingredientName,
      expiryDate: item.expiryDate,
      entryDate: item.entryDate,
      category: item.category,
      location: item.location,
      ripeness: item.ripeness,
      confectionType: item.confectionType,
    });
  };

  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <View style={{marginVertical: 10, marginTop: 30}}>
          <View>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: 'blue',
                borderRadius: 10,
                ...getShadow(1),
                width: 300,
                padding: 10,
                marginBottom: 10,
              }}
              onPress={() => navigation.navigate('ElementsMissing')}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  fontSize: 17,
                }}>
                Missing Ingredients
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: 'blue',
                borderRadius: 10,
                ...getShadow(1),
                width: 300,
                padding: 10,
                marginBottom: 10,
                marginVertical: 10,
              }}
              onPress={() => navigation.navigate('Filter')}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  fontSize: 17,
                }}>
                Filter Ingredients
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: 'blue',
              borderRadius: 10,
              ...getShadow(1),
              width: 300,
              padding: 10,
              marginBottom: 10,
            }}
            onPress={() => navigation.navigate('Groceries')}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: 'white',
                fontSize: 17,
              }}>
              Grocery Lists
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 10, marginTop: 30}}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Poppins-Medium',
            }}>
            Cart
          </Text>
        </View>
        <View>
          {ingredients.map(item => (
            <TouchableOpacity
              key={Math.random()}
              onPress={() => navigateToEdit(item)}>
              <View
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
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;
