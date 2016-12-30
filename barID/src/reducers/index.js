import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DrinkFormReducer from './DrinkFormReducer';
import DrinkReducer from './DrinkReducer';

export default combineReducers({
  auth: AuthReducer,
  drinkForm: DrinkFormReducer,
  drinks: DrinkReducer
});