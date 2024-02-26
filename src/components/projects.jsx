import React from 'react'
import "../styles/projects.css";
import Pcard from './pcard';
import zomato from "../assets/zomato.png";
import news from "../assets/news.png"
import netflix from "../assets/netflix.png"
const projectData=[
    {name:"Zomato clone",
    info:"Developed Full stack responsive and fully functional web application using React for front, Node Js for backend and MongoDB for database.",
    plink:"https://marvelous-valkyrie-a45f97.netlify.app/",
    sourceCode:"https://github.com/Akshaysawant917/Zomato-frontend",
    imglink: zomato
    },
    {name:"News api",
    info:"Developed news fetching website from news Api.",
    plink:"https://akshaysawant917.github.io/News-app/",
    sourceCode:"https://github.com/Akshaysawant917/News-app",
    imglink:news
    },
    {name:"Netflix-Front",
    info:"Clone netflix websites frontend design and made responsive for mobile view",
    plink:"https://akshaysawant917.github.io/Netflix-clone/",
    sourceCode:"https://github.com/Akshaysawant917/Netflix-clone",
    imglink:netflix
    }
]
const Projects = () => {
  return (
    <div>
        <section className="project">
       
        <div className="projectwrapper">
            {projectData.map((item) => {
              return <Pcard projectDataTo={item} />;
            })}
        </div>
    </section>
    <div className="blur1"></div>
      <div className="blur2"></div>
    </div>
  )
}

export default Projects