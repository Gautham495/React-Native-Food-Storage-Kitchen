import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {getShadow} from '../../utils/Shadow';
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
import { RootState } from '../../Redux/Reducer';

const Category = () => {
  const [searchCategory, setSearchCategory] = useState('');

  const {ingredients} = useSelector((state:RootState) => state.MainReducer);
 
   return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
            Filter
          </Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            onChangeText={e => setSearchCategory(e)}
            value={searchCategory}
            placeholder="Search Ingredients by Category"
          />
        </View>

      
        {ingredients.filter((item:any) => {
            if (!searchCategory) {
              return false;
            }
            if (item.category.includes(searchCategory.toLowerCase())) {
              return true;
            }
          })
          .map((item:any) => (
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
              {item.expiryDate ? (
                <View style={{marginVertical: 10}}>
                  <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                    Will Expire in {dayjs().to(item.expiryDate)}
                  </Text>
                </View>
              ) : (
                <View></View>
              )}
              {item.timeOfCreation && (
                <View style={{marginVertical: 10}}>
                  <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                    Ingredient Created {dayjs().to(item.timeOfCreation)} ...
                  </Text>
                </View>
              )}
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 15,
    borderWidth: 1,
    width: 250,
    backgroundColor: 'white',
    ...getShadow(2),
    borderRadius: 5,
    padding: 5,
    height: 50,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
});

export default Category;
