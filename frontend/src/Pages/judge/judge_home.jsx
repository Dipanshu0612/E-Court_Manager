import React from 'react'
import Footer from '../../Components/footer';
import { RxDashboard } from 'react-icons/rx'
import { GoBellFill } from 'react-icons/go'
import { NavLink as Link } from 'react-router-dom'
import CountUp from 'react-countup';
import JudgeHeader from '../../Components/judge_header';

export default function JudgeHome() {
  return (
    <>
      <JudgeHeader />
      <div className='bg-slate-200'>
        <div className='bg-slate-200 sm:!p-1 sm:!m-1 md:!p-1 md:!m-1 space-y-5 flex flex-col'>
          <div className='flex flex-col bg-white p-3 m-3 shadow-lg max-h-min sm:p-2 sm:m-1 md:p-2 md:m-1 rounded-md'>
            <div className='flex space-x-2 text-center items-center text-black'>
              <div className=''>
                <RxDashboard className='text-3xl mb-2' />
              </div>
              <h4 className='text-center font-semibold'>DASHBOARD</h4>
            </div>

            <div className='h-[0.1rem] bg-slate-200 w-[100%] mb-3'></div>

            <div className='flex justify-around items-center text-center flex-wrap sm:gap-2'>
              <div className='h-[10rem] w-[10rem] flex flex-col items-center rounded-md bg-red-500 text-white justify-center cursor-pointer hover:bg-red-700 md:h-[8rem] md:w-[8rem] sm:h-[6rem] sm:w-[6rem] sm:p-1'>
                <h4 className='sm:text-[0.8rem]'>Your Cases</h4>
                <h3 className='text-[5rem] md:text-[4rem] sm:text-[3rem]'>
                  <CountUp end={35} className='sm:text-[2rem]' />
                </h3>
              </div>
              <div className='h-[10rem] w-[12rem] flex flex-col items-center rounded-md bg-green-500 text-white justify-center cursor-pointer hover:bg-green-700 md:h-[8rem] md:w-[8rem] sm:h-[6rem] sm:w-[6rem]'>
                <h4 className='sm:text-[0.8rem]'>Cases Completed</h4>
                <h3 className='text-[5rem] md:text-[4rem] sm:text-[3rem]'>
                  <CountUp end={17} className='sm:text-[2rem]' />
                </h3>
              </div>
              <div className='h-[10rem] w-[10rem] flex flex-col items-center rounded-md bg-yellow-500 text-white justify-center cursor-pointer hover:bg-yellow-700 md:h-[8rem] md:w-[8rem] sm:h-[6rem] sm:w-[6rem]'>
                <h5 className='sm:text-[0.8rem]'>Pending Cases</h5>
                <h3 className='text-[5rem] md:text-[4rem] sm:text-[3rem]'>
                  <CountUp end={7} className='sm:text-[2rem]' />
                </h3>
              </div>
              <div className='h-[10rem] w-[12rem] flex flex-col items-center rounded-md bg-blue-500 text-white justify-center cursor-pointer hover:bg-blue-700 md:h-[8rem] md:w-[8rem] sm:h-[6rem] sm:w-[6rem]'>
                <h5 className='p-1 sm:text-[0.8rem]'>Upcoming Hearings</h5>
                <h3 className='text-[5rem] md:text-[4rem] sm:text-[3rem]'>
                  <CountUp end={5} className='text-[4rem] md:text-[2rem] sm:text-[1.2rem]' />
                </h3>
              </div>
            </div>

            <div className='h-[17rem] mt-4'>
              <div className='flex space-x-2 text-center items-center text-black'>
                <div className=''>
                  <GoBellFill className='text-3xl mb-2' />
                </div>
                <h4 className='text-center font-semibold'>NOTICE</h4>
              </div>
              <div className='h-[0.1rem] bg-slate-200 w-[100%]'></div>
              <div className='w-full h-[9rem] my-3 overflow-y-scroll'>
                <div className='px-2 py-2 m-2 rounded-md cursor-pointer bg-blue-100 '>
                  <h6 className='hover:underline text-blue-500 m-0'>Case No - 3 : Next Hearing Date!</h6>
                </div>
                <div className='px-2 py-2 m-2 rounded-md cursor-pointer bg-blue-100 '>
                  <h6 className='hover:underline text-blue-500 m-0'>Case No - 14 : Client Notification!</h6>
                </div>
                <div className='px-2 py-2 m-2 rounded-md cursor-pointer bg-blue-100 '>
                  <h6 className='hover:underline text-blue-500 m-0'>Case No - 19 : New Proofs Recorded!</h6>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <button className='bg-blue-500 rounded-sm py-2 hover:bg-blue-700 ease-in-out transition-all'><Link to="/push_notification" className="text-white p-2">Push Notification</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
