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
import DateTimePicker from '@react-native-community/datetimepicker';
import {getShadow} from '../../utils/Shadow';
const Home = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [confectionType, setConfectionType] = useState('');

  // const [entryDate, setEntryDate] = useState('');

  const [expiryDate, setExpiryDate] = useState('');

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const {ingredients} = useSelector(state => state.MainReducer);

  const onChangeStart = (event, selectedDate) => {
    // setStartDate(dayjs(selectedDate).format('DD-MM-YYYY'));
    setExpiryDate(selectedDate.toLocaleDateString());
    setShow(false);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const addIngredients = () => {
    let formData = {
      ingredientName: name,
      expiryDate: expiryDate,
      category: category,
      location: location,
      confectionType: confectionType,
    };

    dispatch(addIngredient(formData));
  };

  const ripeness = [
    {id: '1', title: 'green'},
    {id: '2', title: 'ripe/matured'},
    {id: '3', title: 'advanced'},
    {id: '4', title: 'too ripe'},
  ];

  const categories = ['fruit', 'vegetable', 'dairy', 'fish', 'meat', 'liquid'];
  const locations = ['pantry', 'fridge', 'freezer'];
  const confectionTypes = ['fresh', 'canned', 'frozen', 'cured'];

  return (
    <View style={{alignItems: 'center'}}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={e => setName(e)}
          value={name}
          placeholder="Ingredient Name*"
        />
      </View>
      <View>
        <SelectDropdown
          data={categories}
          defaultButtonText={'Select Ingredient Category'}
          buttonStyle={styles.input}
          buttonTextStyle={{color: 'black', fontSize: 14}}
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
          data={locations}
          defaultButtonText={'Select Ingredient Location'}
          buttonStyle={styles.input}
          buttonTextStyle={{color: 'black', fontSize: 14}}
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
          data={confectionTypes}
          defaultButtonText={'Select Confection Type'}
          buttonStyle={styles.input}
          buttonTextStyle={{color: 'black', fontSize: 14}}
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
      <View>
        <View>
          <View style={{marginTop: 10}}>
            <TouchableOpacity
              style={[styles.input, {alignItems: 'center', height: 50}]}
              onPress={showDatepicker}>
              <Text style={{marginTop: 10, fontFamily: 'Poppins-Medium'}}>
                {date ? (
                  <Text>{date}</Text>
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
          }}
          onPress={() => addIngredients()}>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 17}}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    width: 250,
    backgroundColor: 'white',
    ...getShadow(2),
    borderRadius: 5,
    padding: 5,
    height: 50,
    color: 'black',
    marginBottom: 50,
  },
});

export default Home;

// let options = [
//   {id: '1', title: 'fruit'},
//   {id: '2', title: 'vegetable'},
//   {id: '3', title: 'dairy'},
//   {id: '4', title: 'meat'},
//   {id: '5', title: 'fish'},
//   {id: '6', title: 'liquid'},
// ];

// let o = [
//   {id: '1', title: 'pantry'},
//   {id: '2', title: 'fridge'},
//   {id: '3', title: 'freezer'},
// ];

// let p = [
//   {id: '1', title: 'fresh'},
//   {id: '2', title: 'canned'},
//   {id: '3', title: 'frozen'},
//   {id: '4', title: 'cured'},
// ];
