import AboutMe from "@/components/AboutMe";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import React, { useState } from "react";

const TITLE = "Jacint Alama | Full-stack Developer & Visual Maker";
const DESCRIPTION =
  "Jacint Alama builds tested, production-ready web systems, from a multi-store e-commerce profit engine to an AI underwriting QA layer, plus the UI, print, and brand work to match.";

const Homepage = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f2ede3" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="/images/4-shops.png" />
        <meta property="og:site_name" content="Jacint Alama" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content="/images/4-shops.png" />
      </Head>

      <div className="min-h-screen">
        <NavMobile showNav={showNav} closeNav={closeNavHandler} />
        <Nav openNav={showNavHandler} />
        <main>
          <Hero />
          <CaseStudies />
          <Projects />
          <Skills />
          <AboutMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
