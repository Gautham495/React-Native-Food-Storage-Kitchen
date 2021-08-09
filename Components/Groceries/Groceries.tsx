import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/Reducer';
import {getShadow} from '../../utils/Shadow';

const Groceries = () => {
  const {groceries} = useSelector((state: RootState) => state.MainReducer);

  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
            Groceries To Buy
          </Text>
        </View>

        <View>
          {groceries.map((item: any) => (
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
