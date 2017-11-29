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
            selectedSlot:''
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
        console.log(this.state)
        value.type=(this.props.schedules[this.state.selectedDay].AvailSession.sessionType=='free')?"free Photoshoot":"Paid Photoshoot";
        value.date=this.props.schedules[this.state.selectedDay].date
        value.slot=this.state.selectedSlot;


        this.props.sendEmail(value, 'sendMail');

    }
    render(){
        const { handleSubmit, emailNotification, sendEmail, schedules, selectedslot} =this.props
        const {selectedSlot, selectedDay } = this.state
        if(schedules){
            console.log(schedules)
        }
        let alertMessage='';
        if(emailNotification && emailNotification.message){
            alertMessage =  <div className="notification">We have received your data, we will get back to you shortly.</div>
        }
        else if(emailNotification){
            alertMessage =
                <div className='textError'><b>{emailNotification}</b></div>
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
                                            <div className="selectInput">
                                                <select onChange={(e)=>this.setState({selectedDay:e.target.value})} value={selectedDay}>
                                                    <option>Select a session date</option>
                                                    {
                                                        (schedules)?
                                                        schedules.map((item, index)=>
                                                            <option key={index} value={index}>{item.date}</option>
                                                        ):''
                                                    }
                                                </select>
                                            </div>
                                            <div className="selectInput">
                                                <select onChange={(e)=>this.setState({selectedSlot:e.target.value})} value={selectedSlot}>
                                                    <option>Select a session time</option>
                                                    {
                                                        (schedules && selectedDay)?
                                                        schedules[selectedDay].AvailSession.map((item, index)=>
                                                            <option key={index} value={item.from}>{item.from} ({item.sessionType})</option>
                                                        ):''
                                                    }
                                                </select>
                                            </div>
                                            <input type="submit" value="Book Session" />
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
        emailNotification:state.email.emailNotification || state.email.error,
        schedules: state.schedule.allSchedules

    }
}
export default reduxForm({
    validate,
    form: 'contactMe'
})(
connect(mapStateToProps, {sendEmail, fetchSchedules})(contactMe)
);
