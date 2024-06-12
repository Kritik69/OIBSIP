import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Education.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../Footer/Footer';

function Education() {
  return (
    <>
        <NavBar title='Education'/>
        <div className="edu-wrapper">
            <div className="container">
                <div className="edu-parent">
                    <Card className="text-left edu-cards">
                        <Card.Header className='edu-card-header'>Schooling</Card.Header>
                            <Card.Body className='inner-card'>
                                <div className="card-left">
                                    <Card.Title>Sheth Vidya Mandir English High School</Card.Title>
                                    <h6>Passing Year: 2017</h6>
                                    <h6>CGPA: 7.2</h6>
                                    <Button variant="primary" target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1oW_Oyt_tSPEH0pNVZKXJngH17UiBNrAx/view?usp=sharing'>Marksheet</Button>
                                </div>
                                <div className="card-right">
                                    <iframe title='school-location' src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d3603.6552066408763!2d72.82802289677383!3d19.40366148687875!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d19.404489899999998!2d72.8307348!4m5!1s0x3be7a935330f823f%3A0xf18bb24c41b62359!2ssheth%20vidya%20mandir!3m2!1d19.4026058!2d72.8298715!5e0!3m2!1sen!2sin!4v1663400027572!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </Card.Body>
                    </Card>
                    <Card className="text-left edu-cards">
                        <Card.Header className='edu-card-header'>12th/HSC</Card.Header>
                            <Card.Body className='inner-card'>
                                <div className="card-left">
                                    <Card.Title>St Peter Junior College of Science,Commerce and Arts</Card.Title>
                                    <h6>Passing Year: 2019</h6>
                                    <h6>Percentage: 59.38%</h6>
                                    <Button variant="primary" target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1mfruCME3oYg-cLpzTlI8B7fdyQpnXsqE/view?usp=sharing'>Marksheet</Button>
                                </div>
                                <div className="card-right">
                                    <iframe title='12thCollege-location' src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d15053.95854433071!2d72.81897382915318!3d19.39123919052377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d19.404489899999998!2d72.8307348!4m5!1s0x3be7aebdea8dde41%3A0x28ff6f0d78d1b88b!2sst.peters%20junior%20college!3m2!1d19.379570299999997!2d72.82084789999999!5e0!3m2!1sen!2sin!4v1663400515919!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </Card.Body>
                    </Card>
                    <Card className="text-left edu-cards">
                        <Card.Header className='edu-card-header'>Engineering</Card.Header>
                            <Card.Body className='inner-card'>
                                <div className="card-left">
                                    <Card.Title>Shah & Anchor Kutchhi Engineering College</Card.Title>
                                    <h6>Passing Year: 2023</h6>
                                    <h6>SEM 1: 6.39</h6>
                                    <h6>SEM 2: 7.50</h6>
                                    <h6>SEM 3: 9.25</h6>
                                    <h6>SEM 4: 9.00</h6>
                                    <h6>SEM 5: 9.61</h6>
                                    <h6>SEM 6: 7.64</h6>
                                </div>
                                <div className="card-right">
                                    <iframe title='college-location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3528973387993!2d72.90946941490083!3d19.048215687103834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5f39a7d77d1%3A0x9ebbdeaea9ec24ae!2sShah%20%26%20Anchor%20Kutchhi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1663400875223!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Education