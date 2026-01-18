"use client";
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/navbar";
import BlurText from "@/components/reactBits/BlurText";
import { FaAnglesDown } from "react-icons/fa6";

import Experience from "@/sections/experience/experience";
import Works from "@/sections/works/works";
import Contact from "@/sections/contact-me/Contact";
import Footer from "@/sections/footer/Footer";
import Loading from "@/components/Loading";
import About from "@/sections/about-me/About";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFloating, setIsFloating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerHeight = window.innerHeight * 0.9;
      setIsFloating(scrollY > triggerHeight);
    };

    if (!isLoading) {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  useEffect(() => {
    if (!sectionRef.current || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimationKey((prev) => prev + 1);
          }
        });
      },
      { threshold: 0.6 },
    );

    const element = sectionRef.current;

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`${
          isFloating
            ? "fixed top-4 left-4 right-4 z-50 backdrop-blur-md bg-white/60 rounded-3xl shadow-md transition-all"
            : "w-full absolute z-10"
        }`}
      >
        <Navbar />
      </nav>

      <section
        id="home"
        ref={sectionRef}
        className="decorative-section min-h-screen pt-8 relative"
      >
        <div className="ellipse ellipse-blue-bottom" />
        <div className="ellipse ellipse-green-bottom" />
        <div className="ellipse ellipse-green-top" />
        <div className="ellipse ellipse-blue-top" />

        <div className="content text-center relative z-10">
          <BlurText
            key={animationKey}
            text="Hi There, I'm Febri!"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-7xl font-bold text-sky-900"
          />
          <p className="text-center mt-5 text-lg text-sky-900">
            Web Designer | Fullstack Developer
          </p>

          <a href="#about-me" className="mt-15 flex justify-center">
            <FaAnglesDown className="h-10 w-10 text-sky-900 animate-bounce hover:bg-green-100 rounded-full p-2" />
          </a>
        </div>
      </section>

      <About />

      {/* Experience */}
      <Experience />

      {/* My Work */}
      <Works />

      <Contact />

      <Footer />
    </div>
  );
}
