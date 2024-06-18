import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { IoBookmarksOutline, IoHomeOutline } from 'react-icons/io5'
import { CiUser } from 'react-icons/ci'
import { GoBriefcase, GoProject } from 'react-icons/go'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { IoIosApps } from 'react-icons/io'
import { FaTimes } from 'react-icons/fa'


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
                                <IoHomeOutline className='nav__icon'/>
                                <a href="#home" 
                                onClick={()=>setActivenav('#home')} className={activenav === "#home" ? "nav__link active__link" : "nav__link"}
                                >Home</a>
                            </li>
                            <li className="nav__item">
                                <CiUser className='nav__icon'/>
                                <a href="#about" 
                                onClick={()=>setActivenav('#about')} className={activenav === "#about" ? "nav__link active__link" : "nav__link"}
                                >About</a>
                            </li>
                            <li className="nav__item">
                                <GoBriefcase className='nav__icon'/>
                                <a href="#education" 
                                onClick={()=>setActivenav('#education')} className={activenav === "#education" ? "nav__link active__link" : "nav__link"}
                                >educations</a>
                            </li>
                            <li className="nav__item">
                                <IoBookmarksOutline className='nav__icon'/>
                                <a href="#skills" 
                                onClick={()=>setActivenav('#skills')} className={activenav === "#skills" ? "nav__link active__link" : "nav__link"}
                                >Skills</a>
                            </li>
                            <li className="nav__item">
                                <GoProject className='nav__icon'/>
                                <a href="#project" 
                                onClick={()=>setActivenav('#project')} className={activenav === "#project" ? "nav__link active__link" : "nav__link"}
                                >Projects</a>
                            </li>
                            <li className="nav__item">
                            <BiMessageSquareDetail className='nav__icon'/>
                                <a href="#contact" 
                                onClick={()=>setActivenav('#contact')} className={activenav === "#contact" ? "nav__link active__link" : "nav__link"}
                                >Contact</a>
                            </li>
                        </ul>
                    <button onClick={()=>setMobile(false)}><FaTimes className='nav__close'/></button>
                </div>

                <div className="nav__toggle">
                <button onClick={()=>setMobile(!mobile)}><IoIosApps/> </button>
                </div>
            </div>
        </nav>
  )
}

export default Navbar