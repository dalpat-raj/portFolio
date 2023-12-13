import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const form = useRef();
    const [clientMsg, setClientMsg] = useState(null)
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_nvadutb', 'template_wlrj4ys', form.current, 'zW2qo1R1M7dda8MmW')
        .then((result) => {
            setClientMsg('Massege Successfully Send')
        }, (error) => {
          throw error;
        });
    };

  return (
    <section className="contact__section container" id="contact">
        <h2 data-aos="fade-down" data-heading="Get in touch" className="section__title__heading">Contact Me</h2>


        <div className="contact__container__grid">
            <div className="contact__content">
                <div className="contact__info contact__info__box">
                    <div data-aos="fade-up" className="contact__card">
                        <i className="uil uil-envelope contact__icon"></i>
                        <h3 className="contact__card__title">Email</h3>
                        <span className='contact__card__data'>Dalpatt1212@gmail.com</span>
                        <span className="contact__button">Write Me  
                        <i className="uil uil-arrow-right contact__button__icon"></i>
                        </span>
                    </div>

                    <div data-aos="fade-up" className="contact__card">
                        <i className="uil uil-whatsapp contact__icon"></i>
                        <h3 className="contact__card__title">Whatsapp</h3>
                        <span className='contact__card__data'>+91 9587478769</span>
                        <span className="contact__button">Write Me  
                        <i className="uil uil-arrow-right contact__button__icon"></i>
                        </span>
                    </div>

                    <div data-aos="fade-up" className="contact__card">
                        <i className="uil uil-facebook-messenger-alt contact__icon"></i>
                        <h3 className="contact__card__title">Messenger</h3>
                        <span className='contact__card__data'>Dalpat Raj</span>
                        <span className="contact__button">Write Me  
                        <i className="uil uil-arrow-right contact__button__icon"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <form ref={form} onSubmit={sendEmail} className="contact__info">
                    <h2>{clientMsg? clientMsg: ""}</h2>
                    <div data-aos="fade-up" className="input___container focus">
                        <input type="text" name='name' className="input" />
                        <label htmlFor="">Username</label>
                        <span>Username</span>
                    </div>

                    <div data-aos="fade-up" className="input___container focus">
                        <input type="text" name='email' className="input" />
                        <label htmlFor="">Email</label>
                        <span>Email</span>
                    </div>

                    <div data-aos="fade-up" className="input___container focus">
                        <input type="tel" name='phone' className="input" />
                        <label htmlFor="">Phone</label>
                        <span>Phone</span>
                    </div>

                    <div data-aos="fade-up" className="input___container textarea focus">
                        <textarea type="text" name="message" id="" className='input' />
                        <label htmlFor="">Message</label>
                        <span>Message</span>
                    </div>
                    <button data-aos="fade-up" type='submit' className='button'><i className="uil uil-navigator button__info"></i>Send Message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact