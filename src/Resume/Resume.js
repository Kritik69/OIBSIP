import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Resume.css';

function Resume() {
    return (
        <>
            <div className="resume-main">
                <div className="header">
                    <h1 className='title-resume'>Resume</h1>
                    <Link to='/' className='prj-title-resume'>Home</Link>
                </div>
                <div className='name'>Name MiddleName SurName</div>
                <div className='skills-section'>
                    <h2 className='resume-heading'>Special Skills</h2>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </li>                       
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </li>                       
                    </ul>  
                    <div className='project-section'>
                        <h2 className='resume-heading'>Projects</h2>    
                        <ul>
                            <li className='text-dec-none'>
                                <a href='google.com'>
                                    Blog Website
                                </a>
                            </li>
                            <li className='text-dec-none'>
                                <a href='google.com'>
                                    E-comm Website
                                </a>
                            </li>
                            <li className='text-dec-none'>
                                <a href='google.com'>
                                    To-Do Website
                                </a>
                            </li>
                            <li className='text-dec-none'>
                                <a href='google.com'>
                                    Smart Toll using STM-32
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='experience-section'>
                        <h2 className='resume-heading'>Experience</h2>
                        <p className='hover'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. 
                        </p>
                    </div>
                    <div className='education-section'>
                        <h2 className='resume-heading'>Education</h2>
                        <ul>
                            <li>First Year - ##</li>
                            <li>Second Year - ##</li>
                            <li>Third Year - ##</li>
                            <li>Fourth Year - ##</li>
                        </ul>
                    </div>
                    <div className='about-myself-section'>
                        <h2 className='resume-heading'>About Myself</h2>
                            <p className='hover'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem.
                            </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Resume;