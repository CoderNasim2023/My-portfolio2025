import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Contact() {
  const contacts = [
    {
      label: " Email",
      value: (
        <a
          href="mailto: Connectmdnasimakhtar22@gmail.com"
          target="_blank"
          className="text-blue-400 hover:text-blue-600 underline"
        >
          Connectmdnasimakhtar22@gmail.com
        </a>
      ),
    },

    {
      label: "📱 Phone",
      value: (
        <a
          href="tel:+918371938543"
          className="text-blue-400 hover:text-blue-600 underline"
        >
          +91 8371938543
        </a>
      ),
    },
    {
      label: "🔗 LinkedIn",
      value: (
        <a
          href="https://www.linkedin.com/in/mdnasimakhtar"
          className="text-blue-400 hover:text-blue-600 underline"
          target="_blank"
          rel="noreferrer"
        >
          /Md Nasim Akhtar
        </a>
      ),
    },
    {
      label: "GitHub",
      value: (
        <a
          href="https://github.com/CoderNasim2023"
          className="text-blue-400 hover:text-blue-600 underline"
          target="_blank"
          rel="noreferrer"
        >
          /CoderNasim2023
        </a>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden"
    >

      {/* Background Image code */}

      <img
        src="bg2.png"
        alt="background image"
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
      />

      {/* Glassmorphism Box */}
      <div className="relative z-10 backdrop-blur-md bg-black/40 border border-white/20 rounded-3xl p-10 md:p-14 w-[90%] md:w-[60%] max-w-[750px] shadow-xl flex flex-col items-center justify-center">
        <h1 className="text-yellow-400 text-4xl md:text-5xl font-normal mb-8  text-center">
          Get In Touch
        </h1>

        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          // interval={3000}
          className="w-full"
        >
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="text-white text-2xl font-mono text-center px-6 py-4"
            >
              <p className="mb-2 font-semibold">{contact.label}</p>
              <p>{contact.value}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Contact;
