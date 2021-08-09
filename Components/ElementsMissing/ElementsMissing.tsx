import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addToGroceries} from '../../Redux/Actions/Action';

import {getShadow} from '../../utils/Shadow';
import dayjs from 'dayjs';
import {RootState} from '../../Redux/Reducer';
const ElementsMissing = () => {
  const {ingredients} = useSelector((state: RootState) => state.MainReducer);
  const dispatch = useDispatch();
  const addGroceries = (item: any) => {
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
        <View style={{marginVertical: 10, marginTop: 30}}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Poppins-Medium',
            }}>
            Low Quantity Ingredients
          </Text>
        </View>
        <View>
          {ingredients.map(item => {
            return (
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
                      marginLeft: 10,
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
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default ElementsMissing;
