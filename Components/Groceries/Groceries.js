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
import {addToGroceries, getGroceries} from '../../Redux/Actions/Action';
import {getShadow} from '../../utils/Shadow';
import dayjs from 'dayjs';
const Groceries = ({navigation}) => {
  const dispatch = useDispatch();
  const {groceries} = useSelector(state => state.MainReducer);

  useEffect(() => {
    console.log(groceries);
  }, []);

  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
            Groceries To Buy
          </Text>
        </View>

        <View>
          {groceries.map(item => (
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

              {item.confectionType ? (
                <View style={{marginVertical: 10}}>
                  <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                    Confection Type: {item.confectionType}
                  </Text>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Groceries;
