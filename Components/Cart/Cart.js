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
import {addIngredient, getIngredients} from '../../Redux/Actions/Action';
import {getShadow} from '../../utils/Shadow';
import dayjs from 'dayjs'
const Cart = () => {
  const dispatch = useDispatch();
  const {ingredients} = useSelector(state => state.MainReducer);

  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>Cart</Text>
        </View>
        <View>
          {ingredients.map(item => (
            <View
              key={Math.random()}
              style={{
                ...getShadow(2),
                borderRadius: 10,
                margin: 10,
                padding: 10,
              }}>
              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                  Ingredient Name : {item.ingredientName}
                </Text>
              </View>
              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>Ingredient Category : {item.category}</Text>
              </View>
              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>Ingredient Location : {item.location}</Text>
              </View>
              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>Confection Type: {item.confectionType}</Text>
              </View>
              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>Expiry Date: {item.expiryDate}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;
