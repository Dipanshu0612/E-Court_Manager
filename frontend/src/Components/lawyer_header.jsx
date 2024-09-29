import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink as Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import LAW from "../Assests/LAW.png";
import HeaderDropdown from './header_dropdown';


export default function LawyerHeader() {
  let [menuicon, changemenuicon] = useState(false);
  let [showDrop, setShowDrop]= useState(false);

  return (
    <>

      <div className='flex flex-wrap justify-between items-center bg-black h-[4.3rem] sticky top-0 z-10 '>
        <div className="logo flex flex-wrap justify-center items-center">
          <a href="/" className='flex flex-wrap justify-center items-center cursor-pointer font-semibold'><img src={LAW} alt="" className='h-[3rem] mx-4 mb-[0.5rem] rounded-md' /></a>
          <h4 className='flex text-white items-center font-extrabold text-2xl text-center'>E-COURT</h4>
        </div>

        <div className="nav" id='nav'>
          <ul className='flex flex-wrap justify-centre items-center mr-4 space-x-5'>
            <li className="text-white cursor-pointer py-[1.37rem] font-semibold hover:text-blue-800"><Link to="/lawyer-home" activeClassName='active'>Home</Link></li>
            <li className="text-white cursor-pointer py-[1.37rem] font-semibold hover:text-blue-800" ><Link to="/lawyer-cases" activeClassName='active'>My Cases</Link></li>
            <li className="text-white cursor-pointer py-[1.37rem] font-semibold hover:text-blue-800" ><Link to="/available-cases" activeClassName='active'>Available Cases</Link></li>
            <li className="text-white cursor-pointer py-[1.37rem] font-semibold hover:text-blue-800" ><Link to="/lawyer-upcoming-hearing" activeClassName='active'>Upcoming Hearings</Link></li>
          <li className="text-white cursor-pointer py-[1.37rem] font-semibold hover:text-blue-800" onClick={()=>{
            setShowDrop((prev) => !prev)
          }}><CgProfile className='text-2xl'/></li>
          </ul>
        {showDrop && <HeaderDropdown />}
        </div>

        {menuicon ? <AiOutlineClose id='menuicon' onClick={() => {
          document.getElementById('nav').style.display = 'none'
          changemenuicon((prevState) => !prevState)
        }} />
          : <AiOutlineMenu id='menuicon' onClick={() => {
            document.getElementById('nav').style.display = 'block'
            changemenuicon((prevState) => !prevState)
          }} />}

      </div>
    </>
  )
}
