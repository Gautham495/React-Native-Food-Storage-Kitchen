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

const Cart = () => {
  const dispatch = useDispatch();
  const {ingredients} = useSelector(state => state.MainReducer);

  return (
    <ScrollView>
      <View>
        <Text>Cart</Text>
      </View>
      <View>
        {ingredients.map(item => (
          <View key={Math.random()}>
            <View>
              <Text>{item.ingredientName}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Cart;
