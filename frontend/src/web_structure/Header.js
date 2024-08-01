import '.././css/header.css';
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import su from '.././pics/images.jpg'

import React, { useState } from 'react'

function Header() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    
    return (
        <div className="header">
            <div className="left-section">
                <img className="su-icon" src={su}/>
            </div>
            <div className="middle-section">
                <p className="tiny5-regular">
                    NSF REU: EXCERCISE
                </p>
            </div>
            {/*For adding a navigation menu, will not use in final design
            <div className='hamburger' onClick={handleNav}>
                <HiOutlineMenuAlt4 className='icon' />
            </div>
            
            <div className={nav ? 'menu-active' : 'menu'}>
                        <ul className="mobile-nav">
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Upload</li>
                        <li>Site</li>
                        </ul>
            </div>*/}

            
        </div>
    )
}

export default Header