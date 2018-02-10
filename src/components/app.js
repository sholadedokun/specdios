import React, {Component} from 'react'
import {BrowserRouter as Router,  Route } from 'react-router-dom';
import Header from './header'
import Menu from './menu';
import Intro from './intro';
import Footer from './footer';
import {Col, Grid, Row} from 'react-bootstrap';
import Icon from './icon'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {fetchImages} from '../actions/messageAction'
import {connect} from 'react-redux';
import Contact from './contactus'
import Aboutus from './aboutus'
//wrap redux store with our application through the Provider Tag
//enable route for our application through the Router Tag
//bootstrap, 'Grid' get resolve to container
//attaching our app to the html dom through document.getElementById('root'))
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            currentbg:0,
            currentView:'',
            animationLeaveDuration:1000,
            animationEnterDuration:900,

        }
        this.animateBackground=this.animateBackground.bind(this);
    }
    animateBackground(){
        if(this.state.currentbg===(this.state.imagePool.length-1)){
            this.setState({currentbg:0})
        }
        else{
            this.setState({currentbg:++this.state.currentbg})
        }
    }
    componentWillMount(){
        this.props.fetchImages().then(data=>console.log(data))
        .catch((error)=> console.log(error))

        //this.interval=setInterval(()=>this.animateBackground(), 7500);

    }
    componentWillUnMount(){
        clearInterval(this.interval);
    }
    changeView(view){
        console.log(view);
        this.setState({currentView:view})
    }
    hideVideo(e){
        let player = document.querySelector("#videoPlayer").pause()
        // let video = document.querySelector("#video")
        // video.style.display= "none"
        // console.log(video)
    }
    render(){
        const {currentbg, currentView}=this.state
        const {allImages}=this.props;
        if(allImages)allImages.sort((a,b)=> a.dateCreated - b.dateCreated)
        return(
            <Router>
                <Grid  fluid={true} >
                    <Header />
                    <Row xs="12">
                        <Col xs="12" className="videoContainer" id="video">
                            <Row>
                                <video preload="auto" loop autoPlay  id="videoPlayer" width="100%"  muted>
                                    <source type="video/mp4" src="../../videos/spectra.mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                                <a href="#photograpy" className="moveFromVideo"><Icon icon="angle-down" /></a>
                                {/*<span className="skip" onClick={this.hideVideo.bind(this)}>
                                    Skip Video <Icon icon="angle-double-right" />
                                </span>*/}
                            </Row>
                        </Col>
                        <Grid>
                            <Col xs="12" className="sectionContainer" id="photograpy">

                                <h2>Photography</h2>
                                <span>Stunning memories through our Lenses</span>
                            {
                                (allImages) ?
                                    <Row className="allContainer">
                                        <Col xs="12" sm="6" md="4" className="imageContainer">
                                            {
                                                allImages.filter((item,index)=>(index+1)%3==1).map(item=>
                                                    <div className="imageDetails">
                                                        <img src={item.imagesUrl.split(',')[0]} width="100%"/>
                                                        <span>
                                                            <p className="count">{item.imagesUrl.split(',').length} Photos</p>
                                                            <p className="photoDivider"></p>

                                                            <p className="title">{item.title}</p>
                                                            <p className="description">
                                                                {item.description}
                                                            </p>
                                                        </span>
                                                    </div>
                                                )
                                            }
                                        </Col>
                                        <Col xs="12" sm="6" md="4" className="imageContainer">
                                            {
                                                allImages.filter((item,index)=>(index+1)%3==2).map(item=>
                                                    <div className="imageDetails">
                                                        <img src={item.imagesUrl.split(',')[0]} width="100%" />
                                                        <span>
                                                            <p className="count">{item.imagesUrl.split(',').length} Photos

                                                            </p>
                                                            <p className="photoDivider"></p>

                                                            <p className="title">{item.title}</p>
                                                            <p className="description">
                                                                {item.description}
                                                            </p>
                                                        </span>
                                                    </div>
                                                )
                                            }
                                        </Col>
                                        <Col xs="12" sm="6" md="4" className="imageContainer">
                                            {
                                                allImages.filter((item,index)=>(index+1)%3==0).map(item=>
                                                    <div className="imageDetails">
                                                        <img src={item.imagesUrl.split(',')[0]} width="100%" />
                                                        <span>
                                                            <p className="count">{item.imagesUrl.split(',').length} Photos

                                                            </p>
                                                            <p className="photoDivider"></p>

                                                            <p className="title">{item.title}</p>
                                                            <p className="description">
                                                                {item.description}
                                                            </p>
                                                        </span>
                                                    </div>
                                                )
                                            }
                                        </Col>
                                        {/*<ReactCSSTransitionGroup transitionName="picAnim">
                                            {
                                                imagePool.map((item, index)=>{
                                                    return(
                                                        (index==currentbg)?
                                                            <div key={index}
                                                                className={`imgBack ${index==currentbg?'active':''}`}

                                                            >
                                                            <img src={`../../images/${item}.jpg`} width="100%" />
                                                            </div>:''
                                                    )
                                                })
                                            }
                                            </ReactCSSTransitionGroup>*/}
                                    </Row>

                                :''
                            }
                            </Col>
                        </Grid>
                        <Grid fluid>
                            <Col xs="12" className="sectionContainer" id="promo">
                                <h2>Promo</h2>
                                <span>Giving back is our nature.</span>
                                <Grid className="content">
                                    <div className="contentContainer">
                                        <Col xs="12" md="7" >
                                            <p>
                                                <h3>Free Photoshoot</h3>
                                                {`We are offering free professional photoshoot. You are probably wondering what's the catch.
                                                None!! It is completely free. We will be launching soon and want you to be a part of the journey.
                                                Your pictures will grace our instagram page. As a thank you , you will get to take your pictures
                                                home and also a discount voucher for your next booking. So bring along a friend, partner or
                                                family with you and be a part of this wonderful adventure with us. `}
                                                <button>Make Reservation</button>
                                            </p>

                                        </Col>

                                        <Col xs="12" md="5" className="supportImage"></Col>
                                    </div>
                                </Grid>
                            </Col>
                        </Grid>
                        <Aboutus />
                        <Contact />
                        <Footer />
                    </Row>
                </Grid>

            </Router>
        )
    }
}
function mapStateToProps(state){
    return{
            allImages:state.images.allImages
        }
}
export default connect(mapStateToProps, {fetchImages})(App)
