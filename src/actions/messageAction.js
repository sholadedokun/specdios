import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { SEND_EMAILS, SEND_EMAILS_ERROR } from './actionTypes';
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
export function sendEmail(contactForm, endpoint) {
    return function(dispatch) {
        return new Promise( (resolve, reject)=>{
            contactForm.companyName="Spectra Studios";
            contactForm.companyEmail="info@specdios.com";
            axios.post(`${ROOT_URL}/${endpoint}`, {contactForm, smtpConfigs} )
                .then(response => {
                    dispatch({ type: SEND_EMAILS,
                        payload: response.data
                    });
                    resolve()
                })
                .catch(() => {
                    dispatch({type: SEND_EMAILS_ERROR,
                        payload:'Error Sending  , Please Check your internet and try again.'
                    });
                    reject()
                });
        })
  }
}
