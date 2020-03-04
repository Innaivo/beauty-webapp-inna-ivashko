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

// import React from 'react';
// import ServicesList from './ServicesList';
// import {ServiceConsumer} from '../context';
// import Loading from './Loading'; 

// export default function PricelistContainer() {
//     return (
//         <ServiceConsumer>
//             {value => {
//                 const{loading, services} = value;
//                 if (loading){
//                     return <Loading/>;
//                 }
//                     return (
//                         <div>
//                             hello from pricelist container
//                             <ServicesList services={services}/>
//                         </div>
//                     );
//                 }
//             }
//         </ServiceConsumer>
//     );
// }
