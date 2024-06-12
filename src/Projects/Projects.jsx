import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Projects.css'

function Projects() {
  return (
    <>
        <NavBar title='Projects' />
        <div className="projects-wrapper">
            <div className="container">
                <div className="grid-container">
                    <a href="https://ishopecomm.netlify.app" className='prj-links' target="_blank" rel="noopener noreferrer">
                        <div class="grid-item">
                            <h3>E-Comm Website</h3>
                        </div>
                    </a>
                    <a href="https://onlineassessment.netlify.app" className='prj-links' target="_blank" rel="noopener noreferrer">
                        <div class="grid-item">
                            <h3>Online Assessment</h3>
                        </div>
                    </a>
                    <a href="https://sirenblog.netlify.app" className='prj-links' target="_blank" rel="noopener noreferrer">
                        <div class="grid-item">
                            <h3>Blog App</h3>
                        </div>
                    </a>
                    <a href="https://vectorart.netlify.app" className='prj-links' target="_blank" rel="noopener noreferrer">
                        <div class="grid-item">
                            <h3>Vector Art Website</h3>
                        </div>
                    </a>
                    <a href="https://mcaworldwide.netlify.app/" className='prj-links' target="_blank" rel="noopener noreferrer">
                        <div class="grid-item">
                            <h3>MCA WorldWide</h3>
                        </div>
                    </a>
                    <a href="https://ooogenerator.netlify.app/" className='prj-links' target="_blank" rel="noopener noreferrer">
                        <div class="grid-item">
                            <h3>OOO Generator</h3>
                        </div>
                    </a>
                    <a href="https://cardsgenerator.netlify.app/" className='prj-links' target="_blank" rel="noopener noreferrer">
                        <div class="grid-item">
                            <h3>Card Generator</h3>
                        </div>
                    </a>
                    <a href="https://ticketgenerator.netlify.app/" className='prj-links' target="_blank" rel="noopener noreferrer">
                        <div class="grid-item">
                            <h3>Online Ticket Maker</h3>
                        </div>
                    </a>
                    <a href="https://github.com/Kritik69/NextJsPrj" className='prj-links' target="_blank" rel="noopener noreferrer">
                        <div class="grid-item">
                            <h3>Next Js App</h3>
                        </div>
                    </a>
                    <a href="https://github.com/Kritik69/Assignment4" className='prj-links' target="_blank" rel="noopener noreferrer">
                        <div class="grid-item">
                            <h3>To-Do Application</h3>
                        </div>
                    </a>
                    <a href="https://github.com/Kritik69" className='prj-links' target="_blank" rel="noopener noreferrer">
                        <div class="grid-item">
                            <h3>More..</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects