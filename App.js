import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Image} from 'react-native';

// import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Components/Home/Home';
import BarCode from './Components/BarCode/BarCode';
import Cart from './Components/Cart/Cart';
import Expiring from './Components/Expiring/Expiring';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const HomeScreen = () => {
//   <Stack.Navigator>
//     <Stack.Screen name="Profile" component={Profile} />
//     <Stack.Screen name="Payments Made" component={PaymentsMade} />
//   </Stack.Navigator>;
// };

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
        component={Cart}
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
