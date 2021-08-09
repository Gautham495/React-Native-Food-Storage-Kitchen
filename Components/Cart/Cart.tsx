import React, {useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {getShadow} from '../../utils/Shadow';
import dayjs from 'dayjs';
import {RootState} from '../../Redux/Reducer';
const Cart = ({navigation}) => {
  const {ingredients} = useSelector((state: RootState) => state.MainReducer);

  const navigateToEdit = (item: any) => {
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
          {ingredients.map((item: any) => (
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
               {item.brandName ? (
                <View style={{marginVertical: 10}}>
                  <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                    Brand Name : {item.brandName}
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
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  backgroundColor: 'blue',
                  borderRadius: 10,
                  ...getShadow(1),
                  width: 200,
                  padding: 10,
                  marginBottom: 30,
                  marginLeft:20
                }}
                onPress={() => navigateToEdit(item)}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    color: 'white',
                    fontSize: 17,
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;
