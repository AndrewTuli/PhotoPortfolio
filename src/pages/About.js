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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas dapibus ex in nisi cursus, at ultricies urna egestas.
          Duis iaculis diam ac dui elementum maximus. 
          Mauris sit amet hendrerit neque. Morbi felis tellus, 
          dictum sed justo id, varius tempor sapien. 
          Nullam scelerisque purus pharetra quam congue, 
          eget placerat orci consequat. 
          <br/>
          <br/>
          Praesent non ligula a est bibendum faucibus. Mauris 
          quis quam imperdiet, consectetur velit mattis, sodales 
          augue. Fusce dapibus nisi lacus, et maximus massa fermentum 
          eget. Nam et turpis gravida, maximus augue eu, sodales ex. 
          Ut ut pulvinar felis.
          </p>
          <Link to={'/portfolio'} className='btn'>View my work</Link>
        </div>

      </div>

    </div>
  </section>;
};

export default About;
