import React,{Component} from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap';
export default class Header extends Component{
    render(){
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
                                    <li>Home</li>
                                    <li>Photography</li>
                                    <li>Videography</li>
                                    <li>Contact</li>
                                    <li>Promo</li>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Grid>
                </header>
            </Row>
        )
    }
}
