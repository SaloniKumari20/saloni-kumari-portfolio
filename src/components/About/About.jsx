import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.jpeg';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans mt-10"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">

          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mt-2">
            Saloni
            <br />
            Kumari
          </h2>

          {/* Typing Text */}
          <div className="flex items-center justify-center md:justify-start gap-2 mt-6 flex-wrap">

            <span className="text-xl sm:text-xl md:text-xl font-semibold text-white whitespace-nowrap">
              I am a
            </span>

            <div className="text-xl sm:text-xl md:text-xl font-semibold text-[#8245ec] whitespace-nowrap">
              <ReactTypingEffect
                text={[
                  'Frontend Developer',
                  'Coder',
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </div>
          </div>

          {/* About Paragraph */}
          <p className="max-w-[600px] text-gray-400 text-sm sm:text-base leading-relaxed mt-8">
             I am a Frontend Developer skilled in HTML, CSS, JavaScript, and React.js.
             I enjoy building responsive and user-friendly web applications with clean UI
             and smooth user experience. I have built projects like Doctor Appointment
             System, Paste App, and Weather App using modern web technologies.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1MO46pbhsjjZE5ufzh6pzrMZQ7BXJ2mES/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-3 text-lg font-semibold text-white rounded-full transition duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 20px rgba(130,69,236,0.6)',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center items-center mt-3 md:-mt-25">

          <Tilt
            className=" relative -top-20 w-64 h-64 md:w-[20rem] md:h-[20rem] rounded-full overflow-hidden border-4 border-purple-600 shadow-[0_0_40px_rgba(130,69,236,0.7)]"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Saloni Kumari"
              className="w-full h-full object-cover rounded-full"
            />
          </Tilt>

        </div>
      </div>
    </section>
  );
};

export default About;

