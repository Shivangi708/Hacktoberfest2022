import React from 'react'
import './news.css'
import {AiTwotoneMessage} from 'react-icons/ai';
const News = () => {
  return (
    <div className='news'>
                    <div>
                    <h2>Newsletter -Stay tune and get the latest</h2>
                    <p>For far away, behind the word mountains</p>
                    </div>

                    <div>
                            <form> 
                                        <input type='text' placeholder="Enter Email Address"/>
                                            {/* <AiTwotoneMessage/> */}
                                                                       </form>
                    </div>
    </div>
  )
}

export default News