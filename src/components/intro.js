import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap';

export default class Intro extends Component {
    render(){
        return(
            <Grid className="infoSpace"  >

                <Row>
                    <Col style={{background:`url('../../images/bgoverlay.png') repeat`, padding:'10px 20px',  borderRadius: '5px'}} xs={3} sm={4} xs={9}>
                        <Col xs={12}  className="App-header">
                            <div className="companyName">
                                <span className="logoHead">Spectra</span>
                                <span className="logoSubHead">Studios</span>

                            </div>
                        </Col>
                        <span className='workSlide'>
                            <ul>
                                <li>Coming Soon</li>
                                <li>Watch This Space</li>
                                <li>Under Construction</li>
                                <li>In a Moment</li>
                            </ul>
                        </span>
                        <p >
                            Behind every beautiful moment there is a beautiful story. At Spectra Studios we believe that every moment should be exclusive and special.<br/><br/>
                            Our aim is to by-pass an existing saturated market and give our clients a new experience. What kind of experience are we talking about?
                            We thrive on new challenges and think variety is the spice-of-life. <br/><br/>With a Content and Creative business background, we have adopted a new model and ways of meeting our clients tailored needs. This is by creating a hub of
                            a multi- talented and disciplined team to give the ultimate experience. We are distinguished by nothing but the very best.
                        </p>
                        <button>Register for a Free Photoshoot</button>
                        <button>Contact Us</button>
                    </Col>
                </Row>
            </Grid>
        )

    }
}
