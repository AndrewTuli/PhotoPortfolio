import React from 'react';
// import images
import WomanImg from '../img/about/woman.png';
import AboutMeImg from '../img/about/aboutme.png';

//import IamPhotographer from '../img/about/iamphotographer2.png';
// import link
import { Link } from 'react-router-dom';

const About = () => {
  return <section className='section'>
    <div className='container mx-auto h-full relative'>
      {/** text & image wrapper */}
      <div className='flex flex-col lg:flex-row
      h-full items-center justify-center gap-x-24 
      text-center lg:text-left lg:pt-16'>
        {/** image */}
        <div className='flex-1 max-h-96 lg:max-h-max 
        order-2 lg:order-none overflow-hidden'>
          <img src={AboutMeImg} alt='' />
        </div>
        {/** text */}
        <div className='flex-1 pt-36 pb-14 lg:pt-0 
        lg:w-auto z-10 flex flex-col justify-center 
        items-center lg:items-start'>
          <h1 className='h1'>About me</h1>
          <p className='mb-12 max-w-sm'>
          Welcome to my world of capturing moments and preserving memories!
          <br/>
          <br/>
          I am a sports photographer with a passion for immortalizing 
          the essence of sports events, extreme sports, and the vibrancy of active life. 
          From speed and agility to strength and victory, I strive to freeze those 
          fleeting seconds in time. I also love skiing, mountain biking, wildlife, 
          and travel. 
          <br/>
          <br/>
          Let me find interesting places for you to capture your moments of joy and happiness. Join me on this visual voyage, one click at a time.
          </p>
          <Link to={'/portfolio'} className='btn'>View my work</Link>
        </div>

      </div>

    </div>
  </section>;
};

export default About;
