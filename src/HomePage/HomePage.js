import './HomePage.css'
import TESTDATA from '../content.json'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <>
            <div className="home-main">
                <div className='header'>
                    <div className="heading">PORTFOLIO</div>
                    <input className='search-bar' type="text" placeholder='Search Projects' 
                        onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }} 
                    />
                </div>
                <Banner />
                <div className='nav-bar'>
                            <Link to='/'>
                                <button className='prj-title'>Projects</button>
                            </Link>
                            <Link to='resume'>
                                <button className='prj-title'>Resume</button>
                            </Link>
                            <button className='prj-title'>GitHub Link</button>
                            <button className='prj-title'>Linked In</button>
                </div>
                <div className='projects'>
                {TESTDATA
                .filter((val)=> {
                    if (searchTerm === "") {
                      return val
                    }
                    else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.description.toLowerCase().includes(searchTerm.toLowerCase()) ) {
                      return val
                    }
                    return 0; 
                  })
                  .map((val, key) => {
                    return (
                        <div className='project-card'>
                            <h2 className='title'>{val.title}</h2>
                            <img src={val.imgUrl} alt='' className='prjImg' />
                            <p className='description'>{val.description}</p>
                            <button className='card-btn'>to {val.title}</button>
                        </div>
                    )
                })}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default HomePage;