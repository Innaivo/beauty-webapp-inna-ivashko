import React from 'react';
import logo from '../images/logo2.svg';
import { Link } from 'react-router-dom';
import {MdLocationOn, MdPhone} from "react-icons/md";
import {AiFillFacebook, AiOutlineInstagram} from "react-icons/ai";
import {FaEnvelope} from "react-icons/fa";


export default function Footer() {
    return (
    	<footer className="footer-distributed">
			<div className="footer-left">
                <img src={logo} alt="Beauty Art"/>
				<p className="footer-links">
                    <Link to="/">Home&nbsp;</Link>
					|
					<Link to="/pricelist">&nbsp;Pricelist&nbsp;</Link>
					|
					<Link to="/contact">&nbsp;Contact</Link>
                </p>
				<p className="footer-icons">
					<a href="https://www.facebook.com/"><AiFillFacebook/></a>
					<a href="https://www.instagram.com"><AiOutlineInstagram/></a>
				</p>
				<p className="footer-copyright"> 2020 Made by Inna Ivashko</p>
			</div>
			<div className="footer-center">
				<div>
                <a href="https://www.google.com/maps">
					<i><MdLocationOn/></i>
					<p>Street 1 <br/>
					1234AB Eindhoven </p> </a>
				</div>
                <div>
					<a href="tel:040 123 45 67">
					<i><MdPhone/></i>	
					<p>040 123 45 67</p>
					</a>
				</div>
				<div>
					<a href="mailto:beauty.art@info.com">
					<i className="envelope"><FaEnvelope/></i>	
					<p>beauty.art@info.com</p></a>
				</div>
			</div>
			<div className="footer-right">
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
		</footer>
    )
}
