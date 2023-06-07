import React from 'react';
// import images
import WomanImg from '../img/about/woman.png';
//import IamPhotographer from '../img/about/iamphotographer2.png';
// import link
import { Link } from 'react-router-dom';

const About = () => {
  return <section className='section '>
    <div className='container mx-auto h-full relative'>
      {/** text & image wrapper */}
      <div className='bg-pink-200 flex flex-col lg:flex-row
      h-full items-center justify-center gap-x-24 text-center lg:text-left '>
        {/** image */}
        <div>image</div>
        {/** text */}
        <div>
          text
        </div>

      </div>

    </div>
  </section>;
};

export default About;
