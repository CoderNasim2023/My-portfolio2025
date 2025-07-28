import React, { useRef } from "react"; // useEffect is not strictly needed here
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

function AboutMe() {
  const containerRef = useRef();
  const imageRef = useRef();
  const panelRef = useRef();
  // Initialize elementsRef.current as an empty array once
  const elementsRef = useRef([]);

  // Corrected: ensure elements are added without re-initializing the array on every render
  const addToElements = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      // Set initial states for animation
      gsap.set([imageRef.current, panelRef.current, ...elementsRef.current], {
        opacity: 0,
        y: 50,
      });

      // Create the GSAP timeline for scroll-triggered animation
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center", // Changed start to 'top center' for earlier animation trigger
          toggleActions: "play none none none", // Play on enter, do nothing else
          // markers: true, // Uncomment for debugging ScrollTrigger
        },
      });

      // Animation sequence
      tl.to(imageRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "back.out(1.9)",
      })
        .to(
          panelRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.5" // Starts 0.5 seconds before the previous animation ends
        )
        .to(
          elementsRef.current,
          {
            opacity: 1,
            y: 0,
            stagger: 0.15, // Stagger the animation for elements
            duration: 0.8,
          },
          "-=0.3" // Starts 0.3 seconds before the previous animation ends
        );
    },
    { scope: containerRef }
  ); // Set scope for useGSAP to optimize context

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black text-white font-sans overflow-hidden flex items-center justify-center"
    >
      {/* GTA-style font */}
      <style jsx global>{`
        @import url("https://fonts.cdnfonts.com/css/pricedown");
        @import url("https://fonts.cdnfonts.com/css/helvetica-now-display");

        .font-gta {
          font-family: "Pricedown", sans-serif;
          letter-spacing: 2px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .font-helvetica {
          font-family: "Helvetica Now Display", sans-serif;
        }
      `}</style>

      {/* Faded "ABOUT ME" background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[12rem] font-black text-gray-100/10 font-gta select-none tracking-wider">
          ABOUT
        </h1>
        <h1 className="text-[12rem] font-black text-gray-100/10 font-gta select-none tracking-wider">
          ME
        </h1>
      </div>

      {/* Light effect behind image */}
      <div className="absolute left-[10%] bottom-0 z-5 w-[35%] h-[90%] flex items-end">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-white/2 to-transparent blur-3xl scale-150"></div>
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent blur-2xl"></div>
        {/* Neon Line Behind Character */}
        <div
          className="absolute left-[9%] top-[8%] h-[80%] w-[6px]
            bg-gradient-to-b from-[#ff0044] via-[#ff0044aa] to-transparent
            blur-lg drop-shadow-[0_0_10px_#ff0044]
            animate-pulse z-0 rounded-full"
        ></div>
      </div>

      {/* Left Character Image */}
      <div
        ref={imageRef}
        className="absolute left-[10%] bottom-0 z-10 w-[35%] h-[90%] flex items-end "
      >
        <img
          src="./mebg.png"
          title="MdNasim Akhtar"
          className="h-full object-contain transition-all duration-300 hover:scale-105 hover:rotate-2 "
        />
      </div>

      {/* Right Info Panel - Fixed proportions */}
      <div
        ref={panelRef}
        className="absolute right-[8%] top-1 transform -translate-y-1 w-[500px] max-h-[85vh] bg-[rgba(78, 82, 100, 0.22)]
 p-6 rounded-lg border-l-4 border-[#ff0044] shadow-3xl backdrop-blur-sm overflow-y-auto"
      >
        <div className="mb-4">
          <h1
            ref={addToElements}
            className="text-2xl font-extrabold font-sans text-yellow-400  mt-1 "
          >
          HEY THERE!
          </h1>
        </div>

        {/* Details */}
        <div className="mt-5">
          <h3
            ref={addToElements}
            className="text-[#fff] text-lg font-bold mb-2"
          >
            About Me:
          </h3>
          <p
            ref={addToElements}
            className="text-sm leading-relaxed text-gray-300 font-helvetica"
          >
            I'm a aspiring, passionate Full Stack engineer with a love for Web
            development,Android Development, and solving real-world problems.
            I'm currently a 3rd -year BCA undergrad at Makaut, very curious
            about the technological revolutions happening all over world...
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h3
            ref={addToElements}
            className="text-gray-300 text-lg font-bold mb-4 tracking-wide"
          >
            My SKILLS
          </h3>

          <div className="grid grid-cols-3 gap-4">
            {[
              {
                name: "React js ",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Express.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
              },
              {
                name: "Node js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "Jenkins",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
              },
              {
                name: "Junit test",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original-wordmark.svg",
              },

              {
                name: "HTML",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
              },
              {
                name: "CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
              },
              {
                name: "Javascript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
              },
              {
                name: "MongoDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              },
              {
                name: "PostgreSQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
              },
              {
                name: "MySQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
              },
              {
                name: "Github",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
              },
              {
                name: "Tailwind css",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
              },
            ].map(({ name, icon }, i) => (
              <div
                key={i}
                ref={addToElements}
                className="flex flex-col items-center text-center text-gray-300 font-mono"
              >
                <img
                  src={icon}
                  alt={name}
                  className="w-8 h-8 mb-1 hover:scale-110 transition-transform"
                />
                <span className="text-xs">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Internship Section */}
        <div className="mt-6 text-sm text-gray-200 space-y-2 font-mono">
          <p ref={addToElements}>
            👩‍💻 Interned @{" "}
            <span className="text-white font-semibold">
              Former Web Developer at Bharat Intern Pvt. Ltd.
            </span>{" "}
            — Built a real-time React.js weather information display website.
          </p>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}

export default AboutMe;
