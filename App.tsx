import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Components/Home/Home';
import BarCode from './Components/BarCode/BarCode';
import Cart from './Components/Cart/Cart';
import Expiring from './Components/Expiring/Expiring';
import Edit from './Components/Edit/Edit';
import Filter from './Components/Filter/Filter';
import ElementsMissing from './Components/ElementsMissing/ElementsMissing';
import Category from './Components/Filter/Category';
import Confection from './Components/Filter/Confection';
import Location from './Components/Filter/Location';
import Groceries from './Components/Groceries/Groceries';
import Name from './Components/Filter/Name';
import BrandName from './Components/Filter/BrandName';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FilterScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Groceries List"
        component={Cart}
      />
      <Stack.Screen
        name="Edit"
        component={Edit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Filter"
        component={Filter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ElementsMissing"
        component={ElementsMissing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Confection"
        component={Confection}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Location"
        component={Location}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Groceries"
        component={Groceries}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Name"
        component={Name}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BrandName"
        component={BrandName}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./Assets/grocery.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./Assets/expiry.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
        name="Expiring"
        component={Expiring}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./Assets/carts.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
        name="Cart"
        component={FilterScreens}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./Assets/barcode.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
        name="BarCode"
        component={BarCode}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
