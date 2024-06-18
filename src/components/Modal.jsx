import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa';

const Modal = ({item, value}) => {
  const {img, detail__title, detail__description, created, role, technologies, view} = item[0];
  
  useEffect(()=>{
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    }
  },[])
    
  return (
    <div className="portfolio__container">
      <div className="portfolio__item__details">
        <div className="modal__img">
          <img src={img} alt="raj" />
        </div>
        <div className='modal__content'>
            <h3 className='detail__title'>{detail__title}</h3>
            <p className="detail__description">{detail__description}</p>
            <ul className="detail__info">
                <li>Created - <span>{created}</span></li>
                <li>Technologies - <span>{technologies}</span></li>
                <li>Role - <span>{role}</span></li>
                <li>View - <a  href={view}>{view}</a></li>
            </ul>
            <FaTimes onClick={value} className='close__icon'/>
        </div>
      </div>
    </div>
  )
}

export default Modal