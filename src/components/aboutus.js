import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap';

export default class Aboutus extends Component {
    render(){
        return(
            <Grid fluid id="aboutus">
                <Col xs="12" className="sectionContainer" >
                    <h2>About Us</h2>
                    <span>{`Lil' details about what makes us tick.`}</span>
                    <Grid className="content">
                        <Col xs="12" md="8" mdOffset="2" >
                            <p>
                                Behind every beautiful moment there is a beautiful story. At Spectra Studios we believe that every moment should be exclusive and special.
                                Our aim is to by-pass an existing saturated market and give our clients a new experience. What kind of experience are we talking about?
                                We thrive on new challenges and think variety is the spice-of-life. With a Content and Creative business background, we have adopted a new model and ways of meeting our clients tailored needs.
                                 We have a hub of a multi- talented and disciplined team to give the ultimate experience. This goes from We are distinguished by nothing but the very best.
                            </p>
                            <ul className="dir_profile">
                                <Col xs="6" md="3">
                                    <span className="dir_picture"></span>
                                    <span className="dir_name">John Doe</span>
                                    <span className="dir_position">Director</span>
                                </Col>
                                <Col xs="6" md="3">
                                    <span className="dir_picture"></span>
                                    <span className="dir_name">Jane Doe</span>
                                    <span className="dir_position">Director</span>
                                </Col>
                                <Col xs="6" md="3">
                                    <span className="dir_picture"></span>
                                    <span className="dir_name">Dorothy Doe</span>
                                    <span className="dir_position">Photographer</span>
                                </Col>
                                <Col xs="6" md="3">
                                    <span className="dir_picture"></span>
                                    <span className="dir_name">Peter Doe</span>
                                    <span className="dir_position">Videographer</span>
                                </Col>
                            </ul>
                        </Col>
                    </Grid>
                </Col>
            </Grid>
        )
    }
}
