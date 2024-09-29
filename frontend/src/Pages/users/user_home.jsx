import React, { useEffect, useState } from 'react'
import Footer from '../../Components/footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserHeader from '../../Components/user_header';
import UserCarousel from '../../Components/user_caraousel';
import { GoBellFill } from "react-icons/go";


export default function UserHome() {

  return (
    <>
      <UserHeader />

      <div className='main min-h-[80vh] bg-slate-100 flex md:flex-col sm:flex-col sm:space-y-5 md:space-y-5 flex-col'>
        <div className='my-2'>
          <h1 className='text-center'>Welcome User!</h1>
        </div>

        <UserCarousel />

        <div className='h-[21rem] sm:h-[30rem] md:space-y-5 sm:space-y-5 p-3 my-2'>
          <div className='flex space-x-2 text-center items-center text-black'>
            <div className=''>
              <GoBellFill className='text-3xl mb-2' />
            </div>
            <h4 className='text-center font-semibold'>NOTICE</h4>
          </div>
          <div className='h-[0.1rem] bg-slate-200 w-[100%]'></div>
          <div className='w-full h-[15rem] my-3 overflow-y-scroll'>
            <div className='px-2 py-2 m-2 rounded-md cursor-pointer bg-blue-100 '>
              <h6 className='hover:underline text-blue-500 m-0'>Case No - 14 : Lawyer Notification!</h6>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )

}
