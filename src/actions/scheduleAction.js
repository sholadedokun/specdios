import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { FETCH_SCHEDULES, FETCH_SCHEDULES_ERROR } from './actionTypes';
import _ from "lodash";
const ROOT_URL = 'https://berhymes-back.herokuapp.com/appActions';
//email configurations
let smtpConfigs = {
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'info@specdios.com',
        pass: 'Specdios1@'
    }
};
export function fetchSchedules(contactForm, endpoint) {
    return function(dispatch) {
        return new Promise( (resolve, reject)=>{
            axios.get(`${ROOT_URL}/schedule` )
                .then(response => {
                    dispatch({ type: FETCH_SCHEDULES,
                        payload: {
                            AvailableDates:['01-12-2017', '08-12-2017', '15-12-2017'],
                            bookedSlot:response.data
                        }
                    });
                    resolve()
                })
                .catch(() => {
                    dispatch({type: FETCH_SCHEDULES_ERROR,
                        payload:'Error fetching schedules, Please Check your internet and try again.'
                    });
                    reject()
                });
        })
  }
}
