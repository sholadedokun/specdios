import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap';
import { sendEmail } from '../actions/messageAction';

class contactMe extends Component {
    constructor(props){
        super();
        // this.onSubmit = this.onSubmit.bind(this)
        this.renderInput = this.renderInput.bind(this)
        this.renderTextarea = this.renderTextarea.bind(this)
        // this.alertMessage = this.alertMessage.bind(this)
    }
    renderInput(field){
        const {meta:{touched, error}} = field;
        const classN= `${ touched && error ? 'inputError':'' }`;
        return(
            <span>
                <input className={classN}  type={field.type} name={field.name} placeholder={field.placeholder} {...field.input} />
                <span className='textError'>{touched ? error : ''}</span>
            </span>
        )
    }
    renderTextarea(field){
        const {meta:{touched, error}} = field;
        const classN= `${ touched && error ? 'inputError':'' }`;
        return(
            <span>
                <textarea className={classN}  name={field.name} placeholder={field.placeholder} {...field.input} />
                <span className='textError'>{touched ? error : ''}</span>
            </span>
        )
    }
    onSubmit(value){
        value.subject= "Thanks for contacting Spectra Studios";
        value.type="contact";
        this.props.sendEmail(value, 'sendMail');

    }
    render(){
        const { handleSubmit, emailNotification } =this.props
        let alertMessage=''
        if(emailNotification && emailNotification.message){
            alertMessage =  <div className="notification">Thanks for contacting us, your Message has been received.</div>
        }
        else if(emailNotification){
            alertMessage =
                <div className='textError'><b>Error Sending Message, Please check your internet connection and try again.</b></div>
        }
        return(
            <Grid className="infoSpace">
                <Row>
                    <Col className="contentVIew">
                        <img src="images/close.png" onClick={this.props.closePanel} />
                        <Row>
                            <Col xs={12}>
                                <h2>Contact Us</h2>
                                <span>We like to hear your thoughts and answer your questions<br/></span>
                                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                                    <Field component={this.renderInput} type="text" name="name" id="name" placeholder="Name" />
                                    <Field component={this.renderInput} type="email" name="email" id="email" placeholder="Email" />
                                    <Field component={this.renderTextarea} name="message" id="message" placeholder="Message" rows="4" />
                                    <input type="submit" value="Send Message" />
                                </form>
                                <div>{alertMessage}</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
function validate(values){
    const errors={}
    if(!values.name){
        errors.name = 'Please enter your name';
    }
    if(!values.email){
        errors.email = 'Please enter your email Address';
    }
    if(!values.message){
        errors.message = 'Please enter your Message';
    }
    return errors;
}

function mapStateToProps(state){
    return{
        emailNotification:state.email.emailNotification
    }
}

export default reduxForm({
    validate,
    form: 'contactMe'
})(
connect(mapStateToProps, {sendEmail})(contactMe)
);
