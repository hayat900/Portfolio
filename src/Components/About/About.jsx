import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Student | Memer | Web Enthusiast | Coder'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Web Enthusiast</h3>
                    <p className='about-details'>
                        Being a passionate web developer,love building new websites using new frameworks and technologies.I Have built over 10 websites.For a 
                        detailed description,do checkout my {' '}
                        <a
                            className='about-link-element'
                            href='https://github.com/hayat900'
                        >
                            github page!
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Coder</h3>
                    <p className='about-details'>
                        I love solving coding questions and have participated in several such competitions.
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Memer</h3>
                    <p className='about-details'>
                        I am a memer who loves creating and sharing humorous memes.Do checkout my instagram page {' '} 
                        <a
                            className='about-link-element'
                            href='https://instagram.com/unscrambled_memes'
                        >
                             Unscrambled_memes  
                        </a>
                         {' '}for some rib-tickling memes.
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <Footer
                phrase='Check out my '
                link='projects!'
                linkaddress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;