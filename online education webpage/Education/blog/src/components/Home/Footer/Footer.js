import React from 'react'
import './footer.css';
import {BsTwitter,BsInstagram} from 'react-icons/bs';
import {FiFacebook} from 'react-icons/fi';
const Footer = () => {
  return (
             
      <div className='footer'>

                     <div className='Footer_main'>
                                        <h1>ACADEMIA</h1>
                                        <h2>ONLINE EDUCATION & LEARNING</h2>
                                        <p>hello i am from the team of academia from
                                         the world. for the onboard you with us</p>

                                         <div className='footer_social'>
                                                            <FiFacebook className='icon'/>
                                                            <BsTwitter className='icon'/>
                                                            <BsInstagram className='icon'/>
                                         </div>
                     </div>

                     <div className='explore'>
                              <h4>Explore</h4>
                              <article>
                                <h5>--About Us</h5>
                                <h5>--Team</h5>
                                <h5>--Services</h5>
                                <h5>--Blog</h5>
                                <h5>--contact Us</h5>
                              </article>
                     </div>
                      
                     <div className='explore'>
                              <h4>Quick Links</h4>
                              <article>
                                <h5>--Contact Us</h5>
                                <h5>--Pricing</h5>
                                <h5>--Privacy</h5>
                                <h5>--Feedbacks</h5>
                                <h5>--Team & Students</h5>
                              </article>
                     </div>

                     <div className='explore'>
                              <h4>Have a Question</h4>
                              <article>
                                  <p>Khosa house mehbob town tando jam</p>
                                  <p>+923043042589</p>
                                  <p>info@student.portal.edu.pk</p>
                              </article>
                     </div>
                     
      </div>
  )
}

export default Footer