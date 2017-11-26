import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import email from './messageReducer'
import schedule from './scheduleReducer'

const rootReducer = combineReducers({
  form,
  email,
  schedule
});
export default rootReducer;
