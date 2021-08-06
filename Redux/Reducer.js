import {combineReducers} from 'redux';
import {Authenticate} from './Reducers/Reducers';
import {PdfReducer} from './Reducers/PdfReducer';
import {ThemeReducer} from './Reducers/ThemeReducer';
import {RouteReducer} from './Reducers/RouteReducer';

import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainReducer} from './Reducers/MainReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default combineReducers({
  MainReducer: MainReducer
});
