import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap';
// import { contactPost} from '../actions/workActions';

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
        // this.props.contactPost(value);

    }
    render(){
        const { handleSubmit, emailNotification } =this.props
        let alertMessage=''
        if(emailNotification && emailNotification.message){
            alertMessage =  <div>Thanks for contacting me, your Message has been received.</div>
        }
        else if(emailNotification){
            alertMessage =
                <div className='textError'><b>Error Sending Message, Please check your internet connection and try again.</b></div>
        }
        return(
            <Row>
                <Col xs={12}>
                    <h2>Register</h2>
                    <p>
                    {`LET'S CREATE A MEMORABLE EXPERIENCE FOR YOU`}<br /><br />

                        {`We are offering free professional photoshoot. You are probably wondering what's the catch. None!! It is completely free.

                        We will be launching soon and want you to be a part of the journey. Your pictures will grace our instagram page.

                        As a thank you , you will get to take your pictures home and also a discount voucher for your next booking.`}<br/><br />{`

                        So bring along a friend, partner or family with you and be a part of this wonderful adventure with us.

                        WHAT ARE YOU WAITING FOR REGISTER NOW-  (This will be on the button for them to click.)`}<br/><br />`

                        YOU HAVE A STORY , WE HAVE THE LENS TO TELL IT`<br/><br />`

                        hurry as Limited slots may apply...`
                    </p>
                    <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                        <Field component={this.renderInput} type="text" name="name" id="name" placeholder="Full Name" />
                        <Field component={this.renderInput} type="email" name="email" id="email" placeholder="Email Address" />
                        <Field component={this.renderInput} type="email" name="email" id="email" placeholder="Phone Number" />
                        <Field component={this.renderInput} type="email" name="email" id="email" placeholder="Number of People in session" />
                        <Field component={this.renderTextarea} name="message" id="message" placeholder="Hubbys" rows="4" />
                        <Field component={this.renderTextarea} name="aboutYourself" id="abtyrself" placeholder="About yourself" rows="4" />
                        <Field component={this.renderTextarea} name="comment" id="comment" placeholder="Comment" rows="4" />
                        <input type="submit" value="Send Message" />
                    </form>
                    <div>{alertMessage}</div>
                </Col>
            </Row>
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

// function mapStateToProps(state){
//     return{
//         emailNotification:state.work.CONTACT
//     }
// }

export default reduxForm({
    validate,
    form: 'contactMe'
})(
connect(null, null)(contactMe)
);
