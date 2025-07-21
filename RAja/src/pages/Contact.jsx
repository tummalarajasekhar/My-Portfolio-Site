import React from 'react'
import { IoCall } from "react-icons/io5";
import SocialIcons from '../Components/SocialIcons';
import { useState } from 'react';
import { RiMailSendFill } from "react-icons/ri";
function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      console.log('Form data:', form);
      const response = await fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        setSuccess('Message sent successfully!');
        setForm({ name: '', email: '',phone: '', subject: '', message: '' });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <>
      <div className='w-full text-center mt-5 font-bold text-3xl text-orange-600 dark:text-red-500 '>CONTACT ME</div>
      <div className='flex flex-col lg:flex-row p-2 lg:w-[90%] items-center justify-center gap-2 mx-auto lg:mr-20' style={{ minHeight: '70vh' }}>

        <div className="w-full lg:w-[50%] mx-auto p-4 dark:text-white flex flex-col justify-center items-center">
          <p className="font-bold text-2xl text-center underline underline-offset-8 mb-2">
            Let’s Build Something Great Together
          </p>
          <p className="font-bold text-xl text-center mb-2">
            Have a Project in Mind? Let’s Talk
          </p>
          <p className="font-medium text-lg text-center mb-6 md:w-[60%] lg:w-full ">
            I'm always open to discussing new projects, creative ideas, or collaboration opportunities.
            Feel free to reach out!
          </p>
          <div className="text-center space-y-2 text-xl">
            <p><span>Name:</span><span className='italic font-semibold'> Tummala Raja Sekhar Reddy</span></p>
            <p>Designation:<span className='font-semibold'> Software Engineer</span></p>
            <p className='flex items-center justify-center'>
              Email:
              <a
                href="mailto:trsr.rajasekhar@gmail.com"
                className="font-semibold text-blue-600 hover:underline ml-1 flex items-center"
              >
                trsr.rajasekhar@gmail.com<RiMailSendFill className="ml-2 mt-1" />
              </a>
            </p>
            <p className="flex items-center justify-center">
              <span className="font-semibold">Phone:</span>
              <a href="tel:+917989167008" className="flex items-center text-blue-600 hover:underline ml-2">
                +91 7989167008 <IoCall className="ml-1" />
              </a>
            </p>
            <SocialIcons />
          </div>
        </div>
        {/* right */}
        <div className='w-[90%] lg:w-[50%] dark:text-white mb-20 flex flex-col justify-center items-center'>
          <form className='w-full flex flex-col justify-center items-center' onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder='Name *'
              className='w-full max-w-md p-2 border outline-none dark:bg-gray-800 dark:text-white'
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder='Email*'
              className='w-full max-w-md p-2 border border-t-0 outline-none dark:bg-gray-800 dark:text-white'
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number with country code (optional)"
              pattern="^\+?[0-9\s\-]{10,20}$"
              className='w-full max-w-md p-2 border border-t-0 outline-none dark:bg-gray-800 dark:text-white'
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder='Subject *'
              className='w-full max-w-md p-2 border border-t-0 outline-none dark:bg-gray-800 dark:text-white'
              value={form.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder='Message or About the Project'
              className='w-full max-w-md p-2 border border-t-0 outline-none dark:bg-gray-800 dark:text-white h-32'
              value={form.message}
              onChange={handleChange}

            ></textarea>
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-orange-600 text-white font-bold rounded hover:bg-orange-700 transition-colors"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
            {success && <div className="text-green-600 mt-2">{success}</div>}
            {error && <div className="text-red-600 mt-2">{error}</div>}
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact