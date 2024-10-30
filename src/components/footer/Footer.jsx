import React from "react";
import './Footer.css'
import logo from '../../assets/images/download.svg'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer()
{
    useGSAP(()=>{
        gsap.from('.footer', {
            x: 1000,
            duration: 1,
            opacity : 0,
            // scrollTrigger : {
            //     trigger: '.footer',
            //     scroller: "body",
            //     scrub: 2,
            //     start: "top 90%",
            //     end: "top 80%",
            //     // markers: true,
            // }
        })
        
    }
)
    return(
        <div className="footer">
            <hr className="HR" />
            <div className="footer-about">
                <div className="footer-name">
                    <img className="footer-logo-image" src={logo} alt="" />
                    <span className="head">Shiven</span> <span className=" foot-email text"> shiven302@gmail.com</span>
                </div>
                <div className="footer-desc white text">
                    full-stack web and flutter developer based in India.
                </div>
            </div>
            <div className="copyright text white">© Copyright 2022. Made by Shiven. Designed by <a href="https://www.figma.com/community/file/1164933568884615740" >Elias</a>.</div>
        </div>
        
    )
}