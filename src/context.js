import React, { Component } from 'react';
import items from './data';
const ServiceContext = React.createContext();


 class ServiceProvider extends Component {
 state = {
    services: [],
    featuredServices: [],
    loading: true
 };
 // getData
 componentDidMount(){
     // this.getData
     let services = this.formatData(items);
     let featuredServices = services.filter(service => 
        service.featured === true );
     this.setState({
        services,
        featuredServices,
        loading: false
    })
 }

 formatData (inItems) {
    let tempItems = inItems.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image =>
            image.fields.file.url);
        let service = {...item.fields,images,id};
        return service;
    });
    return tempItems;
 }

    render() {
        return <ServiceContext.Provider value={{ ...this.state }}>
         {this.props.children}
        </ServiceContext.Provider>;
    }
}

const ServiceConsumer = ServiceContext.Consumer;

export{ServiceProvider, ServiceConsumer, ServiceContext}