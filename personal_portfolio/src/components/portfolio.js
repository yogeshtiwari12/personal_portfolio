import React from 'react';
import reactjs from '../images/reactjs.png';
import javascript from '../images/javascript.png';
import css from '../images/css.jpg';
import java from '../images/java.png';
import mongodb from '../images/mongodb.jpg';
import express from '../images/express.png';
import node from '../images/node.png';
import python from '../images/python.webp';

function Portfolio() {
    const cardItems = [
        { id: 1, logo: reactjs, name: "ReactJS" },
        { id: 2, logo: mongodb, name: "MongoDB" },
        { id: 3, logo: javascript, name: "JavaScript" },
        { id: 4, logo: css, name: "CSS" },
        { id: 5, logo: python, name: "Python" },
        { id: 6, logo: express, name: "Express" },
        { id: 7, logo: java, name: "Java" },
        { id: 8, logo: node, name: "Node" },
    ];

    return (
        <>
        <div className="skills max-w-screen-2xl mx-auto md:mx-20 p-8 ">
        <h1 className="text-3xl font-bold mb-8 mx-3">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {cardItems.map(({ id, logo, name }) => (


            <div key={id} className="card flex-wrap bg-base-100 shadow-xl px-4 py-4 rounded-lg  hover:scale-105 border hover:duration-200 hover:cursor-pointer">
             <div className="aspect-ratio h-24 w-24 md:mx-24 mx-24">
             
                <img src={logo} alt={name} className="object-contain w-full rounded-full border-2 h-full  p-2" />
              
             </div>
              <div className="card-body text-center">
                <h2 className="card-title items-center justify-center text-2xl font-bold mt-4">{name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br/>
      <hr/>
      
      </>
    );
}

export default Portfolio;
