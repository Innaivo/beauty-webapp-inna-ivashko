import React from 'react';
import {Link} from 'react-router-dom';
import {MdPhone} from "react-icons/md";
import {AiFillFacebook, AiOutlineInstagram} from "react-icons/ai";
import {FaEnvelope} from "react-icons/fa";
import logo from '../images/logo2.svg';

import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import MapContainer from '../components/MapContainer';
import defaultBcg from '../images/service-1.jpg';


export default function Contact() {
    return (
        <>
        <StyledHero img={defaultBcg}>            
        <Banner title="contact">
            <Link to='/' className="btn-primary">
                return home
            </Link>
            </Banner>
        </StyledHero>
        <section className="contacts">
			<div className="contacts-info">
  				<div>
				  	<h6 className="ftitle">address </h6>
    				<p>Street 1, 1234AB, Eindhoven</p>
  				</div>
  				<div>
					<a href="tel:040 123 45 67">
					<i><MdPhone/></i>	
					<p>040 123 45 67</p></a>
				</div>
				<div>
					<a href="mailto:beauty.art@info.com">
					<i className="envelope"><FaEnvelope/></i>	
					<p>beauty.art@info.com</p></a>
				</div>
				<div>
      				<a href="https://www.facebook.com/">
					<i><AiFillFacebook/></i>
					<p>Facebook</p></a>
      				<a href="https://www.instagram.com">
					<i><AiOutlineInstagram/></i>
					<p>Instagram</p></a>
				</div>
  				<div className="contacts-opening">
					<h6 className="ftitle">opening hours </h6>
					<table>
						<tr><th>Monday</th><td>9am - 5pm</td></tr>
						<tr><th>Tuesday</th><td>9am - 5pm</td></tr>
						<tr><th>Wednesday</th><td>9am - 5pm</td></tr>
						<tr><th>Thursday</th><td>9am - 5pm</td></tr>
						<tr><th>Friday</th><td>9am - 5pm</td></tr>  
						<tr><th>Saturday</th><td>9am - 3pm</td></tr>
						<tr><th>Sunday</th><td>Closed</td></tr>
					</table>
				</div>
			</div>
			<div id="map" className="contacts-map">
				<MapContainer/>
			</div>
		</section> 
        </>
    )
}
