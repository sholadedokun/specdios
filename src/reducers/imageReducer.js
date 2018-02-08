import { FETCH_IMAGES } from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_IMAGES:
        return { ...state, error: '', emailNotification: 'Please Wait...', allImages:action.payload };
    default: return {...state}
  }
}
