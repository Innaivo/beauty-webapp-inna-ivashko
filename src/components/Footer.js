import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import {MdLocationOn, MdPhone} from "react-icons/md";
import {AiFillFacebook, AiOutlineInstagram} from "react-icons/ai";
import {FaEnvelope} from "react-icons/fa";


export default function Footer() {
    return (
    	<footer class="footer-distributed">
			<div class="footer-left">
                <img src={logo} alt="Beauty Art"/>
				<p class="footer-links">
                    <Link to="/">Home&nbsp;</Link>
					|
					<Link to="/pricelist">&nbsp;Pricelist&nbsp;</Link>
					|
					<Link to="#">&nbsp;Contact</Link>
                </p>
				<p class="footer-icons">
					<a href="https://www.facebook.com/"><AiFillFacebook/></a>
					<a href="https://www.instagram.com"><AiOutlineInstagram/></a>
				</p>
				<p class="footer-copyright">© 2020 Copyright Beauty Art.</p>
			</div>
			<div class="footer-center">
				<div>
                <a class="adressDetails" href="https://www.google.com/maps">
					<i><MdLocationOn/></i>
					<p>Street 1 <br/>
					1234AB Eindhoven </p> </a>
				</div>
                <div>
					<a href="tel:040 123 45 67">
					<i><MdPhone/></i>	
					<p>040 123 45 67</p></a>
				</div>
				<div>
					<a href="mailto:beauty.art@info.com">
					<i><FaEnvelope/></i>	
					<p>beauty.art@info.com</p></a>
				</div>
               

        
			</div>
			<div class="footer-right">
					<h4 class="ftitle">opening hours </h4>
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
