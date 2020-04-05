import React from 'react';
import ServicesList from './ServicesList';
import {withServiceConsumer} from '../context';
import Loading from './Loading'; 

function PricelistContainer({context}){
    const {loading, services} = context; 
    if (loading){
        return <Loading/>;
        }
        return (
            <>
            <ServicesList services={services}/>
            </>)
}

export default withServiceConsumer(PricelistContainer)
