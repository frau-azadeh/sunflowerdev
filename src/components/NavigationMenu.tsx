import React from "react";
import { FaLinkedin, FaGithubSquare, FaPhoneSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const NavigationMenu: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full bg-[#ffe082] flex justify-between items-center px-4 py-3 lg:hidden " style={{zIndex:1}}>
      <a
        href="https://www.linkedin.com/in/azadeh-sharifi-soltani"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#56464d] hover:bg-[#56464d] hover:text-white hover:rounded-lg p-4 "
      >
        <FaLinkedin className="text-2xl" />
      </a>
      <a
        href="https://github.com/frau-azadeh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#56464d] hover:bg-[#56464d] hover:text-white hover:rounded-lg p-4"
      >
        <FaGithubSquare className="text-2xl" />
      </a>
      <a
        href="https://instagram.com/frau_azadeh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#56464d] hover:bg-[#56464d] hover:text-white hover:rounded-lg p-4"
      >
        <AiFillInstagram className="text-2xl" />
      </a>
      <a href="tel:09012764435" className=" bg-[#56464d] text-white rounded-lg p-4">
        <FaPhoneSquare className="text-2xl" />
      </a>
    </div>
  );
};

export default NavigationMenu;

