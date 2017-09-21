import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import email from './messageReducer'

const rootReducer = combineReducers({
  form,
  email
});
export default rootReducer;
