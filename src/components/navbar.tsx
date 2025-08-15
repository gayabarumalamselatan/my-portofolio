import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about-me", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "me-works", label: "Me Works" },
    { id: "contact-me", label: "Contact Me" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className='flex py-5 px-16 justify-between w-full'>
      <div className="flex items-center">
        <h1 className='font-bold text-2xl text-sky-900'>FSH.</h1>
      </div>
      <div className='flex space-x-6 gap-2'>
        {navLinks.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`cursor-pointer py-2 rounded-4xl px-8 font-bold m-0 transition-colors duration-300 text-sm ${
              activeSection === link.id
                ? link.id === "home"
                  ? "bg-[linear-gradient(90deg,_#005273_0%,_#156787_40.01%,_#57C785_100%)] text-sky-100"
                  : "bg-sky-900 text-sky-100"
                : "text-sky-900 text-sm"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
