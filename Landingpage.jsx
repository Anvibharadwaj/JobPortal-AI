import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LuSparkle } from 'react-icons/lu';
import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data"

import Modal from '../components/Modal';
import Login from '../Pages/Auth/Login';
import SignUp from '../Pages/Auth/Signup';

const Landingpage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setcurrentPage] = useState("login");

  const handleCTA = () => {
    setOpenAuthModal(true);
    setcurrentPage("signUp");
  };

  return (
    <>
      <div className='w-full min-h-full bg-[#FFFCEF]'>
        <div className='w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0' />
        <div className='container mx-auto px-4 pt-6 pb-[200px] relative z-10'>

          {/* HEADER */}
          <header className='flex justify-between items-center mb-16'>
            <div className='text-xl text-black font-bold'>
              JobPortal
            </div>
            <button
              className='bg-gradient-to-r from-[#ff9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer'
              onClick={() => setOpenAuthModal(true)}
            >
              Login/Signup
            </button>
          </header>

          {/* HERO CONTENT */}
          <div className='flex flex-col md:flex-row items-center'>
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className='flex items-center justify-start mb-2'>
                <div className='flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300'>
                  <LuSparkle /> AI Powered
                </div>
              </div>
              <h1 className='text-5xl text-black font-medium mb-6 leading-tight'>
                Ace Interview with<br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#f93222_0%,_#fcd760_100%)] font-semibold">
                  AI-Powered
                </span>{' '}
                Learning
              </h1>
            </div>
            <div className='w-full md:w-1/2'>
              <p className='text-[17px] text-gray-900 mr-0 md:mr-20 mb-6'>
                Land your dream job with confidence. Practice smartly with our AI-based tools, mock interviews, and real-time feedback systems built to help you succeed.
              </p>
              <button
                className='bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer'
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className='w-full min-h-full bg-[#fffcef] mb-56'>
        <section className='flex items-center justify-center -mt-36'>
          <img
            src={HERO_IMG}
            alt="AI Interview Assistant"
            className='w-[40vw] rounded-lg'
          />
        </section>

        {/* FEATURES */}
        <div className='w-full min-h-full bg-[#ffcef] mt-10'>
          <div className='container mx-auto px-4 pt-10 pb-20'>
            <section className='mt-5'>
              <h2 className='text-3xl font-bold text-center mb-10'>
                Features that make you shine
              </h2>
              <div className='flex flex-col items-center gap-8'>

                {/* First 3 cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <div
                      key={feature.id}
                      className='bg-[#fffef8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100'
                    >
                      <h3 className='text-base font-semibold mb-3'>
                        {feature.title}
                      </h3>
                      <p className='text-gray-600'>{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Remaining 2 cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                      key={feature.id}
                      className='bg-[#fffef8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100'
                    >
                      <h3 className='text-base font-semibold mb-3'>
                        {feature.title}
                      </h3>
                      <p className='text-gray-600'>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* FOOTER */}
        <div className='text-sm bg-gray-50 text-secondary text-center p-5 mt-5'>
          Made with ❤️... Happy coding
        </div>
      </div>

      {/* AUTH MODAL */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setcurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === 'login' && (
            <Login setcurrentPage={setcurrentPage} />
          )}
          {currentPage === 'SignUp' && (
            <SignUp setcurrentPage={setcurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default Landingpage;
