import React from 'react'
import codechef from '../images/codechef2.jpg'
import linkedin from '../images/linkedln.webp'
import gfg from '../images/gfg.png'
import github from '../images/github.jpg'
import hackerrank from '../images/hackerank.png'
import codeforces from '../images/codeforces.png'
import interviewbit from '../images/interviewbit.webp'
import leetcode from '../images/leetcode.webp'

function Platform() {

  const image = [
    {
      id: 1,
      image: codechef,
      name: "Codechef",
      link: "https://www.codechef.com/users/yogesh51"
    },
    {
      id: 2,
      image: codeforces,
      name: "Codeforces",
      link: "https://codeforces.com/profile/yogeshT1"


    },
    {
      id: 3,
      image: linkedin,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/yogesh-tiwari-a7245a251/"

    },
    {
      id: 4,
      image: gfg,
      name: "GFG",
      link: "https://www.geeksforgeeks.org/user/yogeshtiwari12/"

    },
    {
      id: 5,
      image: github,
      name: "Github",
      link: "https://github.com/yogeshtiwari12?tab=repositories"

    },

    {
      id: 7,
      image: hackerrank,
      name: "Hackerrank",
      link: "https://www.hackerrank.com/profile/yt781703"

    },
    {
      id: 8,
      image: interviewbit,
      name: "InterviewBit",
      link: "https://codeforces.com/profile/yogeshT1"

    },
    {
      id: 9,
      image: leetcode,
      name: "Leetcode",
      link: "https://leetcode.com/u/yogesh_tiwari23/"

    },

  ]
  return (
    <>
    <div className="experience max-w-screen-2xl mx-auto md:mx-20 p-8 ">
      <h1 className="text-3xl font-bold my-8 mx-2">Platform Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {image.map(({ id, image, name, link }) => (


          <div key={id} className="card flex-wrap bg-base-100 shadow-xl px-4 py-4 rounded-lg  hover:scale-105 border hover:duration-200 hover:cursor-pointer">
            <div className="">

              <img src={image} alt={name} className="object-contain w-full   h-36  p-2" />



              <a
                href={link}
                className="card-title items-center justify-center text-2xl font-bold mt-4 hover:underline hover:decoration-green-500 hover:duration-200 underline-offset-4"
                onClick={() => console.log(link)}
              >
                {name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    <br/>
    <hr/>
    </>
  )
}

export default Platform
