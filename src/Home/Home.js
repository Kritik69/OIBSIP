import React from 'react'
import './Home.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
import Banner from './../Banner/Banner';
import About from '../About/About';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
        <div className='wrapper'>
                <NavBar title='Home' />
                <Banner />
                <About />
                <Footer />
        </div>
    </>
  )
}

export default Home