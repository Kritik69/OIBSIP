import './About.css'
import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function About() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
  return (
    <>
        <div className="about-wrapper">
            <div className="container">
                <div data-aos="fade-right" className="box">
                    <h3>INTRODUCTION</h3>
                    <hr />
                    <h5>Greetings,<br/>
                        I'm Kritik B Jambusariya from Shah & Anchor Kutchhi Engineering College currently pursuing Electronics and telecommunication Engineering, I've also been pursuing Web development( MERN Stack ).<br/>
                        I've built multiple <Link to='projects'>projects</Link> in this Domain and done <Link to='/work'>Internships</Link> in the same domain.<br/>
                        I'm intrigued by this Industry and want to learn even more similar technologies and make real life problem solving projects.
                    </h5>
                    <h4>Certifications</h4>
                    <ul>
                        <li><a href="https://drive.google.com/file/d/1bPl3bVbGlfvK1B81H3fefJNyJ1EE22R0/view?usp=sharing" className='prj-links' target="_blank" rel="noopener noreferrer">Full Stack Developer from Prepbytes</a></li>
                        <li><a href="https://www.udemy.com/certificate/UC-0c58122b-ed46-40a9-a57d-f978c5606534/" className='prj-links' target="_blank" rel="noopener noreferrer">Python Certification Training (beginner to expert level)</a></li>
                    </ul>
                </div>
                {/* <div data-aos="fade-left" className="box">
                    <h3>PROJECTS</h3>
                    <hr />
                    <ul>
                        <li><a rel="noreferrer" href="https://ishopecomm.netlify.app" className='prj-links' target='_blank'>E-commerce website</a></li>
                        <li><a rel="noreferrer" href="https://github.com/Kritik69/Assignment4" className='prj-links' target='_blank'>To-do Application using JavaScript</a></li>
                        <li><a rel="noreferrer" href="https://onlineassessment.netlify.app" className='prj-links' target='_blank'>Online Assessment</a></li>
                        <li><a rel="noreferrer" href="https://vectorart.netlify.app" className='prj-links' target='_blank'>Vector-Art Website</a></li>
                        <li><a rel="noreferrer" href="https://mcaworldwide.netlify.app/" className='prj-links' target='_blank'>MCAworldwide</a></li>
                        <li><a rel="noreferrer" href="https://mcaworldwide.in/" className='prj-links' target='_blank'>MCAworldwide</a></li>
                        <li><a rel="noreferrer" href="https://ooogenerator.netlify.app/" className='prj-links' target='_blank'>Out of Office mail generator</a></li>
                        <li><a rel="noreferrer" href="https://cardsgenerator.netlify.app/" className='prj-links' target='_blank'>Card Maker</a></li>
                        <li><a rel="noreferrer" href="https://ticketgenerator.netlify.app/" className='prj-links' target='_blank'>Online Ticket Maker</a></li>
                        <li><a rel="noreferrer" href="https://github.com/Kritik69/NextJsPrj" className='prj-links' target='_blank'>Next Js App</a></li>
                        <li><a rel="noreferrer" href="https://github.com/Kritik69" className='prj-links' target='_blank'>More..</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default About