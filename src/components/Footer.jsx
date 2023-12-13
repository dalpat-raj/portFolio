import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer__container__grid">
                <div>
                    <h1 className="footer__title">Dalpat Raj</h1>
                    <span className="footer__subtitle">Full Stack developer</span>
                </div>

                <ul className="footer__links">
                    <li>
                        <a href="#about" className='footer__link'>About Me</a>
                    </li>
                    <li>
                        <a href="#project" className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className='footer__link'>Contact</a>
                    </li>
                </ul>

                <div className="footer__socials">
                    <a href="https://www.facebook.com/dalpatraj.dadawat.5/" className='footer__social'>
                    <i className="uil uil-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/raj_dalpat_" className='footer__social'>
                    <i className="uil uil-instagram"></i>
                    </a>
                    <a href="https://twitter.com/" className='footer__social'>
                    <i className="uil uil-twitter-alt"></i>
                    </a>
                </div>
            </div>

            <p className="footer__copyright">
                &#169; dalpat.resumebuildin.com All right reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer