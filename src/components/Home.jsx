import React from 'react'
import { BsEnvelope, BsMessenger, BsWhatsapp } from 'react-icons/bs'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
  return (
    <main id='home' className='home__main container'>
      <div className='phone__banner'></div>
        <section className='home' id='home'>
            <div className="home__container ">

                <div className="home__social">
                  <span className='home__social__follow'>Follow Me</span>
                  <div className="home__social__links">
                    <a data-aos="fade-left" href="https://www.facebook.com/dalpatraj.dadawat.5/" className='home__social__link'>
                    <FiFacebook/>
                    </a>
                    <a data-aos="fade-left" href="https://www.instagram.com/raj_dalpat_" className='home__social__link'>
                    <FiInstagram/>
                    </a>
                    <a data-aos="fade-left" href="https://twitter.com/" className='home__social__link'>
                    <FiTwitter/>
                    </a>
                  </div>
                </div>     

                <div className="home__data">
                  <h1 className='home__title'>Hi, I'am&nbsp;
                  <Typewriter
                    words={['Dalpat Raj', 'Developer', 'Coder', 'Web Designer']}
                    loop={Infinity}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    cursorBlinking={true}
                    cursorColor={"#E1094A"}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                  />
                  </h1>
                  <h3 className='home__subtitle'>Full Stack Devloper</h3>
                  <p className='home__description'>high level experience in web design and devlopment knowledge,
                  prodecing qualiy work.</p>
                  <a href="MyResume.pdf" download="MyResume.pdf" className='button'><i className='uil uil-download-alt'></i>Download Resume</a>
                </div>

                <div className="my__info">
                  <div className="info__item">
                  <BsMessenger className='info__icon'/>
                    <div>
                      <h3 className='info__title'>Messenger</h3>
                      <span className='info__subtitle'>Dalpat Raj</span>
                    </div>
                  </div>

                  <div className="info__item">
                    <BsWhatsapp className='info__icon'/>
                    <div>
                      <h3 className='info__title'>Whatsapp</h3>
                      <span className='info__subtitle'>+91 9587478769</span>
                    </div>
                  </div>

                  <div className="info__item">
                    <BsEnvelope className='info__icon'/>
                    <div>
                      <h3 className='info__title'>Email</h3>
                      <span className='info__subtitle'>Dalpatt1212@gmail.com</span>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home