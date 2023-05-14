import 'animate.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t7mpdet', 'template_9drd373', form.current, 'DTYHmwwee9kgpN9ZT')
            .then((result) => {
                alert("Thank you for contacting us. Give us some time will get back to you soon.")
                window.location.reload(false);
                console.log(result.text);
            }, (error) => {
                alert("Not able to contact us. Please check your internet connection or try again after some time.");
                console.log(error.text);
            });
    };

    return (
        <>


            <div className='form-container'>
         
                {/*<form className='form animate__animated animate__pulse' ref={form} onSubmit={sendEmail}>

                    <h3>Contact Us</h3>

                    <div className='input'>
                        <i className="fa-solid fa-user"></i>
                        <input type='text' id='name' name='name' placeholder='Enter your name' autoFocus autoComplete='off' required />
                    </div>

                    <div className='input'>
                        <i className="fa-solid fa-phone"></i>
                        <input type='phone' id='phone' name='phone' placeholder='Enter your mobile number' autoComplete='off'  required />
                    </div>

                    <div className='input'>
                        <i className="fa-solid fa-note-sticky"></i>
                        <input type='text' id='details' name='details' placeholder='Let us know how we can help you' autoComplete='off'  required />
                    </div>

                    <button className='btn' id='btn' type='submit'>Contact us</button>

                </form> */}


                <div className='center-info'>

                    <div className='address'>

                        <h3>Address</h3>


                        <div className='details '>
                            <span><a href='https://goo.gl/maps/WoDP7swRrsGZ1fzi8' target="_blank">37/2 Bidi kamgar road, opp. axis bank ATM Machine, Chandan Nagar, Kharadi, Pune, Maharashtra, 411014</a></span>
                        </div>

                        <button className='address-btn'>
                            <a href='https://goo.gl/maps/WoDP7swRrsGZ1fzi8' target="_blank">Get Directions</a>
                        </button>

                    </div>

                    <div className='hours'>

                        <h3>Open Hours</h3>


                        <div className='timing'>

                            <div className='days'>
                                <p>Monday - Friday</p>
                                <p>Saturday</p>
                                <p>Sunday</p>
                            </div>

                            <div className='time'>
                                <p>: &nbsp;&nbsp; 9 AM - 9 PM</p>
                                <p>: &nbsp;&nbsp; 9 AM - 9 PM</p>
                                <p>: &nbsp;&nbsp; 9 AM - 9 PM</p>
                            </div>

                        </div>

                        <p>Timings may warry</p>

                    </div>

                    <div className='support'>

                        <h3>Customer support</h3>

                        <div className='info'>

                            <div className='days'>
                                <p><i class="fa-solid fa-envelope"></i></p>
                                <p><i class="fa-solid fa-envelope"></i></p>
                                <p><i class="fa-solid fa-phone"></i></p>
                                {/* <p><i class="fa-solid fa-phone"></i></p> */}
                            </div>

                            <div className='time'>
                                <p>: &nbsp;&nbsp;hindustanautomobiles1934@gmail.com</p>
                                <p>: &nbsp;&nbsp; Tausifshaikh2505@gmail.com</p>
                                <p>: &nbsp;&nbsp; 8657445050</p>
                                {/* <p>: &nbsp;&nbsp; </p> */}
                            </div>

                        </div>


                    </div>



                </div>
            </div>


        </>
    )
}

export default Contact