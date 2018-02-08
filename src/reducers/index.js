import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import email from './messageReducer'
import schedule from './scheduleReducer'
import images from './imageReducer'

const rootReducer = combineReducers({
  form,
  email,
  schedule,
  images
});
export default rootReducer;
