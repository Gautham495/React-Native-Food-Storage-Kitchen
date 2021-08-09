import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {getShadow} from '../../utils/Shadow';
import dayjs from 'dayjs';
import {RootState} from '../../Redux/Reducer';
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const Filter = ({navigation}) => {
  const {ingredients} = useSelector((state: RootState) => state.MainReducer);

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
            Filter Ingredients
          </Text>
        </View>

        <View style={{marginVertical: 10, marginTop: 30}}>
          <View>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: 'blue',
                borderRadius: 10,
                ...getShadow(1),
                width: 250,
                padding: 10,
                marginBottom: 10,
                marginHorizontal: 10,
              }}
              onPress={() => navigation.navigate('Name')}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  fontSize: 17,
                }}>
                Search Ingredients by Name
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
                width: 250,
                padding: 10,
                marginBottom: 10,
                marginHorizontal: 10,
              }}
              onPress={() => navigation.navigate('BrandName')}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  fontSize: 17,
                }}>
                Search Ingredients by Brand Name
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
                width: 250,
                padding: 10,
                marginBottom: 10,
                marginHorizontal: 10,
              }}
              onPress={() => navigation.navigate('Category')}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  fontSize: 17,
                }}>
                Search Ingredients by Category
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
                width: 250,
                padding: 10,
                marginBottom: 10,
                marginLeft: 10,
              }}
              onPress={() => navigation.navigate('Location')}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  fontSize: 17,
                }}>
                Search Ingredients by Location
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
                width: 250,
                padding: 10,
                marginBottom: 10,
                marginLeft: 10,
              }}
              onPress={() => navigation.navigate('Confection')}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  fontSize: 17,
                }}>
                Search Ingredients by Confection
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {ingredients.map(item => (
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

export default Filter;
