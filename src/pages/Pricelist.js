import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Pricelist() {
    return <Hero hero = 'pricelistHero'>
    <Banner title="pricelist">
    <Link to='/' className='btn-primary'>
        return home
    </Link>
    </Banner>
    </Hero>;
}

