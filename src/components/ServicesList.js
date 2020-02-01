import React from 'react';
import Service from './Service';

export default function ServicesList({services}) {
    return (
        <section className='serviceslist'>
            <div className='serviceslist-center'>
                {
                    services.map(item => {
                        return <Service key={item.id} service={item}/>;
                    })
                }
            </div>
        </section>
        
    )
}
