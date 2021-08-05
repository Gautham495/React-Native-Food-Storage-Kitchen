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

const Expiring = () => {
    
  const dispatch = useDispatch();
  const {ingredients} = useSelector(state => state.MainReducer);

    return (
        <View>
            
        </View>
    )
}

export default Expiring
