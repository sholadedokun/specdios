import React, {Component} from 'react'
import {BrowserRouter as Router,  Route } from 'react-router-dom';

import Header from './header';
import Intro from './intro'
import {Grid, Row} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//We can now
//wrap redux store with our application through the Provider Tag
//enable route for our application through the Router Tag
//bootstrap, 'Grid' get resolve to container
//attaching our app to the html dom through document.getElementById('root'))
export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            currentbg:0,
            imagePool:["bg1", "bg2","bg3","bg4"],
            animationLeaveDuration:1000,
            animationEnterDuration:900,
            totalSlide:4
        }
        this.animateBackground=this.animateBackground.bind(this);
    }
    animateBackground(){
        if(this.state.currentbg===(this.state.totalSlide-1)){
            this.setState({currentbg:0})
        }
        else{
            this.setState({currentbg:++this.state.currentbg})
        }
    }
    componentWillMount(){
        this.interval=setInterval(()=>this.animateBackground(), 7500);

    }
    componentWillUnMount(){
        clearInterval(this.interval);
    }
    render(){
        const {currentbg, imagePool}=this.state
        return(
            <Router>
                <Grid fluid={true} className="App nop" style={{background:`url('../../images/${imagePool[currentbg]}.jpg') no-repeat center top`, position:'fixed', height:'100%', width:'100%'}}>
                    <Row>
                        <Header title="Specdios" />
                        <Route  exact path="/"  component={Intro} />
                    </Row>
                </Grid>
            </Router>
        )

    }
}
