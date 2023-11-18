import React, { useContext } from 'react';
// import images
//import WomanImg from '../img/home/woman.png';
import IamPhotographer from '../img/home/iamphotographer3.png';
// import link
import { Link } from 'react-router-dom'; 

// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';

// Cursor Context refresh from About
//import { CursorContext } from '../context/CursorContext';

 
const Home = () => {
  //const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
  <motion.section 
  initial={{opacity: 0 }}  /** was: initial={{opacity: 0 }}  */
  animate ={{opacity: 1 }} 
  exit = {{opacity: 0 }}
  transition={transition1} 
  className='section'
  >
    <div className=' container mx-auto h-full w-full relative'>
      {/** text & img wrapper */}
      <div className='flex flex-col justify-center'  >
        {/** text */}
        <motion.div 
          initial={{opacity: 0, y: '-50%' }}  /** was: initial={{opacity: 0 }}  */
          animate ={{opacity: 1, y: 0 }}   
          exit = {{opacity: 0, y: '-50%'  }}
          transition={transition1}
          // onMouseEnter={mouseEnterHandler}
          // onMouseLeave={mouseLeaveHandler}
        className='w-full pt-20 pb-12 lg:pt-0 lg:pb-0 
          lg:w-auto z-10 lg:absolute flex flex-col 
          justify-center items-center lg:items-start'>
          <h1 className='h1'>
            Sport & <br/> Active Life<br/>Photographer
          </h1> 
          <p className='text-[26px] lg:text-[36px] 
          font-primary mb-4 lg:mb-12'>Espoo, Finland
          </p>
          {/* <Link to={'/contact'} className='btn mb-[30px]'>contact me</Link> */}
          
        </motion.div>

        {/* image - image wrapper */}
        <div className={'flex justify-end max-h-192 lg:max-h-max'}>
          <motion.div 
          initial={{ scale:0 }}
          animate={{ scale:1 }} 
          exit={{ scale:0 }} 
          transition={transition1}
          className='relative lg:-right-40 overflow-hidden'>
            <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={transition1}
            src={IamPhotographer} alt='' />
          </motion.div>
        </div>

      </div>


    </div>
  </motion.section>
  )
};

export default Home;
