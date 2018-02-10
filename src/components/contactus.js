import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap';
import { sendEmail } from '../actions/messageAction';

class contactMe extends Component {
    constructor(props){
        super();
        this.state={

        }
    }
    onSubmit(value){
        let message=this.state;
        message.type="contact";
        this.props.sendEmail(message, 'sendMail');

    }
    render(){
        const {emailNotification } =this.props;
        const {name, email, subject, message}=this.state
        let alertMessage=''
        if(emailNotification && emailNotification.message){
            alertMessage =  <div className="notification">Thanks for contacting us, your Message has been received.</div>
        }
        else if(emailNotification){
            alertMessage =
                <div className='textError'><b>Error Sending Message, Please check your internet connection and try again.</b></div>
        }
        return(
            <Grid fluid>
                <Row>
                    <Col xs="12" className="sectionContainer contact">
                        <h2>Contact Us</h2>
                        <span>We would love to hear from you.</span>
                        <Grid className="content" >
                            <form onSubmit={this.onSubmit.bind(this)} id="contactus">
                                <Row>
                                    <Col xs="12" md="6">
                                        <Row>
                                            <Col xs="12">
                                                <label>Your Fullname</label>
                                                <input type="text" placeholder="Input fullname" value={name} onChange={(e)=>this.setState({name:e.target.value})} />
                                            </Col>
                                            <Col xs="12">
                                                <label>Your Email</label>
                                                <input type="text" placeholder="Input your email address" value={email} onChange={(e)=>this.setState({email:e.target.value})} />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs="12" md="6">
                                        <label>Message</label>
                                        <textarea  value={message} onChange={(e)=>this.setState({message:e.target.value})}></textarea>
                                        <button type="submit"> Send Message </button>
                                    </Col>

                                </Row>
                            </form>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
function mapStateToProps(state){
    return{
        emailNotification:state.email.emailNotification
    }
}


export default connect(mapStateToProps, {sendEmail})(contactMe)
