import React from 'react';
import {GoLinkExternal} from "react-icons/go";
import {AiFillFacebook, AiOutlineInstagram} from "react-icons/ai";

export default function Footer() {
    return (
        <footer id="main-footer">
            <div className="footer-container">
                <div id="footer-widgets">
                    <div className="footer-widget">
                    <div className="fwidget et_pb_widget">
                        
                        <h4 className="ftitle"> Beauty art</h4>
                        <a className="adressDetails"
                        href="https://www.google.com/maps">
                        Street 1
                        <br/>
                        1111AB Eindhoven <GoLinkExternal/>
                        </a> <br/>
                        <a href="tel:040 123 45 67">040 123 45 67</a>
                        <h4 className="ftitle">follow me</h4>
                        <a href="https://www.facebook.com/"><AiFillFacebook/> Facebook</a><br/>
                        <a href="https://www.instagram.com"><AiOutlineInstagram/> Instagram</a><br/>                       
		            </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
