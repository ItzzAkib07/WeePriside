import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Booking = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t7mpdet', 'template_9drd373', form.current, 'DTYHmwwee9kgpN9ZT')
            .then((result) => {
                alert("Thank you for Booking a service. Give us some time will get back to you soon.")
                window.location.reload(false);
                console.log(result.text);
            }, (error) => {
                alert("Not able to book service. Please check your internet connection or try again after some time.");
                console.log(error.text);
            });
    };

    return (
        <>
         

            <div className='booking-container'>
                
                <form className='form' ref={form} onSubmit={sendEmail}>

                    <h3>Book Service</h3>

                    <div className='input'>
                        <i className="fa-solid fa-user"></i>
                        <input type='text' id='name' name='name' placeholder='Enter your name' autoFocus autoComplete='off' required />
                    </div>

                    <div className='input'>
                        <i className="fa-solid fa-phone"></i>
                        <input type='phone' id='phone' name='phone' placeholder='Enter your mobile number' autoComplete='off' required />
                    </div>

                    <div className='input'>
                        <i className="fa-solid fa-note-sticky"></i>
                        <input type='text' id='details' name='details' placeholder='Tell us which service you want' autoComplete='off' required />
                    </div>

                    <a className='serivce-link' href='/Services'>Chech our services here</a>

                    <button className='booking-btn' id='btn' type='submit'>Book service</button>

                </form>
            </div>
        </>
    )
}

export default Booking
