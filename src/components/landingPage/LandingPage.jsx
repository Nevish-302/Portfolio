import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import About from "./About";
import Contacts from "./Contacts";

import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";

export default function LandingPage ()
{
    return (
        <>
        <Navbar />
        <Intro />
        <Projects />
        <Skills />
        <About />
        <Contacts />
        <Footer />
        </>
    )
}