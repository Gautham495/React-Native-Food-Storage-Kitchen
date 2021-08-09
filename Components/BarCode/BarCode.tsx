import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeScanner from 'react-native-barcode-scanner-google';

const BarCode = () => {
  // const [hasPermission, setHasPermission] = useState(null);
  // const [scanned, setScanned] = useState(false);

  const proceed = () => {
    alert('You can use the Camera');
  };

  const askPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        proceed();
      } else {
        alert('CAMERA Permission Denied');
      }
    } else {
      proceed();
    }
  };

  useEffect(() => {
    askPermission();
  }, []);

  return (
    <View style={{flex: 1}}>
      <BarcodeScanner
        style={{flex: 1}}
        onBarcodeRead={(item: any) => {
          Alert.alert(
            `Barcode '${item.data}' of type '${item.type}' was scanned.`,
          );
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default BarCode;
