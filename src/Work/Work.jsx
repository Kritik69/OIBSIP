import React from 'react'
import './Work.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import NavBar from '../NavBar/NavBar'

function Work() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
  return (
    <>
        <NavBar title='Work Experience' />
        <div data-aos="fade-right" className="box">
            <div className="work-exp">
                <div className="work-box">
                    <h4>Botx Automations</h4>
                    <h5>Duration: April 2022 - May 2020</h5>
                    <h5>Position: Web Developer Intern</h5>
                    <p>Interned for BotX Automation as a Web developer Online Ticket Maker and Card Maker projects mentioned above in the list were madefor BotX Automation. These websites were built using Basic JAVASCRIPT.</p>
                    <h5>Projects Built Under Botx</h5>
                    <ul>
                        <li><a rel="noreferrer" href="https://ooogenerator.netlify.app/" className='prj-links' target='_blank'>Out of Office mail generator</a></li>
                        <li><a rel="noreferrer" href="https://cardsgenerator.netlify.app/" className='prj-links' target='_blank'>Card Maker</a></li>
                        <li><a rel="noreferrer" href="https://ticketgenerator.netlify.app/" className='prj-links' target='_blank'>Online Ticket Maker</a></li>
                    </ul>
                    <button className='btn btn-primary'><a rel="noreferrer" target='_blank' className='prj-links' href="https://drive.google.com/file/d/1-mNAL_8qyVpxkF0p-C-mYBxzJoHvXTnU/view?usp=sharing">Certificate</a></button>
                </div>
                <div className="work-box">
                    <h4>V-ART Services</h4>
                    <h5>Duration: June 2022 - July 2020</h5>
                    <h5>Position: Web Developer Intern</h5>
                    <p>Interned for V-Art as a Web developer, mostly working with React JS. Website built at V-Art</p>
                    <ul>
                        <li><a rel="noreferrer" href="https://vectorart.netlify.app" className='prj-links' target='_blank'>Vector-Art Website</a></li>
                        <li><a rel="noreferrer" href="https://mcaworldwide.netlify.app/" className='prj-links' target='_blank'>MCAworldwide</a></li>
                        <li><a rel="noreferrer" href="https://mcaworldwide.in/" className='prj-links' target='_blank'>MCAworldwide</a></li>
                    </ul>
                    <button className='btn btn-primary'><a rel="noreferrer" target='_blank' href="https://drive.google.com/file/d/1jIdizFIDnHU1o4KhOUis2umN3fymLQVU/view?usp=sharing" className="prj-links">Certificate</a></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Work