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
import {addIngredient, getIngredients} from '../../Redux/Actions/Action';
// import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeScanner from 'react-native-barcode-scanner-google';

const BarCode = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await BarCodeScanner.requestPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);

  // const handleBarCodeScanned = ({ type, data }) => {
  //   setScanned(true);
  //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  // };

  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

        
  const dispatch = useDispatch();
  const {ingredients} = useSelector(state => state.MainReducer);

    return (
      <View style={{flex: 1}}>
          <BarcodeScanner
              style={{flex: 1}}
              onBarcodeRead={({data, type}) => {
                  
                  Alert.alert(`Barcode '${data}' of type '${type}' was scanned.`);
              }}
          />
      </View>
    //   <View style={styles.container}>
    //   <BarCodeScanner
    //     onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
    //     style={StyleSheet.absoluteFillObject}
    //   />
    //   {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    // </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default BarCode
