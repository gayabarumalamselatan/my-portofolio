import SplitText from "@/components/reactBits/SplitText";
import Lanyard from "@/components/reactBits/Lanyard";
import React from "react";

const About = () => {
  return (
    <section
      id="about-me"
      className="min-h-screen bg-white flex items-center py-20"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16">
          <SplitText
            text="Wanna Know About Me?"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-900"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              <Lanyard position={[0, 0, 6]} gravity={[0, -40, 0]} />
            </div>
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-green-300 rounded-full opacity-20" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-sky-300 rounded-full opacity-20" />
          </div>

          <div className="space-y-8">
            <div>
              <div className="space-y-6 text-gray-700 text-lg">
                <div>
                  <h2 className="flex text-3xl text-sky-900">
                    HEY!&nbsp;
                    <p className="font-semibold text-sky-900">I'm Febri,</p>
                    &nbsp;A
                  </h2>
                  <h2 className="text-3xl text-sky-900 font-semibold flex">
                    WEB DESIGNER <p className="font-normal">&nbsp;and</p>
                  </h2>
                  <h2 className=" text-3xl font-semibold text-secondary">
                    FULLSTACK DEVELOPER
                  </h2>
                  <h2 className="text-3xl flex text-sky-900">
                    BASED IN&nbsp; <p className="font-semibold">INDONESIA</p>
                  </h2>
                  <div className="border-1 border-sky-900 my-3" />
                </div>

                <p className="leading-relaxed">
                  I specialize in building modern, responsive websites and web
                  applications that not only look great but also deliver
                  exceptional user experiences.
                </p>
                <p className="leading-relaxed">
                  I believe in writing clean, maintainable code and staying
                  up-to-date with the latest industry trends and best practices.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sky-900 mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "Express.js",
                  "TypeScript",
                  "Node.js",
                  "PostgreSQL",
                  "MySQL",
                  "Tailwind CSS",
                  "REST API",
                  "Docker",
                  "Git",
                  "Linux",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-sky-100 text-sky-800 rounded-full font-semibold hover:bg-sky-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
