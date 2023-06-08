import React from 'react';
// import icons
import {
  ImFacebook,
  //ImTwitter,
  //ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
  <ul className='flex gap-x-4'>
    <li><a href="https://www.facebook.com/isportphoto" target="_blank" rel="noreferrer">
      <ImFacebook />
    </a>
    </li>
    <li><a href="https://www.instagram.com/isport.photo" target="_blank" rel="noreferrer">
      <ImInstagram />
    </a>
    </li>
    <li><a href="https://www.youtube.com/channel/UCTEJydlTqBMoDiw3lpwf2DQ" target="_blank" rel="noreferrer">
      <ImYoutube />
    </a>
    </li>

  </ul>
  </div>
};

export default Socials;
