"use client"
import {useState} from 'react'
import { FaReact } from "react-icons/fa"
import { FaDatabase } from "react-icons/fa"

const data = [
    {
        icon: <FaReact className='mx-auto text-white text-4xl md:text-5xl lg:text-6xl'/>,
        title: "Front-End",
        techList: ["HTML","CSS", "JavaScript", "ReactJs","NextJs", "Tailwind", "Git"]
    },
    {
        icon: <FaDatabase className='mx-auto text-white text-4xl md:text-5xl lg:text-6xl'/>,
        title: "Back-End",
        techList: ["Node", "MongoDb", "PostGres", "Firebase"]
    }
]

const Skills = () => {

    const [skills, setSkills] = useState(data)
    
  return (
    <div className='text-slate-200 m-auto md:flex md:justify-center gap-10 flex-wrap bg-slate-800'>
        {skills.map((tech) => (
            <div key={tech.title} className='text-center max-w-md p-10'>
                {tech.icon}
            <div> 
              <h3 className='text-2xl md:text-3xl lg:text-4xl font-black mt-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700'>
                <span >{tech.title}</span>
              </h3>
              {tech.techList.map((item) => (
                <p key={item} className='mt-5 text-lg md:text-xl lg:text-2xl font-black text-black bg-gradient-to-r from-white to-blue-300 md:p-2 rounded-full'>{item}</p>
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Skills