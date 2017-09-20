import React, {Component} from 'react';
import Heading from './heading';
import {Grid, Row, Col} from 'react-bootstrap';
import ProductContainer from './productContainer';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AddnewMeal from './addNewMeal';
import Settings from './settings';
import Icon from './icon';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchProduct} from '../actions/userActions';
class userProfile extends (Component){
    menuList={

        viewProduct:{
            label:'View all Meals',
            name:'viewProduct',
            exact: true,
            icon:'eye',
            path:'',
            component: ()=><ProductContainer products={this.props.products} />
        },
        addNewMeal:{
            label:'Add a new Meal',
            name:'addNewMeal',
            icon:'plus',
            path: '/addMeal',
            component: AddnewMeal
        },
        settings:{
            label:'Settings',
            name:'settings',
            icon:'gear',
            path: '/settings',
            component: Settings
        }
    }
    componentWillMount(nextProps){
        this.props.fetchProduct()
    }
    componentWillUpdate(nextProps){
        if(nextProps.offers !== this.props.offers){

        }
    }

    setCurrentDisplay(nextDisplay){
        console.log(nextDisplay);
    }
    renderMenu(match){
        return(_.map(this.menuList, (item, index)=>{
                return(
                    <li key={`${item.name}_${index}`}>
                        <Link to={match.url+item.path}><Icon icon={item.icon} /> {item.label}</Link>
                    </li>
                )
            })
        )
    }
    render(){
        const {match}=this.props
        console.log(this.props)
        return(
            <Grid className="newPage">
                <Router>
                    <Row className="">

                        <Col xs={12} md={3} className="userMenu">
                            <Heading title="Menu" marginBottom="5px" size="sm"/>
                            <Col componentClass="ul"  xs={12}>
                                {this.renderMenu(match)}
                            </Col>
                        </Col>
                        <Col xs={12} md={9}>
                            {
                                _.map(this.menuList, (item, index)=>{
                                    return(
                                        <Route key={index+item.path} exact={item.exact} path={match.url+item.path} component={item.component} />
                                    )
                                })
                            }
                        </Col>

                    </Row>
                </Router>
            </Grid>
        )
    }
}
function mapStateToProps(state){
    return{
        products: state.user.products
    }
}

export default connect(mapStateToProps, {fetchProduct})(userProfile)
