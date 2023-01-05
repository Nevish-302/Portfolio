import React from "react";
import './Footer.css'
import logo from '../../assets/images/logi-white.png'

export default function Footer()
{
    return(
        <div className="footer">
            <hr className="HR" />
            <div className="footer-about">
                <div className="footer-name">
                    <img className="footer-logo-image" src={logo} alt="" />
                    <span className="head">Shiven</span> <span className=" foot-email text"> shiven302@gmail.com</span>
                </div>
                <div className="footer-desc white text">
                    front-end developer and back-end developer based in India.
                </div>
            </div>
            <div className="copyright text white">© Copyright 2022. Made by Shiven. Designed by <a href="https://www.figma.com/community/file/1164933568884615740" >Elias</a>.</div>
        </div>
        
    )
}