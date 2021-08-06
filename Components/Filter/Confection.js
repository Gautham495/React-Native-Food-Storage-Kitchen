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
import {getShadow} from '../../utils/Shadow';
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const Confection = () => {
  const [searchCategory, setSearchCategory] = useState('');
  const [searchConfection, setSearchConfection] = useState('');

  const dispatch = useDispatch();
  const {ingredients} = useSelector(state => state.MainReducer);

  const filterTimeOfAddition = () => {
    const filterTime = ingredients.sort(
      (a, b) => a.timeOfCreation - b.timeOfCreation,
    );
  };

  const filterSameCategory = () => {
    const filterSameCategoryData = ingredients.filter(item => {
      if (!searchCategory) {
        return false;
      }
      if (item.category.includes(searchCategory)) {
        return true;
      }
    });
  };

  const filterSameConfectionType = () => {
    const filterSameConfectionData = ingredients.filter(item => {
      if (!searchConfection) {
        return false;
      }
      if (item.confectionType.includes(searchConfection)) {
        return true;
      }
    });
  };

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
            onChangeText={e => setSearchConfection(e)}
            value={searchConfection}
            placeholder="Search Ingredients by Confection"
          />
        </View>
        {ingredients
          .filter(item => {
            if (!searchConfection) {
              return false;
            }
            if (item.confectionType.includes(searchConfection)) {
              return true;
            }
          })
          .map(item => (
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

export default Confection;