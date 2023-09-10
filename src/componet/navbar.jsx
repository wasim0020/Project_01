import React from "react";
import logo from "../assets/brand_logo.png";


function navbar() {
  return (
    <>
       <nav className="flex justify-between mx-[30px] mt-[15px]">
        <div>
          <img className="w-[76px] h-[42.75px]" src={logo} alt="Nick Logo" />
        </div>
          <tbody>
            <ul>
              <td className="font-bold px-[24px]">MENU</td>
              <td className="font-bold px-[24px]">LOCATION</td>
              <td className="font-bold px-[24px]">ABOUT</td>
              <td className="font-bold px-[24px]">CONTACT</td>
            </ul>
          </tbody>
        <div>
          <button className="text-white font-bold bg-[#D01C28] px-[16px] py-[6px]">
            Login
          </button>
        </div>
      </nav>
    </>
  )
  }

export default navbar;
