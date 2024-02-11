import React from 'react';
import { FaDownload } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="px-28 h-[70vh] flex flex-col items-start justify-start py-28 w-[70%]">
      <span className='text-[38px] text-primary_green font-bold'>Hello, I’m Juadeb Gabriel</span>
      <h1 className='text-[88px] leading-none mb-12'>Software Developer</h1>
      <p className='w-[65%] text-[#808080] mb-10'>
        I’m from Nigeria and I have been working as a Web Developer for more
        than 4 years. I currently work for a DCOSS Associates and PluralCode
        Academy as a student mentor and a frontend web developer
      </p>

      <div className='flex justify-center items-start gap-5'>
        <a href="mailto:juadebgabriel@gmail.com" target="_blank" className='bg-primary_green px-8 py-3 hover:shadow-lg transition-shadow duration-150'>
          Email Me
        </a>
        <a
          href="https://drive.google.com/file/d/1hfFU3aFftM5cvYCHhO_UxzkTC7d-moHX/view?usp=sharing"
          download={true}
          target='_blank'
          className='flex items-center gap-2 justify-center px-8 py-3 hover:border hover:border-primary_green transition-colors duration-150'
        >
          <FaDownload />
          <span> Download CV</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
