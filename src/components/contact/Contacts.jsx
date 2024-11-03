import React from "react";
import './Contacts.css'
import github from '../../assets/images/Intro/Github.svg'
import discord from '../../assets/images/Intro/Discord.png'
import email from '../../assets/images/Intro/Email.png'
import linkedin from '../../assets/images/Intro/Linkedin.png'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Contacts() 
{
    useGSAP(()=>{
        gsap.from('.contacts .heading', {
            x: 1000,
            // letterSpacing: "1000px",
            duration: .8,
            ease: "back.out(1.5)",
            opacity : 0,
            // scrollTrigger : {
            //     trigger: '.contacts',
            //     scroller: "body",
            //     scrub: 2,
            //     start: "top 90%",
            //     end: "top 50%",
            // }
        })
        
        gsap.from('.contacts .contacts-text', {
            x: -1000,
            duration: 1,
            opacity : 0,
            letterSpacing: "1000px",

            // scrollTrigger : {
            //     trigger: '.lp-contacts',
            //     scroller: "body",
            //     scrub: 2,
            //     start: "top 80%",
            //     end: "top 40%",
            //     // pin : true,
            // }
        })
        gsap.from('.contacts .contact-list ', {
            x: -300,
            scale: 4,
            backgroundColor: "black",
            duration: 1,
            opacity : 0,
            border: "0px solid purple",
            // scrollTrigger : {
                //     trigger: '.lp-contacts',
                //     scroller: "body",
                //     scrub: 2,
                //     start: "top 80%",
                //     end: "top 40%",
                //     // pin : true,
                // }
            })
            gsap.from('.contacts .contact', {
                scale: 2,
                delay:1,
            stagger:.3,
            opacity: 0,
            // borderLeft: "0px solid red",
            
        })
    })
    return (
        
        <div className="contacts ">
            <div className="heading">
                <div className="title head">
                <span className="purple">/</span>contacts
                </div>
            </div>
            <div className="contacts-box">
                <div className="contacts-text text">
                I’m interested in freelance and internship opportunities. However, if you have other request or question, don’t hesitate to contact me.
                </div>    
                <div className="contact-list grey-box text">
                    <div className="white">
                        Contact me here
                    </div>
                    <div className="contact">
                        <img className="contact-logo" />
                        <div className="contacts-contact">
                            +91 8800303359
                        </div>
                    </div>
                    <div className="contact">
                        <img src={github} className="contact-logo" />
                        <div className="contacts-contact">
                            Nevish-302
                        </div>
                    </div>
                    <div className="contact">
                        <img src={discord} className="contact-logo" />
                        <div className="contacts-contact">
                            Nevish302#1873
                        </div>
                    </div>
                    <div className="contact">
                        <img src={email} className="contact-logo" />
                        <div className="contacts-contact">
                            shiven302@gmail.com
                        </div>
                    </div>
                    <div className="contact">
                        <img src={linkedin} className="contact-logo" />
                        <div className="contacts-contact">
                            <a href="https://www.linkedin.com/in/shiven-upadhyay-9834bb100/">Nevish-302 </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}