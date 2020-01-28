import React, { Component } from 'react';
import defaultBcg from '../images/service-1.jpg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {ServiceContext} from '../context';



export default class SingleService extends Component {
    constructor (props){
        super(props)
        //console.log(this.porops);
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        }  
    }
    static contextType = ServiceContext;
    //componentDidMount(){}
    render() {
        const {getService} = this.context;
        const service = getService(this.state.slug);
        console.log(service);
        if (!service) {
            return (<div className ='error'>
                <h3>no such service could be found...</h3>
                <Link to='/pricelist' className="btn-primary">
                    back to pricelist
                </Link>
            </div>
            );
        }
        const {name, description, price, images} = service;
        return (
            <Hero hero='pricelistHero'>
                <Banner title={`${name}`}>
                    <Link to='/pricelist' className='btn-primary'>
                        back to pricelist 
                    </Link>
                </Banner>
            </Hero>
        )
    }
}
