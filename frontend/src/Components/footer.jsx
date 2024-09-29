import React from 'react'
import {FaSquareWhatsapp} from "react-icons/fa6"
import {FaGithubSquare,FaInstagramSquare,FaLinkedin} from "react-icons/fa"
import "../index.css"

export default function Footer() {
  return (
    <>
    <div className='h-[20rem] bg-black flex flex-col flex-wrap justify-center items-center text-white space-y-5 mb-1 cursor-pointer'>
        <p> Copyright &copy; 2024 | All Rights Reserved</p>
        <h1 className='text-center text-4xl'>E-COURT SERVICES</h1>
        
        <div className='h-[0.05rem] bg-white w-[90%]'></div>

        <div className='flex justify-around items-center space-x-10 text-center cursor-pointer'>
            <div className='links'>
                <h1 className="text-2xl font-bold tracking-widest">Dipanshu Mishra</h1>
                <p className='hover:tracking-widest transition-all duration-200'>Full Stack Developer</p>
                <div className='flex justify-around items-center text-4xl mt-3 space-x-3'>
                <a href="https://www.linkedin.com/in/dipanshu-mishra-696a0622a" className='text-blue-400 hover:text-blue-600 hover:scale-110 duration-300'><FaLinkedin /></a>
                <a href="https://github.com/Dipanshu0612" className='text-slate-200 hover:text-white transition-all hover:scale-110'><FaGithubSquare /></a>
                <a href="https://api.whatsapp.com/send?phone=918485974624&text=Hello, more information!"
             className='text-green-400 hover:text-green-600 transition-all hover:scale-110'><FaSquareWhatsapp /></a>
                <a href="https://www.instagram.com/_.dipanshu._06/" className='text-pink-400 hover:text-red-600 transition-all hover:scale-110'><FaInstagramSquare /></a>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}
