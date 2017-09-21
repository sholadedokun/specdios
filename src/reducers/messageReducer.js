import { SEND_EMAILS, SEND_EMAILS_ERROR } from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type) {
    case SEND_EMAILS:
        return { ...state, error: '', emailNotification: action.payload };
    case SEND_EMAILS_ERROR:
        return { ...state, error: action.payload, emailNotification: '' };
    default: return {...state}
  }
}
