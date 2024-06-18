import React, { useState } from 'react'
import { BsArrowUp } from 'react-icons/bs'

const ScrollUp = () => {

  const [showScroll, setShowScroll] = useState(false)

  window.addEventListener('scroll', function () {
    if(this.scrollY >= 572) setShowScroll(true)
    else setShowScroll(false)
  })

  return (
    <a href="#home" className={showScroll ? "show__scroll" : "scrollup"}>
        <BsArrowUp className='scrollup__icon'/>
    </a>
  )
}

export default ScrollUp