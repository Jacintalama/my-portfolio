import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React, { useState } from "react";

const Homepage = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className="min-h-screen">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <AboutMe />
        <Contact />
      </main>
    </div>
  );
};

export default Homepage;
