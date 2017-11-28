import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap';
import { sendEmail } from '../actions/messageAction';
import { fetchSchedules } from '../actions/scheduleAction';

class contactMe extends Component {
    constructor(props){
        super();
        this.state={
            currentView:'text',
            selectedDay:'',
            sessionPeriods:[
                {sessionType: 'paid', from:'12:00pm', to: '01:00pm'},
                {sessionType: 'free', from:'1:20pm', to: '02:20pm'},
                {sessionType: 'paid', from:'02:20pm', to: '03:20pm'},
                {sessionType: 'paid', from:'04:20pm', to: '06:20pm'},
                {sessionType: 'free', from:'06:20pm', to: '07:20pm'},
            ]
        }
        this.renderInput = this.renderInput.bind(this)
        this.renderTextarea = this.renderTextarea.bind(this)
    }
    componentWillMount(){
        this.props.fetchSchedules();
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
        value.subject= "Get free Photoshoot";
        value.type="freePhotoshoot";
        this.props.sendEmail(value, 'sendMail');

    }
    render(){
        const { handleSubmit, emailNotification, sendEmail, schedules} =this.props
        if(schedules){
            console.log(schedules)
        }
        let alertMessage='';
        if(emailNotification && emailNotification.message){
            alertMessage =  <div className="notification">We have received your data, we will get back to you shortly.</div>
        }
        else if(emailNotification){
            alertMessage =
                <div className='textError'><b>Error Sending Message, Please check your internet connection and try again.</b></div>
        }
        return(
            <Grid className="infoSpace">
                <Row>
                    <Col className="contentVIew">
                        <Row>
                            <img src="images/close.png" onClick={this.props.closePanel} />
                            <Col xs={12}>

                                {
                                    this.state.currentView=='text'?
                                    <p>
                                    <h2>Free Photoshoot</h2>
                                    {`LET'S CREATE A MEMORABLE EXPERIENCE FOR YOU`}<br /><br />

                                        {`We are offering free professional photoshoot. You are probably wondering what's the catch. None!! It is completely free.
                                        We will be launching soon and want you to be a part of the journey. Your pictures will grace our instagram page.
                                        As a thank you , you will get to take your pictures home and also a discount voucher for your next booking.`}<br/><br />{`
                                        So bring along a friend, partner or family with you and be a part of this wonderful adventure with us.`} <br/>
                                        <br/><br />
                                        <input type="submit" onClick={()=> this.setState({currentView:'form'})} value="Book Appointment"/>
                                    </p>
                                    :
                                    <Col xs={12}>
                                        <h2>Book appointment</h2>
                                        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                                            <Field component={this.renderInput} type="text" name="name" id="name" placeholder="Full Name" />
                                            <Field component={this.renderInput} type="email" name="email" id="email" placeholder="Email Address" />
                                            <Field component={this.renderInput} type="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
                                            <Field component={this.renderInput} type="numberOfPeople" name="numberOfPeople"  placeholder="Number of People in session" />
                                            <Field component={this.renderTextarea} name="hobbies" id="message" placeholder="hobbies" rows="4" />
                                            <Field component={this.renderTextarea} name="aboutYourself" id="abtyrself" placeholder="About yourself" rows="4" />
                                            <Field component={this.renderTextarea} name="comment" id="comment" placeholder="Comment" rows="4" />

                                            <select onChange={(e)=>this.setState({selectedDay:e.target.value})} value={this.state.selectedDay}>
                                                <option>Select a session date</option>
                                                {
                                                    schedules.map(item=>
                                                        <option value={item}>{item}</option>
                                                    )
                                                }
                                            </select>
                                            <select onChange={(e)=>this.setState({selectedDay:e.target.value})} value={this.state.selectedDay}>
                                                <option>Select a session date</option>
                                                {
                                                    schedules.map(item=>
                                                        <option value={item}>{item}</option>
                                                    )
                                                }
                                            </select>
                                            <input type="submit" value="Send Message" />
                                        </form>
                                        <div>{alertMessage}</div>
                                    </Col>
                                }
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
    if(!values.phoneNumber){
        errors.phoneNumber = 'Please enter your Phone Number';
    }
    if(!values.hobbies){
        errors.hobbies = 'Please enter your hobbies';
    }
    if(!values.numberOfPeople){
        errors.numberOfPeople = 'Please enter Number of people in session';
    }
    if(!values.aboutYourself){
        errors.aboutYourself = 'Please tell us few things that makes you special';
    }
    if(!values.message){
        errors.message = 'Please Tell us some of your hobbies';
    }
    return errors;
}

function mapStateToProps(state){
    return{
        emailNotification:state.email.emailNotification,
        schedules: state.schedule.allSchedules
    }
}
export default reduxForm({
    validate,
    form: 'contactMe'
})(
connect(mapStateToProps, {sendEmail, fetchSchedules})(contactMe)
);
