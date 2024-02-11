import React from 'react';

const Navbar = () => {
  return (
    <nav className="px-28 py-6 flex items-center justify-between">
      <div className="capitalize text-[24px] font-bold">
        JuadebGabriel<span className="text-primary_green">.</span>
      </div>
      <div className='flex items-center justify-between gap-16'>
        <ul className="flex items-center justify-between gap-16">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
        <button className='border border-primary_green px-8 py-3 hover:bg-primary_green transition-colors duration-150'>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
