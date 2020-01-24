import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
    <>
    <Hero>
        <Banner title="beauty art by Julia">
        <Link to='/pricelist' className="btn-primary">
            pricelist
        </Link>
        </Banner>
    </Hero>
    </>
    );
}
