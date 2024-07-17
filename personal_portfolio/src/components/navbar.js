import React, { useState } from 'react';
import right2 from '../components/my1.jpg.jpg';
import { RiCloseLine } from "react-icons/ri";
import { IoReorderThree } from "react-icons/io5";
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
    const [menu, setmenu] = useState(false);

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <img src={right2} alt="Logo" className="h-8 w-8 my-4 rounded-full border scale-150" />
                        <div className="my-1">
                            <h1 className="text-xl font-bold">
                                Yoge<span className="text-green-500">sh</span>
                            </h1>
                            <p className="text-sm text-bold">Web Developer</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <ul className="hidden font-sm-bold md:flex space-x-4 cursor-pointer">
                            <ScrollLink to="home" smooth={true} duration={500} className=" duration-200">Home</ScrollLink>
                            <ScrollLink to="about" smooth={true} duration={500} className=" duration-200">About</ScrollLink>
                            <ScrollLink to="skills" smooth={true} duration={500} className=" duration-200">Portfolio</ScrollLink>
                            <ScrollLink to="experience" smooth={true} duration={500} className=" duration-200">Experience</ScrollLink>
                            <ScrollLink to="contact" smooth={true} duration={500} className=" duration-200">Contact</ScrollLink>
                        </ul>
                        <div onClick={() => setmenu(!menu)} className="md:hidden">
                            {menu ? <RiCloseLine size={24} cursor={"pointer"} /> : <IoReorderThree size={25} cursor={"pointer"} />}
                        </div>
                    </div>
                </div>

                {menu && (
                    <div className="mt-4">
                        <ul className="md:hidden bg bg-white flex hover:scale-105 duration-200 flex-col z-50 h-screen cursor-pointer items-center justify-center space-y-4">
                            <ScrollLink to="home" smooth={true} duration={500} onClick={() => setmenu(false)} className="hover:scale-105 duration-200">Home</ScrollLink>
                            <ScrollLink to="about" smooth={true} duration={500} onClick={() => setmenu(false)} className="hover:scale-105 duration-200">About</ScrollLink>
                            <ScrollLink to="portfolio" smooth={true} duration={500} onClick={() => setmenu(false)} className="hover:scale-105 duration-200">Portfolio</ScrollLink>
                            <ScrollLink to="experience" smooth={true} duration={500} onClick={() => setmenu(false)} className="hover:scale-105 duration-200">Experience</ScrollLink>
                            <ScrollLink to="contact" smooth={true} duration={500} onClick={() => setmenu(false)} className="hover:scale-105 duration-200">Contact</ScrollLink>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
