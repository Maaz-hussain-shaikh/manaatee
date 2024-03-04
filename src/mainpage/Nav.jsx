import React from 'react'

const Nav = () => {
   
    return (
        <>
            <nav>
                <div className='logo'>

                    <img src="imges\traveltech logo.png" alt="logo" />
                </div>

                <ul className='links'>
                    <li><a href="/" className='hero'>Home</a></li>
                    <li><a href="/" className='hero'>About</a></li>
                    <li><a href="/" className='hero'>Memories</a></li>
                    <li><a href="/" className='hero'>For partners</a></li>
        
                </ul>
                <h5>Call us +91 8982001240</h5>
                <div className="toggel-btn">

                    <i className="fa-solid fa-bars"></i>
                </div>

            </nav>
        </>
    )
}

export default Nav
