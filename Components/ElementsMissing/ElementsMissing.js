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
import {addIngredient, getIngredients} from '../../Redux/Actions/Action';
import {getShadow} from '../../utils/Shadow';
import dayjs from 'dayjs';
const ElementsMissing = () => {
  const dispatch = useDispatch();
  const {ingredients} = useSelector(state => state.MainReducer);

  

  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
      <View style={{marginVertical: 10, marginTop:30}}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Poppins-Medium',
            }}>
            Elements Missing
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
                      <Text
                        style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                        Ingredient Name : {item.ingredientName}
                      </Text>
                    </View>
                  ) : (
                    <View></View>
                  )}
                  {item.category ? (
                    <View style={{marginVertical: 10}}>
                      <Text
                        style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                        Ingredient Category : {item.category}
                      </Text>
                    </View>
                  ) : (
                    <View></View>
                  )}
                  {item.location ? (
                    <View style={{marginVertical: 10}}>
                      <Text
                        style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                        Ingredient Location : {item.location}
                      </Text>
                    </View>
                  ) : (
                    <View></View>
                  )}
                  {item.confectionType ? (
                    <View style={{marginVertical: 10}}>
                      <Text
                        style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                        Confection Type: {item.confectionType}
                      </Text>
                    </View>
                  ) : (
                    <View></View>
                  )}
                  {item.entryDate ? (
                    <View style={{marginVertical: 10}}>
                      <Text
                        style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                        {`Entry Date : ${item.entryDate}`}
                      </Text>
                    </View>
                  ) : (
                    <View></View>
                  )}
                  {item.expiryDate ? (
                    <View style={{marginVertical: 10}}>
                      <Text
                        style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                        Expiry Date: {item.expiryDate}
                      </Text>
                    </View>
                  ) : (
                    <View></View>
                  )}
                  {item.expiryDate ? (
                    <View style={{marginVertical: 10}}>
                      <Text
                        style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                        Will Expire in {dayjs().to(item.expiryDate)}
                      </Text>
                    </View>
                  ) : (
                    <View></View>
                  )}
                </View>
              );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default ElementsMissing;
