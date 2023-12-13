import React, { useState } from 'react'
import logo from '../assets/logo.png'


const Navbar = () => {

    const [mobile, setMobile] = useState(false)
    const [navborder, setNavborder] = useState(false)
    const [activenav, setActivenav] = useState("#home")

    window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 550){
            setNavborder(true)
        }else{
            setNavborder(false)
        }
    })

  return (
        <nav>
            <div className={navborder ? "navscroll container navbar__main" : "container navbar__main"}>
                <div className="nav__logo">
                    <img src={logo} alt="" />
                </div>

                <div className={mobile ? "nav__menu show__menu" : "nav__menu"}>
                        <ul className="nav__list" onClick={()=>setMobile(!mobile)}>
                            <li className="nav__item">
                                <i className="uil uil-estate nav__icon"></i>
                                <a href="#home" 
                                onClick={()=>setActivenav('#home')} className={activenav === "#home" ? "nav__link active__link" : "nav__link"}
                                >Home</a>
                            </li>
                            <li className="nav__item">
                                <i className="uil uil-user nav__icon"></i>
                                <a href="#about" 
                                onClick={()=>setActivenav('#about')} className={activenav === "#about" ? "nav__link active__link" : "nav__link"}
                                >About</a>
                            </li>
                            <li className="nav__item">
                                <i className="uil uil-briefcase-alt nav__icon"></i>
                                <a href="#education" 
                                onClick={()=>setActivenav('#education')} className={activenav === "#education" ? "nav__link active__link" : "nav__link"}
                                >educations</a>
                            </li>
                            <li className="nav__item">
                                <i className="uil uil-file-alt nav__icon"></i>
                                <a href="#skills" 
                                onClick={()=>setActivenav('#skills')} className={activenav === "#skills" ? "nav__link active__link" : "nav__link"}
                                >Skills</a>
                            </li>
                            <li className="nav__item">
                                <i className="uil uil-scenery nav__icon"></i>
                                <a href="#project" 
                                onClick={()=>setActivenav('#project')} className={activenav === "#project" ? "nav__link active__link" : "nav__link"}
                                >Projects</a>
                            </li>
                            <li className="nav__item">
                                <i className="uil uil-message nav__icon"></i>
                                <a href="#contact" 
                                onClick={()=>setActivenav('#contact')} className={activenav === "#contact" ? "nav__link active__link" : "nav__link"}
                                >Contact</a>
                            </li>
                        </ul>
                    <button onClick={()=>setMobile(false)}><i className="uil uil-times nav__close"></i></button>
                </div>

                <div className="nav__toggle">
                <button onClick={()=>setMobile(!mobile)}><i className="uil uil-apps"></i></button>
                </div>
            </div>
        </nav>
  )
}

export default Navbar