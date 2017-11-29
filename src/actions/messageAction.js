import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { SENDING, SEND_EMAILS, SEND_EMAILS_ERROR } from './actionTypes';
import _ from "lodash";
const ROOT_URL = 'https://berhymes-back.herokuapp.com/appActions';
//email configurations
let smtpConfigs = {
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'info@specdios.com',
        pass: 'Specdios1$$'
    }
};
export function sendEmail(contactForm, endpoint) {
    return function(dispatch) {
        return new Promise( (resolve, reject)=>{
            contactForm.companyName="Spectra Studios";
            contactForm.companyEmail="info@specdios.com";
            dispatch({type: SENDING});
            axios.post(`${ROOT_URL}/${endpoint}`, {contactForm, smtpConfigs} )
                .then(response => {
                    dispatch({ type: SEND_EMAILS,
                        payload: response.data
                    });
                    resolve()
                })
                .catch((err) => {
                    console.log(err.response)
                    let errData= err.response
                    let data='Error Sending Booking, Please Check your internet and try again.';

                    if(errData.status==400){
                        console.log(errData.status)
                        data="Error Booking Session, we have a previous booking record using same "
                        if(errData.data.indexOf('email')>0){
                            data += "email address."
                        }
                        else{
                            data += "phone number."
                        }
                        console.log(data)
                    }
                    console.log(data)
                    dispatch({type: SEND_EMAILS_ERROR,

                        payload:data
                    });
                });
        })
  }
}
