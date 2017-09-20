import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap';
import Aboutus from './aboutus'
import Contactus from './contactus'
import Register from './register'
export default class Intro extends Component {
    constructor(props){
        super(props)
        this.state={
            currentView:'About Us'
        }
    }
    switchView(){
        console.log(this.state.currentView)
        switch (this.state.currentView){
            case 'About Us':
                return <Aboutus />
            case 'Contact Us':
                return <Contactus />
            case 'Register':
                return <Register />
        }
        return 'Hello';
    }
    render(){
        return(
            <Grid className="infoSpace"  >

                <Row>
                    <Col style={{background:`url('../../images/bgoverlay.png') repeat`, padding:'10px 20px',  borderTopLeftRadius: '5px',  borderTopRightRadius: '5px'}} xs={3} sm={4} xs={9}>
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
                        {

                            this.switchView()
                        }
                        {
                            (this.state.currentView==='Contact Us' || this.state.currentView==='Register')?
                            <button onClick={()=>this.setState({currentView:'About Us'})}>About Us</button>:''
                        }
                        {
                            (this.state.currentView==='About Us' || this.state.currentView==='Register')?
                            <button onClick={()=>this.setState({currentView:'Contact Us'})}>Contact Us</button>:''
                        }
                        {
                            (this.state.currentView==='Contact Us' || this.state.currentView==='About Us')?
                            <button onClick={()=>this.setState({currentView:'Register'})}>Register for a Free Photoshoot</button>:''
                        }





                    </Col>
                </Row>
            </Grid>
        )

    }
}
