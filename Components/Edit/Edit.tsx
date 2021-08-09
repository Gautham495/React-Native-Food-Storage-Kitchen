import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {useDispatch} from 'react-redux';
import {editIngredients} from '../../Redux/Actions/Action';
import DateTimePicker from '@react-native-community/datetimepicker';
import {getShadow} from '../../utils/Shadow';
import dayjs from 'dayjs';

var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const Edit = ({navigation, route}) => {
  const [name, setName] = useState(route.params.ingredientName);
  const [brandName, setBrandName] = useState(route.params.brandName);

  const [category, setCategory] = useState(route.params.category);
  const [location, setLocation] = useState(route.params.location);
  const [confectionType, setConfectionType] = useState(
    route.params.confectionType,
  );
  const [ripeness, setRipeness] = useState(route.params.ripeness);
  const [entryDate, setEntryDate] = useState(route.params.entryDate);

  const [expiryDate, setExpiryDate] = useState(route.params.expiryDate);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [date1, setDate1] = useState(new Date());
  const [mode1, setMode1] = useState('date');
  const [show1, setShow1] = useState(false);

  const dispatch = useDispatch();

  const onChangeStart = (event, selectedDate) => {
    setExpiryDate(selectedDate.toLocaleDateString());
    console.log(dayjs(new Date()));
    setShow(false);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const onChangeStart1 = (event, selectedDate) => {
    setEntryDate(selectedDate.toLocaleDateString());
    setShow1(false);
  };

  const showMode1 = currentMode => {
    setShow1(true);
    setMode1(currentMode);
  };

  const showDatepicker1 = () => {
    showMode1('date');
  };

  const EditIngredients = () => {
    if (name) {
      let formData = {
        id: route.params.id,
        ingredientName: name,
        brandName: brandName,
        expiryDate: expiryDate,
        entryDate: entryDate,
        category: category,
        location: location,
        confectionType: confectionType,
        ripeness: ripeness,
        timeOfCreation: dayjs(new Date()),
      };

      setName('');
      setBrandName('');

      setEntryDate('');
      setExpiryDate('');
      setCategory('');
      setLocation('');
      setConfectionType('');
      setRipeness('');
      navigation.navigate('Cart');

      dispatch(editIngredients(formData));
    } else {
      Alert.alert('Please Fill ingredient Name');
    }
  };

  const ripenessList = ['green', 'ripe/matured', 'advanced', 'too ripe'];

  const categories = ['fruit', 'vegetable', 'dairy', 'fish', 'meat', 'liquid'];
  const locations = ['pantry', 'fridge', 'freezer'];
  const confectionTypes = ['fresh', 'canned', 'frozen', 'cured'];

  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <View style={{marginVertical: 10}}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
            }}>
            Edit Details of Ingredient{' '}
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={e => setName(e)}
            value={name}
            placeholder="Ingredient Name"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={e => setBrandName(e)}
            value={brandName}
            placeholder="Brand Name"
          />
        </View>
        <View>
          <SelectDropdown
            defaultValue={route.params.category}
            data={categories}
            defaultButtonText={'Select Ingredient Category'}
            buttonStyle={styles.input}
            buttonTextStyle={{
              color: 'black',
              fontSize: 14,
              fontFamily: 'Poppins-Medium',
            }}
            onSelect={(selectedItem, index) => {
              setCategory(selectedItem);
              
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <View>
          <SelectDropdown
            defaultValue={route.params.location}
            data={locations}
            defaultButtonText={'Select Ingredient Location'}
            buttonStyle={styles.input}
            buttonTextStyle={{
              color: 'black',
              fontSize: 14,
              fontFamily: 'Poppins-Medium',
            }}
            onSelect={(selectedItem: any, index: any) => {
              setLocation(selectedItem);
              
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <View>
          <SelectDropdown
            defaultValue={route.params.confectionType}
            data={confectionTypes}
            defaultButtonText={'Select Confection Type'}
            buttonStyle={styles.input}
            buttonTextStyle={{
              color: 'black',
              fontSize: 14,
              fontFamily: 'Poppins-Medium',
            }}
            onSelect={(selectedItem, index) => {
              setConfectionType(selectedItem);
              
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        {confectionType === 'fresh' && (
          <View>
            <SelectDropdown
              data={ripenessList}
              defaultButtonText={'Select Ripeness'}
              buttonStyle={styles.input}
              buttonTextStyle={{
                color: 'black',
                fontSize: 14,
                fontFamily: 'Poppins-Medium',
              }}
              onSelect={(selectedItem, index) => {
                setRipeness(selectedItem);
                
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
        )}
        <View>
          <View>
            <View style={{marginTop: 10}}>
              <TouchableOpacity
                style={[styles.input, {alignItems: 'center', height: 50}]}
                onPress={showDatepicker1}>
                <Text style={{marginTop: 10, fontFamily: 'Poppins-Medium'}}>
                  {entryDate ? (
                    <Text>{entryDate}</Text>
                  ) : (
                    <Text style={{fontFamily: 'Poppins-Medium'}}>
                      Select Entry Date
                    </Text>
                  )}
                </Text>
              </TouchableOpacity>
            </View>
            {show1 && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date1}
                mode={mode1}
                is24Hour={true}
                display="default"
                onChange={onChangeStart1}
              />
            )}
          </View>
        </View>
        <View>
          <View>
            <View style={{marginTop: 10}}>
              <TouchableOpacity
                style={[styles.input, {alignItems: 'center', height: 50}]}
                onPress={showDatepicker}>
                <Text style={{marginTop: 10, fontFamily: 'Poppins-Medium'}}>
                  {expiryDate ? (
                    <Text>{expiryDate}</Text>
                  ) : (
                    <Text style={{fontFamily: 'Poppins-Medium'}}>
                      Select Expiry Date
                    </Text>
                  )}
                </Text>
              </TouchableOpacity>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChangeStart}
                minimumDate={new Date()}
                maximumDate={new Date(2022, 2, 17)}
              />
            )}
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: 'blue',
              borderRadius: 10,
              ...getShadow(1),
              width: 200,
              padding: 10,
              marginBottom: 30,
            }}
            onPress={() => EditIngredients()}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: 'white',
                fontSize: 17,
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    // margin: 12,
    marginVertical: 15,
    borderWidth: 1,
    width: 250,
    backgroundColor: 'white',
    ...getShadow(2),
    borderRadius: 5,
    padding: 5,
    height: 50,
    color: 'black',
    // marginBottom: 50,
    fontFamily: 'Poppins-Medium',
  },
});

export default Edit;
