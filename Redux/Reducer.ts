import {combineReducers} from 'redux';

// import {persistReducer} from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainReducer} from './Reducers/MainReducer';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

export const RootReducer = combineReducers({
  MainReducer: MainReducer
});

export type RootState = ReturnType<typeof RootReducer>

