import React, { useState } from 'react'

const ScrollUp = () => {

  const [showScroll, setShowScroll] = useState(false)

  window.addEventListener('scroll', function () {
    if(this.scrollY >= 572) setShowScroll(true)
    else setShowScroll(false)
  })

  return (
    <a href="#home" className={showScroll ? "show__scroll" : "scrollup"}>
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp