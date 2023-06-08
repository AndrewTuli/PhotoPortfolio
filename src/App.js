import React, {useContext} from 'react';
// import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
// import router
import { BrowserRouter as Router } from 'react-router-dom';
// import motion 
import { motion } from 'framer-motion';

// import CursorContext
import {CursorContext} from './context/CursorContext'


const App = () => {
  const { cursorVariants } = useContext(CursorContext)
  return (
    <>
    <Router>
      <Header />
      <AnimRoutes />
    </Router>

    {/* Cursor Context */}
    <motion.div 
    variants={cursorVariants}
    animate={'default'}
    
    className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none rounded-full'>

    </motion.div>

    </>  
    );
    
};

export default App;
