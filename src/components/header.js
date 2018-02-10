import React,{Component} from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap';
export default class Header extends Component{
    constructor(){
        super();
        this.state={
            active:'home'
        }
    }
    render(){
        const {active}=this.state;
        return(
            <Row>
                <header>
                    <Grid>
                        <Navbar collapseOnSelect>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="/">
                                        <div className="logo">
                                            <img src="images/logo.png" width="100" height="100" />
                                        </div>
                                    </a>
                                </Navbar.Brand>
                            </Navbar.Header>
                            <Navbar.Collapse id="bs-example-navbar-collapse-1">
                                <Nav className="navbar-right">
                                    <li onClick={()=>this.setState({active:'home'})} className={active=='home'?'active':''}><a href="#">Home</a></li>
                                    <li onClick={()=>this.setState({active:'photograpy'})} className={active=='photograpy'?'active':''}><a href="#photograpy">Photography</a></li>
                                    <li onClick={()=>this.setState({active:'aboutus'})} className={active=='aboutus'?'active':''}><a href="#aboutus">About Us</a></li>
                                    <li onClick={()=>this.setState({active:'promo'})} className={active=='promo'?'active':''}><a href="#promo">Promo</a></li>
                                    <li onClick={()=>this.setState({active:'contactus'})} className={active=='contactus'?'active':''}><a href="#contactus">Contact</a></li>

                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Grid>
                </header>
            </Row>
        )
    }
}
