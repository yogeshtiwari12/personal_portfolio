import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { ReactTyped } from "react-typed";
import pic2 from '../components/my1.jpg.jpg';
// import pic2 from '../images/my1.jpg.jpg'




function Home() {
    return (
        <>
        <div className="home max-w-screen-2xl container mx-auto fixed-md px-4 md:px-20 my-20">
            <div className="flex flex-col md:flex-row">

                <div className="md:w-1/2 order-2 md:order-1">
                    <div className="md:mt-20 mt-12">


                        <p className="text-xl font-medium">
                            Welcome In My Feed
                        </p>
                        <div className="flex">
                            <h1 className="text-3xl font-bold mb-4 my-1.5">
                                Hello, I am a  &nbsp;
                                <ReactTyped className=" text-green-500"   // react type is helepd us to creat ea loop of sentence
                                    strings={[" Devloper", " Programmer", " Coder"]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                />
                                
                            </h1>

                        </div>

                        <p className="font-medium my-2 text-sm md:font-medium  line leading-5">
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form
                            of a document or a typeface without relying on meaningful content. Lorem ipsum this is yogesh
                            Wikipedia of a document or a typeface without relying on meaningful content. Lorem ipsum this is yogesh
                            Wikipedia
                        </p>


                        <div className="flex md:justify-between md:my-7  flex-col md:flex-row my-7  items-center">
                            <div className="font-medium ">
                                <h1 className="ml-5 text-xl">Available on</h1>
                                <div className="flex space-x-4 mt-3 ms-2 my-4 md:ms-0">


                                    <FaFacebookSquare className="text-2xl hover:scale-110 hover:duration-200 hover:cursor-pointer" />
                                    <FaLinkedin className="text-2xl hover:scale-110 hover:duration-200 hover:cursor-pointer" />
                                    <FaYoutube className="text-2xl hover:scale-110 hover:duration-200 hover:cursor-pointer" />
                                    <FaTelegram className="text-2xl hover:scale-110 hover:duration-200 hover:cursor-pointer" />

                                </div>
                            </div>
                            <div className="font-medium ">
                                <h1 className="ml-4 text-xl">Currently working on</h1>
                                <div className="ms-8 flex space-x-4 mt-3 ">


                                    <SiMongodb className="text-2xl hover:scale-110 hover:duration-200 hover:cursor-pointer border rounded-full" />
                                    <SiExpress className="text-2xl hover:scale-110 hover:duration-200 hover:cursor-pointer border rounded-full" />
                                    <FaReact className="text-2xl hover:scale-110 hover:duration-200 hover:cursor-pointer border rounded-full" />
                                    <TbBrandJavascript className="text-2xl hover:scale-110 hover:duration-200 hover:cursor-pointer border rounded-full" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 md:flex flex items-center justify-center md:my-4 md:ml-24 order-1 md:order-2 hover:cursor-pointer hover:scale-105 hover:duration-300">
                    <img src={pic2} alt='Logo ' className=" md:w-[400px] w-[340px] my-4 rounded-full "></img>
                </div>
            </div>
      
        </div>
        <br/>
      <hr/>
        </>
    )
}

export default Home
