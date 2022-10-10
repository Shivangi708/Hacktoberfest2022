import React from 'react'
import './blog.css';
import {FaUserAlt} from 'react-icons/fa';
import {CgCalendarDates} from 'react-icons/cg';
import {TiMessages} from 'react-icons/ti';
import blog1 from './../Images/blog3.jpg';
import blog2 from './../Images/blog2.jpg';
import blog3 from './../Images/blog1.jpg';

const Blog = () => {
  return (
                    <div className='blog'>
                    <p>OUR BLOG</p>
                    <h2 className='blog_heading' id='heading_blog'>Recent From Blog</h2>
                    <div className='blog_course'>

                                        <article className='blog_article'>
                                                <div className='blog_image'>
                                                          <img src={blog3}/>
                                                </div>
                                            <div className='blog_text'>
                                              <div className='blog_menu'>
                                                <small> <FaUserAlt className='blog_icon'/>Admin</small>
                                                <small> <CgCalendarDates className='blog_icon'/>Jan 18,2022</small>
                                                <small> <TiMessages className='blog_icon'/>5 COMENTS</small>
                                              </div>
                                              <div className='blog_content'>
                                                <h2>Build your Dream Software Engineering Career</h2>
                                                <p>The material used in this presentation i.e., pictures/graphs/text, etc. is 
                                                   solely intended for educational/teaching purpose.   </p>
                                              </div>
                                            </div>
                                        </article>

                                        <article className='blog_article'>
                                                <div className='blog_image'>
                                                          <img src={blog1}/>
                                                </div>
                                            <div className='blog_text'>
                                              <div className='blog_menu'>
                                                <small> <FaUserAlt className='blog_icon'/>Admin</small>
                                                <small> <CgCalendarDates className='blog_icon'/>Apr 25,2022</small>
                                                <small> <TiMessages className='blog_icon'/>25 COMENTS</small>
                                              </div>
                                              <div className='blog_content'>
                                              <h2>Build your Dream Software Engineering Career</h2>
                                                <p>The material used in this presentation i.e., pictures/graphs/text, etc. is 
                                                   solely intended for educational/teaching purpose.   </p>
                                              </div>
                                            </div>
                                        </article>

                                        <article className='blog_article'>
                                                <div className='blog_image'>
                                                          <img src={blog2}/>
                                                </div>
                                            <div className='blog_text'>
                                              <div className='blog_menu'>
                                                <small> <FaUserAlt className='blog_icon'/>Admin</small>
                                                <small> <CgCalendarDates className='blog_icon'/>Feb 16,2022</small>
                                                <small> <TiMessages className='blog_icon'/>30 COMENTS</small>
                                              </div>
                                              <div className='blog_content'>
                                              <h2>Build your Dream Software Engineering Career</h2>
                                              <p>The material used in this presentation i.e., pictures/graphs/text, etc. is 
                                                   solely intended for educational/teaching purpose.   </p>
                                              </div>
                                            </div>
                                        </article>

                    </div>
    </div>
      
  )
}

export default Blog
