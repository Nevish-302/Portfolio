import React from "react";
import './Contacts.css'
import github from '../../assets/images/Intro/Github.svg'
import discord from '../../assets/images/Intro/Discord.png'
import email from '../../assets/images/Intro/Email.png'
import linkedin from '../../assets/images/Intro/Linkedin.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

export default function Contacts() 
{
    useGSAP(()=>{
        gsap.from('.lp-contacts .heading .title', {
            scale: 2,
            duration: 1,
            opacity : 0,
            scrollTrigger : {
                trigger: '.lp-contacts',
                scroller: "body",
                scrub: 2,
                start: "top 90%",
                end: "top 50%",
                // markers: true,
            }
        })
        gsap.from('.lp-contacts .heading .line', {
            x: -1000,
            // y: -200,
            duration: 1,
            // height:'50vh',
            // borderRadius: "100%",
            width: 0,
            background: 'white',
            border: '1px solid white',
            // opacity : 0,
            ease:"back.out(1.7)",
            scrollTrigger : {
                trigger: '.lp-contacts',
                scroller: "body",
                scrub: 2,
                start: "top 55%",
                end: "top 40%",
                // markers: true,
            }
        })
        gsap.from('.lp-contacts .contact', {
            scale: 2,
            stagger:1,
            opacity: 0,
            // borderLeft: "0px solid red",
            scrollTrigger : {
                trigger: '.lp-contacts',
                scroller: "body",
                scrub: 2,
                start: "top 80%",
                end: "top 50%",
                // pin : true,
                // markers: true,
            },
        })
        gsap.from('.lp-contacts .contacts-box .contacts-text', {
            x: -1000,
            duration: 1,
            opacity : 0,
            scrollTrigger : {
                trigger: '.lp-contacts',
                scroller: "body",
                scrub: 2,
                start: "top 80%",
                end: "top 40%",
                // pin : true,
                // markers: true,
            }
        })
    })
    return (
        <div className="lp-contacts">
            <div className="heading">
                <div className="title head">
                <span className="purple">#</span>contacts
                </div>
                <div className="line"></div>
            </div>
            <div className="contacts-box">
                <div className="contacts-text text">
                I’m interested in freelance and internship opportunities. However, if you have other request or question, don’t hesitate to contact me.
                </div>    
                <div className="contact-list grey-box text">
                    <div className="purple">
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