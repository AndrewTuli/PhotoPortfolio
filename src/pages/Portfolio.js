import React, { useContext } from 'react';
// import images
import Image1 from '../img/portfolio/slide1_small.jpg';
import Image2 from '../img/portfolio/slide2_small.jpg';
import Image3 from '../img/portfolio/20150718-DSC_4640_Small.jpg';
import Image4 from '../img/portfolio/20140621-DSC_1356_small.jpg';
import Image5 from '../img/portfolio/20190907-DSC_3197_small.jpg';
import Image6 from '../img/portfolio/20190928-DSC_3433_small.jpg';
// import link
import { Link } from 'react-router-dom';

// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// Cursor Context refresh from About
//import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  //const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full
      items-center justify-start gap-x-24 gap-y-8 lg:gap-y-0 text-center
      lg:text-left pt-20 lg:pt-36 pb-8 px-4 lg:px-0'
      >
          {/* text */}
          <motion.div
            //onMouseEnter={mouseEnterHandler}
            //onMouseLeave={mouseLeaveHandler}
            className='flex flex-col lg:items-start'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>
              Welcome to my world of capturing moments and preserving memories!
              <br />
              <br />
              I am a sports photographer with a passion for immortalizing
              the essence of sports events, extreme sports, and the vibrancy of active life.
              From speed and agility to strength and victory, I strive to freeze those
              fleeting seconds in time. I also love skiing, mountain biking, wildlife,
              and travel.
              <br />
              <br />
              Let me find interesting places for you to capture your moments of joy and happiness. Join me on this visual voyage, one click at a time.
            </p>
            <Link to={'/contact'} className='btn mb-[30px]
          mx-auto lg:mx-0'>
              contact me
            </Link>
          </motion.div>
          {/* image grid */}
          <div className='grid grid-cols-2 gap-2 w-full max-w-[540px] lg:max-w-none mx-auto'>
            {/* image */}
            <div className='w-full h-[140px] sm:h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover w-full h-full hover:scale-110 transition-all duration-500'
                src={Image1}
                alt=''
              />
            </div>

            <div className='w-full h-[140px] sm:h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover w-full h-full hover:scale-110 transition-all duration-500'
                src={Image2}
                alt=''
              />
            </div>

            <div className='w-full h-[140px] sm:h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover w-full h-full hover:scale-110 transition-all duration-500'
                src={Image3}
                alt=''
              />
            </div>

            <div className='w-full h-[140px] sm:h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover w-full h-full hover:scale-110 transition-all duration-500'
                src={Image4}
                alt=''
              />
            </div>

            <div className='w-full h-[140px] sm:h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover w-full h-full hover:scale-110 transition-all duration-500'
                src={Image5}
                alt=''
              />
            </div>

            <div className='w-full h-[140px] sm:h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover w-full h-full hover:scale-110 transition-all duration-500'
                src={Image6}
                alt=''
              />
            </div>

          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Portfolio;
