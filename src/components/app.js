import React, {Component} from 'react'
import {BrowserRouter as Router,  Route } from 'react-router-dom';

import Header from './header';
import Intro from './intro'
import {Grid, Row} from 'react-bootstrap';

//We can now
//wrap redux store with our application through the Provider Tag
//enable route for our application through the Router Tag
//bootstrap, 'Grid' get resolve to container
//attaching our app to the html dom through document.getElementById('root'))
export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            currentbg:'bg1'
        }
    }
    render(){
        const {currentbg}=this.state
        return(
            <Router>
                <Grid fluid={true} className="App nop" style={{background:`url('../../images/${currentbg}.jpg') no-repeat center top`, height:'100%'}}>
                    <Row>
                        <Header title="Specdios" />
                        <Route  exact path="/"  component={Intro} />
                    </Row>
                </Grid>
            </Router>
        )

    }
}
