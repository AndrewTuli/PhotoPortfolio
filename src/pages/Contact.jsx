import React, { useState, useRef } from 'react';
import AboutMeImg from '../img/contact/iamphotographer3.png';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitStatus('sending');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      })
      .catch(() => {
        setSubmitStatus('error');
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start
          pt-20 gap-y-8 lg:gap-y-0 gap-x-8 text-center lg:text-left px-4 lg:px-0'>

          {/* Background panel — desktop only */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='hidden lg:flex bg-[#f3f7f8]
              absolute bottom-0 left-0 right-0 top-72 -z-10'
          />

          {/* Form section */}
          <div className='lg:flex-1 lg:pt-32 w-full'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to hear from you.</p>

            {submitStatus === 'success' ? (
              <div className='flex flex-col gap-y-4'>
                <p className='text-[22px] font-primary font-bold text-primary'>
                  Your message has been sent successfully.
                </p>
                <p className='font-secondary text-grey'>
                  Thank you! I will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className='btn mb-[30px] mx-auto lg:mx-0 self-start mt-4'
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='flex flex-col gap-y-4'
                noValidate
              >
                {/* Name + Email row */}
                <div className='flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-10'>
                  <div className='flex flex-col w-full'>
                    <input
                      className='outline-none border-b border-b-primary h-[60px]
                        bg-transparent font-secondary w-full pl-3
                        placeholder:text-[#757879]'
                      type='text'
                      name='name'
                      placeholder='Your name'
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <span className='text-red-500 text-sm mt-1 text-left'>{errors.name}</span>
                    )}
                  </div>

                  <div className='flex flex-col w-full'>
                    <input
                      className='outline-none border-b border-b-primary h-[60px]
                        bg-transparent font-secondary w-full pl-3
                        placeholder:text-[#757879]'
                      type='email'
                      name='email'
                      placeholder='Your email address'
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className='text-red-500 text-sm mt-1 text-left'>{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Message textarea */}
                <div className='flex flex-col'>
                  <textarea
                    className='outline-none border-b border-b-primary pt-4 pb-2
                      bg-transparent font-secondary w-full pl-3 resize-none
                      placeholder:text-[#757879]'
                    name='message'
                    placeholder='Your message'
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <span className='text-red-500 text-sm mt-1 text-left'>{errors.message}</span>
                  )}
                </div>

                {/* Error feedback */}
                {submitStatus === 'error' && (
                  <p className='text-red-500 font-secondary text-sm'>
                    Something went wrong. Please try again.
                  </p>
                )}

                {/* Submit button */}
                <button
                  type='submit'
                  disabled={submitStatus === 'sending'}
                  className='btn mb-[30px] mx-auto lg:mx-0 self-start
                    disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {submitStatus === 'sending' ? 'Sending...' : 'Send it'}
                </button>
              </form>
            )}
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1 max-h-[500px] overflow-hidden'
          >
            <img
              src={AboutMeImg}
              alt='Andrew — sports photographer'
              className='w-full h-full object-cover'
            />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
