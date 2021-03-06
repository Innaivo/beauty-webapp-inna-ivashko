import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/service-1.jpg';
import PropTypes from "prop-types";

export default function Service({service}) {
    const{name, slug, images, price} = service;    
    return (
        <article className="service">
            <Link to={`/pricelist/${slug}`}> 
            <div className="img-container">
            
                <img src={images[0] || defaultImg} alt="single service"/>
                <div className="price-top">
                    <h6>&#8364;{price}</h6>
                </div>
                
            </div>
            <p className="service-info">{name}</p>
            </Link>
        </article>
    )
}

Service.propTypes = {
    service:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}