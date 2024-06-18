import React, { useState } from 'react'
import Modal from './Modal'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const Projexts = () => {

    const obj = [
        {
            id: 1,
            work__title: 'Multi Vendor E_Commerce',
            img: '/images/work-2.png',
            detail__title: 'Design & Devlope',
            detail__description: 'This is my first live project in which both frontend and backend have been done by me and deployed on VPS server.',
            created: '26 Sep 2023',
            technologies: 'React NodeJs MongoDB JavaScript Html Sass',
            role: 'Frontend & Backend',
            view: 'https://areenaa.in'
        },
        {
            id: 2,
            work__title: 'Web Design',
            img: '/images/work-1.png',
            detail__title: 'Github Project',
            detail__description: 'in this project i intigration API with javaScript You You can also check my code',
            created: '22 dec 2021',
            technologies: 'html css JavaScript',
            role: 'frontend',
            view: 'github.com/dalpat-raj'
        },
        {
            id: 3,
            work__title: 'Web',
            img: '/images/work-3.webp',
            detail__title: 'Web',
            detail__description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quis totam iusto quasi!',
            created: '4 dec 2020',
            technologies: 'html css java script',
            role: 'backend',
            view: 'resumebuildin.com'
        },
    ]

    const [showModal, setShowModal] = useState(false)
    const [verifyId, setVerifyId] = useState('')

    const handleChange=(e)=>{
        setVerifyId(e.target.id)
        setShowModal(true)
    }

    const closeModal=()=>setShowModal(false);

  return (
    <section className='project__section container' id='project'>
        <h2 data-aos="fade-down" data-heading="My Portfolio" className='section__title__heading'>Projects Work</h2>

        <div className="work__filters">
            <span className="work__item active__work">All</span>
            <span className="work__item">Web</span>
            <span className="work__item">App</span>
            <span className="work__item">Design</span>
        </div>

        <div className="work__container__grid">

            {
                obj.map((item)=>(
                    <div data-aos="fade-up" className="work__card" key={item.id}>
                        <img src={item.img} alt="work" className='work__img' />
                        <h3 className='work__title'>{item.work__title}</h3>
                        <span className="work__button" id={item.id} onClick={handleChange} >Demo 
                        <MdKeyboardDoubleArrowRight className='work__button__icon'/>
                        </span>
                    </div>
                ))
            }
            { showModal && <Modal value={closeModal} item={obj.filter(x=>x.id === JSON.parse(verifyId))}/> }

            

        </div>

    </section>
  )
}

export default Projexts