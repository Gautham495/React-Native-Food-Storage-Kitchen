import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {useDispatch} from 'react-redux';
import {addIngredient} from '../../Redux/Actions/Action';
import DateTimePicker from '@react-native-community/datetimepicker';
import {getShadow} from '../../utils/Shadow';
import dayjs from 'dayjs';

var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const Home = ({navigation}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [confectionType, setConfectionType] = useState('');

  const [entryDate, setEntryDate] = useState('');

  const [expiryDate, setExpiryDate] = useState('');
  const [ripeness, setRipeness] = useState('');
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

  const addIngredients = () => {
    if (name) {
      let formData = {
        id: Math.random(),
        ingredientName: name,
        expiryDate: expiryDate,
        entryDate: entryDate,
        category: category,
        location: location,
        confectionType: confectionType,
        ripeness: ripeness,
        timeOfCreation: dayjs(new Date()),
      };

      setName('');
      setEntryDate('');
      setExpiryDate('');
      setCategory('');
      setLocation('');
      setConfectionType('');
      setRipeness('');
      // dropdownRef1.current.reset();
      // dropdownRef2.current.reset();
      // dropdownRef3.current.reset();

      dispatch(addIngredient(formData));
    } else {
      alert('Please Fill ingredient Name');
    }
  };

  const ripenessList = ['green', 'ripe/matured', 'advanced', 'too ripe'];

  const categories = [
    'fruit',
    'vegetable',
    'dairy',
    'fish',
    'meat',
    'liquid',
  ];
  const locations = ['pantry', 'fridge', 'freezer'];
  const confectionTypes = ['fresh', 'canned', 'frozen', 'cured'];

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
            Enter Details of Ingredient{' '}
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
          <SelectDropdown
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
              console.log(selectedItem, index);
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
            // ref={dropdownRef1}
            data={locations}
            defaultButtonText={'Select Ingredient Location'}
            buttonStyle={styles.input}
            buttonTextStyle={{
              color: 'black',
              fontSize: 14,
              fontFamily: 'Poppins-Medium',
            }}
            onSelect={(selectedItem, index) => {
              setLocation(selectedItem);
              console.log(selectedItem, index);
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
            // ref={dropdownRef2}
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
              console.log(selectedItem, index);
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
                console.log(selectedItem, index);
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
            onPress={() => addIngredients()}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: 'white',
                fontSize: 17,
              }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
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

export default Home;
