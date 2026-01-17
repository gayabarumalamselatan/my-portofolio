import SplitText from "@/components/reactBits/SplitText";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="min-h-screen p-20 pt-35 pb-30" id="contact-me">
      <div className="flex justify-center mt-5 mb-15">
        <SplitText
          text="Let's Work Together!"
          className="text-5xl pb-3 font-bold text-sky-900 flex justify-center"
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

      <div className="content relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        {/* <div className="text-center mb-16">
          <p className="text-xl text-sky-800 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a project in mind or just want to chat about web
            development, feel free to reach out!
          </p>
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            <div className="bg-white/70 backdrop-blur-sm rounded-4xl p-8 shadow-lg border border-white/20">
              <h2 className="text-3xl font-bold text-sky-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaEnvelope className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-sky-900">
                      Email
                    </h3>
                    <a
                      href="mailto:febri@example.com"
                      className="text-sky-700 hover:text-secondary transition-colors"
                    >
                      soerjahartono22@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaPhone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-sky-900">
                      Phone
                    </h3>
                    <a
                      href="tel:+6281290292368"
                      className="text-sky-700 hover:text-secondary transition-colors"
                    >
                      +62 812 9029 2368
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-sky-900">
                      Location
                    </h3>
                    <p className="text-sky-700">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-4xl p-8 shadow-lg border border-white/20">
              <h2 className="text-3xl font-bold text-sky-900 mb-8">
                Connect With Me
              </h2>
              <div className="flex space-x-6 justify-center">
                <a
                  href="https://linkedin.com/in/febrian-hartono-99b721289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-100 p-4 rounded-full hover:bg-sky-200 hover:animate-pulse transition-colors group"
                >
                  <FaLinkedin className="h-7 w-7 text-sky-700 group-hover:text-sky-900" />
                </a>
                <a
                  href="https://github.com/gayabarumalamselatan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-100 p-4 rounded-full hover:bg-sky-200 hover:animate-pulse transition-colors group"
                >
                  <FaGithub className="h-7 w-7 text-sky-700 group-hover:text-sky-900" />
                </a>
                <a
                  href="https://instagram.com/febriansurya22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-100 p-4 rounded-full hover:bg-sky-200 hover:animate-pulse transition-colors group"
                >
                  <FaInstagram className="h-7 w-7 text-sky-700 group-hover:text-sky-900" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-4xl p-8 shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold text-sky-900 mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sky-800 font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white/50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sky-800 font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white/50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sky-800 font-semibold mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white/50"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sky-800 font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white/50 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[linear-gradient(90deg,_#005273_0%,_#156787_40.01%,_#57C785_100%)] hover:cursor-pointer text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
