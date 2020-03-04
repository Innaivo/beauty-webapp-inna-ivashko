import React, { Component } from 'react';
import defaultBcg from '../images/service-1.jpg';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {ServiceContext} from '../context';
import StyledHero from '../components/StyledHero';



export default class SingleService extends Component {
    constructor (props){
        super(props)
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
            <>
            <StyledHero img={images[0] || this.state.defaultBcg}>
                <Banner title={`${name}`}>
                    <Link to='/pricelist' className='btn-primary'>
                        back to pricelist 
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-service">
                <div className="single-service-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article>
                        <h4>Price: &#8364;{price}</h4>
                    </article>
                </div>
            </section>
            
            </>
        )
    }
}
