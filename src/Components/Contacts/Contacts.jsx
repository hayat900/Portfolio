import React from "react";
import './Contacts.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import medium from './../../assets/me.png';
import web from './../../assets/web.png';
import aboutAnime from './../../assets/about_anime.gif';
const Contacts=()=>{
    return(
        <div className="section-container">
            
            <Header
                heading='Get in touch.'
                details='Feel free to send me an email to contact me'
            />
           
           
            {/* Form section */}
            <div className='contact-form-container'>
                <form className='contact-form'>
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>
            
            <div className='social-icons-container'>
                <a href='https://github.com/hayat900' className='social-icon'>
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://linkedin.com/in/disha-mariyola-dsouza-22090619a/'
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
               
                {/* <a
                    href='https://medium.com/@madhavbahl'
                    className='social-icon'
                >
                    <img src={medium} alt='social' />
                </a> */}
                <a href='https://hayat900.github.io/portfolio' className='social-icon'>
                    <img src={web} alt='social' />
                </a>
               
            </div>
            <Footer
                phrase='Read more '
                linkaddress='/about'
                link='about me.'
            />

            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
            </div>
    );
};
export default Contacts;