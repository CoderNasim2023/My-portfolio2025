import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function AboutMe() {
  const containerRef = useRef();
  const imageRef = useRef();
  const panelRef = useRef();
  const elementsRef = useRef([]);

  elementsRef.current = [];

  const addToElements = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.set([imageRef.current, panelRef.current, ...elementsRef.current], {
      opacity: 0,
      y: 50
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        toggleActions: "play none none none"
      }
    });

    tl.to(imageRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "back.out(1.7)"
    })
    .to(panelRef.current, {
      opacity: 1,
      y: 0,
      duration: 1
    }, "-=0.5")
    .to(elementsRef.current, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.8
    }, "-=0.3");
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen bg-black text-white font-sans overflow-hidden flex items-center justify-center"
    >
      {/* GTA-style font */}
      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/pricedown');
        @import url('https://fonts.cdnfonts.com/css/helvetica-now-display');

        .font-gta {
          font-family: 'Pricedown', sans-serif;
          letter-spacing: 2px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .font-helvetica {
          font-family: 'Helvetica Now Display', sans-serif;
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
        {/* More Prominent Neon Line Behind Character */}
        <div className="absolute left-[9%] top-[8%] h-[80%] w-[6px] 
            bg-gradient-to-b from-[#ff0044] via-[#ff0044aa] to-transparent 
            blur-lg drop-shadow-[0_0_10px_#ff0044] 
            animate-pulse z-0 rounded-full">
        </div>

      </div>

      {/* Left Character Image */}
      <div 
        ref={imageRef}
        className="absolute left-[10%] bottom-0 z-10 w-[35%] h-[90%] flex items-end "
      >
        <img
          src="./mebg.png"
          title="Md Nasim Akhtar"
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
            className="text-4xl font-extrabold text-white mt-1 font-gta"
          >
            HEY THERE!
          </h1>
        </div>

        {/* Details */}
        <div className="mt-5">
          <h3 
            ref={addToElements}
            className="text-[#666666] text-lg font-bold mb-2 font-gta"
          >
            DETAILS
          </h3>
          <p 
            ref={addToElements}
            className="text-sm leading-relaxed text-gray-300 font-helvetica"
          >
            A passionate engineer with a love for, web development, Android Devlopement and solving real-world problems. I'm currently a 2nd-year   BCA undergrad at Makaut, always curious and always building.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h3
            ref={addToElements}
            className="text-gray-300 text-lg font-bold mb-4 tracking-wide font-gta"
          >
            SKILLS
          </h3>

          <div className="grid grid-cols-3 gap-4">
            {[
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
              { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
              { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
              { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
              { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
              { name: "Generative AI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
              { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
              { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            ].map(({ name, icon }, i) => (
              <div key={i} ref={addToElements} className="flex flex-col items-center text-center text-gray-300 font-mono">
                <img src={icon} alt={name} className="w-8 h-8 mb-1 hover:scale-110 transition-transform" />
                <span className="text-xs">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Internship Section */}
        <div className="mt-6 text-sm text-gray-200 space-y-2 font-mono">
          <p ref={addToElements}>
            👩‍💻 Intern-ed @ <span className="text-white font-semibold"> Former Web developer at Bharat Intern Pvt. Ltd.</span> — Built an Real time react js   Weather  information showing website
            </p>
            {/* <p ref={addToElements}>
              👩‍💻 Intern-ed @ <span className="text-white font-semibold">Tasklance Analytics</span> — Generative AI is cool, eh.
            </p> */}
          
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