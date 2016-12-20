import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
import DrinkFormReducer from './DrinkFormReducer';
import DrinkReducer from './DrinkReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer,
  drinkForm: DrinkFormReducer,
  drinks: DrinkReducer
});