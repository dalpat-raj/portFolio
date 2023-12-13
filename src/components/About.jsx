import React from 'react'
import banner2 from '../assets/banner2.png'

const About = () => {
  return (
    <section className='main__about container' id='about'>
      <div className="about__section" >
        <h2 data-aos="fade-down" data-heading="My Intro" className='section__title__heading'>About Me</h2>

        <div className="about__container">
          <img data-aos="fade-up"
            src={banner2} alt="banner" className='about__img'/>

          <div data-aos="fade-up"className="about__data">
            <h3 className='about__heading'>Hi, I'am Dalpat Raj, Based in Rajsthan</h3>
            <p className='about__description'>Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.</p>
            <div className="about__info">
              <div className="about__box">
                <i className="uil uil-award-alt about__icon"></i>
                <h3 className='about__title'>Experience</h3>
                <span className='about__subtitle'>2 + years</span>
              </div>

              <div className="about__box">
                <i className="uil uil-suitcase-alt about__icon"></i>
                <h3 className='about__title'>Completed</h3>
                <span className='about__subtitle'>10 + projects</span>
              </div>

              <div className="about__box">
                <i className="uil uil-headphones-alt about__icon"></i>
                <h3 className='about__title'>Support</h3>
                <span className='about__subtitle'>online 24/7</span>
              </div>
            </div>
            <a href="#contact" className='button'><i className="uil uil-message button__icon"></i>Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About