"use client"
import { useEffect, useState, useRef } from "react"
import Navbar from "@/components/navbar"
import BlurText from "@/components/reactBits/BlurText"
import SplitText from "@/components/reactBits/SplitText"
import { FaAnglesDown } from "react-icons/fa6"

import Experience from "@/sections/experience/experience"
import Works from "@/sections/works/works"
// import Lanyard from '@/components/reactBits/Lanyard';


export default function Home() {
  const [isFloating, setIsFloating] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const triggerHeight = window.innerHeight * 0.9
      setIsFloating(scrollY > triggerHeight)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimationKey((prev) => prev + 1)
          }
        })
      },
      { threshold: 0.6 },
    )

    observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* nav */}
      <nav
        className={`${
          isFloating
            ? "fixed top-4 left-4 right-4 z-50 backdrop-blur-md bg-white/60 rounded-3xl shadow-md transition-all"
            : "w-full absolute z-10"
        }`}
      >
        <Navbar />
      </nav>

      {/* Home */}
      <section id="home" ref={sectionRef} className="decorative-section min-h-screen pt-8 relative">
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
          <p className="text-center mt-5 text-lg text-sky-900">Web Designer | Fullstack Developer</p>

          <a href="#about-me" className="mt-15 flex justify-center">
            <FaAnglesDown className="h-10 w-10 text-sky-900 animate-bounce hover:bg-green-100 rounded-full p-2" />
          </a>
        </div>
      </section>

      {/* About Me */}
      <section id="about-me" className="min-h-screen bg-white p-20 pt-44">
        <div className="flex justify-center mt-5 mb-20">
          <SplitText
            text="Wanna Know About Me?"
            className="text-5xl font-bold text-sky-900 flex justify-center"
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-6">
            <div className="">{/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}</div>
          </div>

          <div className="col-span-6">
            <p className="text-lg leading-relaxed text-gray-800">
              Hello! I&apos;m Febri, a passionate web designer and fullstack developer with over 5 years of experience
              creating digital experiences that matter. I specialize in building modern, responsive websites and web
              applications that not only look great but also deliver exceptional user experiences.
            </p>
            <br />
            <p>
              My expertise spans across frontend technologies like React, Next.js, and Vue.js, as well as backend
              development with Node.js, Python, and various databases. I believe in writing clean, maintainable code and
              staying up-to-date with the latest industry trends and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <Experience/>

      {/* My Work */}
      <Works/>
    </div>
  )
}
