import React, { useEffect, useRef } from 'react';

// Header
import 'animate.css';
import logo from '../images/Logo.png'
import { useNavigate, NavLink } from "react-router-dom";

// Home
import bike from '../images/bike.png';

// services
import brake from '../images/brake.png';
import engine from '../images/engine.png';
import wheel from '../images/wheel.png';
import oil from '../images/oil.png';
import battery from '../images/battery.png';
import service1 from '../images/service1.jpg';
import service2 from '../images/service2.jpg';
import painting from '../images/painting.jpg';
import wasing from '../images/bikeWash.jpg';


// booking or contact
import emailjs from '@emailjs/browser';


// slideshow
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "@splidejs/splide/dist/css/splide.min.css";
import honda from '../images/honda.png';
import hero from '../images/hero.png';
import yamaha from '../images/yamaha.png';
import ktm from '../images/ktm.png';
import suzuki from '../images/suzuki.png';
import bajaj from '../images/bajaj.png';
import RE from '../images/RE.png';
import jawa from '../images/jawa.png';
import tvs from '../images/tvs.png';




const Home = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    function slide() {
        document.getElementById('side-navbar').style.width = "20rem";
    }

    function close() {
        document.getElementById('side-navbar').style.width = "0";

    }

    // header
    const navigate = useNavigate();

    const home = () => {
        var element = document.getElementById("li");
        element.classList.add("active");
        navigate('/Home');

    }

    const services = () => {
        navigate('/Services');
    }

    const booking = () => {
        navigate('#booking');
    }

    const contact = () => {
        navigate('/Contact');
    }




    // home

    // service
    const expand_1 = () => {
        document.getElementById('service1').style.height = "100%";

        document.getElementById("p1").style.height = "100%";

        document.getElementById('btn1').style.display = "none";
    }
    const expand_2 = () => {
        document.getElementById('service2').style.height = "100%";

        document.getElementById("p2").style.height = "100%";

        document.getElementById('btn2').style.display = "none";
    }
    const expand_3 = () => {
        document.getElementById('service3').style.height = "100%";

        document.getElementById("p3").style.height = "100%";

        document.getElementById('btn3').style.display = "none";
    }
    const expand_4 = () => {
        document.getElementById('service4').style.height = "100%";

        document.getElementById("p4").style.height = "100%";

        document.getElementById('btn4').style.display = "none";
    }
    const expand_5 = () => {
        document.getElementById('service5').style.height = "100%";

        document.getElementById("p5").style.height = "100%";

        document.getElementById('btn5').style.display = "none";
    }


    const close_1 = () => {
        document.getElementById('service1').style.height = "20rem";

        document.getElementById("p1").style.height = "5.5rem";

        document.getElementById('btn1').style.display = "flex";
    }
    const close_2 = () => {
        document.getElementById('service2').style.height = "20rem";

        document.getElementById("p2").style.height = "5.5rem";

        document.getElementById('btn2').style.display = "flex";
    }
    const close_3 = () => {
        document.getElementById('service3').style.height = "20rem";

        document.getElementById("p3").style.height = "5.5rem";

        document.getElementById('btn3').style.display = "flex";
    }
    const close_4 = () => {
        document.getElementById('service4').style.height = "20rem";

        document.getElementById("p4").style.height = "5.5rem";

        document.getElementById('btn4').style.display = "flex";
    }
    const close_5 = () => {
        document.getElementById('service5').style.height = "20rem";

        document.getElementById("p5").style.height = "5.5rem";

        document.getElementById('btn5').style.display = "flex";
    }

    // booking
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

            <div className='home-container'>

                <section id='header'>

                    <div className='header'>

                        <div className='menu-btn'>

                            <button className='btn' id='open' onClick={slide}><i class="fa-solid fa-bars"></i></button>

                        </div>

                        <div className='logo'>

                            <a href='/Home'> <img src={logo} /></a>

                            <div className='title animate__animated animate__shakeX'>
                                <a href='/Home'><span >Hindustan <span className='half-title'>Automobiles</span> </span></a>
                            </div>
                        </div>




                        <div className='side-navbar' id='side-navbar'>

                            <div className='close-hamburger'>
                                <span >Hindustan Automobiles</span>

                                <button id='close' onClick={close}><i class="fa-solid fa-xmark"></i></button>

                            </div>



                            <div className='side-navItems' id='side-navItems'>


                                <a className="subnavbtn" href='#home'>
                                    <i class="fa-solid fa-home"></i>
                                    <span>Home</span>
                                </a>



                                <a className="subnavbtn" href='#services'>
                                    <i class="fa-solid fa-gear"></i>
                                    <span>Our Services</span>
                                </a>



                                <a className="subnavbtn" href='#booking' >
                                    <i class="fa-solid fa-user-pen"></i>
                                    <span >Book service</span>
                                </a>

                                <a className="subnavbtn" href='#contact'>
                                    <i class="fa-solid fa-phone"></i>
                                    <span>Contact Us</span>
                                </a>


                            </div>

                        </div>

                    </div>

                </section>

                <div className='home-sections'>

                    <section id='home'>

                        <div className='bikes'>


                            <div className='bike'>

                                <img src={bike} alt="bike" />

                            </div>

                        </div>

                    </section>

                    <section id='services'>
                        <div className='service-container'>

                            <h1>Our Services</h1>

                            <div className='service-details' id='service-details'>

                                <div className='service' id='service1'>

                                    <div className='img'>
                                        <img src={brake} />
                                    </div>

                                    <h4>Brake Service</h4>

                                    <div className='information'>

                                        <p id='p1'>

                                            Bike brake service is necessary to ensure that your bike's brakes are working properly and effectively. There are several reasons why you should perform regular brake service on your bike.

                                            <br />
                                            <br />
                                            <strong>Safety: </strong>Properly functioning brakes are essential for your safety while riding your bike. If your brakes are not working correctly, you could be putting yourself and others in danger.

                                            <br />
                                            <br />
                                            <strong>Longevity: </strong>Regular brake service can help prolong the lifespan of your bike's brake components, preventing premature wear and tear and reducing the need for costly repairs or replacements.

                                            <br />
                                            <br />
                                            <strong>Performance: </strong>Well-maintained brakes provide better stopping power and control, which is especially important when riding in challenging terrain or weather conditions.;

                                            <br />
                                            <br />
                                            <strong>Comfort:</strong> Smooth and consistent brake performance can make your rides more comfortable and enjoyable, allowing you to focus on the ride itself rather than worrying about your bike's braking system.

                                            <button className='service-btn' id='close-btn' onClick={close_1}>Show less</button>
                                        </p>

                                    </div>
                                    <button className='service-btn' id='btn1' onClick={expand_1}>Get more information...</button>
                                </div>

                                <div className='service' id='service2'>
                                    <div className='img'>
                                        <img src={engine} />
                                    </div>

                                    <h4>Engine Service</h4>

                                    <div className='information'>
                                        <p id='p2'>
                                            Regular bike engine service is essential to keep your motorcycle running smoothly and efficiently. Here are some reasons why you need to do bike engine service.

                                            <br></br>
                                            <br></br>

                                            <strong>Performance: </strong> Regular engine servicing helps to maintain the bike's performance by ensuring that all the components are functioning correctly. This will also help to prevent engine problems and poor performance, ensuring a smooth and efficient ride.

                                            <br />
                                            <br />
                                            <strong> Safety:</strong> Regular bike engine servicing ensures that your bike's engine is in good working order, reducing the risk of engine failure and other mechanical issues that could cause accidents on the road.

                                            <br />
                                            <br />
                                            <strong>Longevity:</strong> Regular engine servicing can help prolong the lifespan of your motorcycle's engine by identifying and addressing any issues before they become serious problems.

                                            <br />
                                            <br />
                                            <strong> Fuel efficiency:</strong> A well-maintained engine can increase your bike's fuel efficiency, reducing the amount of fuel you need to use and saving you money in the long run.

                                            <br />
                                            <br />
                                            <strong>Resale value:</strong> A well-maintained bike engine will also help to maintain the resale value of your motorcycle, making it easier to sell when the time comes.

                                            <button className='service-btn' id='close-btn' onClick={close_2}>Show less</button>
                                        </p>
                                    </div>

                                    <button className='service-btn' id='btn2' onClick={expand_2}>Get more information...</button>
                                </div>

                                <div className='service' id='service3'>
                                    <div className='img'>
                                        <img src={wheel} />
                                    </div>

                                    <h4>Wheel Service</h4>

                                    <div className='information'>

                                        <p id='p3'>

                                            Regular bike wheel service is important to ensure that your bike is safe and performs optimally. Here are some reasons why you should consider bike wheel service:;

                                            <br />
                                            <br />
                                            <strong>Safety: </strong>Wheels that are not properly maintained can lead to serious accidents. Regular wheel service can help identify issues such as worn or damaged bearings, loose spokes, and bent rims, which can compromise the safety of your bike.

                                            <br />
                                            <br />
                                            <strong>Performance:</strong> Well-maintained wheels can enhance your bike's performance by providing a smoother ride and better handling. This is particularly important for off-road riding, where the condition of your wheels can make a significant difference in your ride experience.;

                                            <br />
                                            <br />
                                            <strong>Longevity: </strong>Regular wheel service can help prolong the lifespan of your wheels and other bike components by preventing premature wear and tear. This can save you money on costly repairs or replacements down the road.

                                            <br />
                                            <br />
                                            <strong>Comfort:</strong> Well-maintained wheels can provide a more comfortable ride by reducing vibrations and other discomforts associated with worn or damaged wheels.

                                            <br />
                                            <br />
                                            <strong>Aesthetics:</strong> Regular wheel service can help improve the appearance of your bike, making it look more polished and well-maintained.

                                            <button className='service-btn' id='close-btn' onClick={close_3}>Show less</button>
                                        </p>

                                    </div>
                                    <button className='service-btn' id='btn3' onClick={expand_3}>Get more information...</button>
                                </div>

                                <div className='service' id='service4'>
                                    <div className='img'>
                                        <img src={oil} />
                                    </div>

                                    <h4>Oil Service</h4>

                                    <div className='information'>

                                        <p id='p4'>
                                            Regular bike oil service is important to maintain your motorcycle's engine and keep it running smoothly. Here are some reasons why you should consider bike oil service:;

                                            <br />
                                            <br />
                                            <strong>Lubrication:</strong> The primary function of engine oil is to lubricate the engine's moving parts, reducing friction and wear. Regular oil changes ensure that the oil is fresh and effective at lubricating the engine components.

                                            <br />
                                            <br />
                                            <strong>Cooling:</strong> Engine oil also helps to cool the engine by carrying away heat generated by the moving parts. Old or dirty oil can lose its cooling properties, leading to increased engine temperatures and potentially damaging the engine.

                                            <br />
                                            <br />
                                            <strong>Contamination:</strong> Over time, engine oil can become contaminated with dirt, metal shavings, and other debris. Regular oil changes help to remove these contaminants, preventing them from building up in the engine and causing damage.

                                            <br />
                                            <br />
                                            <strong>Performance:</strong> Fresh engine oil can help improve your bike performance by reducing engine drag and increasing horsepower. It can also improve fuel efficiency, which can save you money on gas over time.

                                            <br />
                                            <br />
                                            <strong>Longevity:</strong> Regular oil changes can help extend the life of your motorcycle's engine by reducing wear and tear on the components and preventing damage from overheating or contamination.

                                            <button className='service-btn' id='close-btn' onClick={close_4}>Show less</button>
                                        </p>
                                    </div>

                                    <button className='service-btn' id='btn4' onClick={expand_4}>Get more information...</button>
                                </div>

                                <div className='service' id='service5'>
                                    <div className='img'>
                                        <img src={battery} />
                                    </div>

                                    <h4>Battery Service</h4>

                                    <div className='information'>

                                        <p id='p5'>
                                            Regular bike battery service is important to ensure that your motorcycle's electrical system is functioning properly. Here are some reasons why you should consider bike battery service:;

                                            <br />
                                            <br />
                                            <strong>Starting:</strong> A well-maintained battery is essential for starting your bike. Regular battery service can help ensure that your battery has sufficient charge and is capable of starting your bike reliably.

                                            <br />
                                            <br />
                                            <strong>Performance:</strong> Your bike's battery powers the electrical components of your motorcycle, such as the lights, horn, and gauges. Regular battery service can help ensure that these components are functioning properly and efficiently.

                                            <br />
                                            <br />
                                            <strong>Longevity:</strong> Regular battery service can help extend the life of your battery by preventing overcharging or undercharging, which can damage the battery over time.

                                            <br />
                                            <br />
                                            <strong>Safety:</strong> A weak or failing battery can cause electrical problems or engine stalling, which can be dangerous while riding. Regular battery service can help prevent these issues and ensure your safety on the road.

                                            <br />
                                            <br />
                                            <strong>Cost savings:</strong> A well-maintained battery can save you money in the long run by avoiding costly repairs or replacements.

                                            <button className='service-btn' id='close-btn' onClick={close_5}>Show less</button>
                                        </p>
                                    </div>

                                    <button className='service-btn' id='btn5' onClick={expand_5}>Get more information...</button>
                                </div>

                            </div>

                            <div className='pricing-container'>

                                <h1>Pricing</h1>

                                <div className='listing'>

                                    <div className='pricing'>
                                        <h2>General Service <span>With Oil</span></h2>

                                        <span>499rs</span>

                                        <span>This Service Includes </span>

                                        <p>nw qkjvbehj vbqhie vkbjqiehvb qhjfbvqhw fbv    weiu hfbwq riuvkj qrvb</p>


                                        <a href='#booking'><button>Book Service</button></a>
                                    </div>

                                    <div className='pricing'>
                                        <h2>General Service <span>Without Oil</span></h2>

                                        <span>399rs</span>

                                        <span>This Service Includes </span>

                                        <p>nw qkjvbehj vbqhie vkbjqiehvb qhjfbvqhw fbv    weiu hfbwq riuvkj qrvb</p>


                                        <a href='#booking'><button>Book Service</button></a>
                                    </div>

                                    <div className='pricing'>
                                        <h2>Special Service <span className='h2-span'>With Oil</span></h2>

                                        <span>499rs</span>

                                        <span>This Service Includes </span>

                                        <p>nw qkjvbehj vbqhie vkbjqiehvb qhjfbvqhw fbv    weiu hfbwq riuvkj qrvb</p>

                                        <a href='#booking'><button>Book Service</button></a>
                                    </div>

                                    <div className='pricing-information'>

                                        <h2>AFFORDABLE PRICING PLANS</h2>

                                        <p>We provide the best bike service, recommend the best products through an independent review process.</p>

                                        <ul>
                                            <li><span>SAME DAY SERVICE</span></li>
                                            <li><span>CONVENIENT LOCATION</span></li>
                                            <li><span>ONLINE APPOINTMENT</span></li>
                                            <li><span>PICK-UP & DROP SERVICE</span></li>
                                        </ul>

                                    </div>

                                </div>

                            </div>

                            <div className='servicing'>

                                <div className='section-1'>

                                    <div className='sub-1'>
                                        <img src={service1} />
                                    </div>

                                    <div className='sub-2'>

                                    </div>
                                </div>

                                <div className='section-2'>

                                    <div className='sub-3'>
                                    </div>

                                    <div className='sub-4'>
                                        <img src={service2} />
                                    </div>
                                </div>

                                <div className='section-3'>

                                    <div className='sub-5'>
                                        <img src={wasing} />
                                    </div>

                                    <div className='sub-6'>
                                    </div>
                                </div>

                                <div className='section-4'>

                                    <div className='sub-7'>
                                    </div>

                                    <div className='sub-8'>
                                        <img src={painting} />
                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>

                    <section id='booking'>
                        <div className='booking-container'>
                            <h1>Book your Services</h1>

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

                                <a className='serivce-link' href='#services'>Check our services here</a>

                                <button className='booking-btn' id='btn' type='submit'>Book service</button>

                            </form>
                        </div>

                    </section>

                    <section id='contact'>


                        <div className='form-container'>

                            <h1>Contact Us</h1>

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

                    </section>

                    <section id='slideshow'>

                        <h1>Brands we have serviced</h1>

                        <Splide options={{
                            type: 'loop',
                            rewind: true,
                            autoplay: true,
                            perMove: 1,
                            gap: '2rem',
                            arrows: false,
                            pagination: false,
                            autoScroll: {
                                pauseOnHover: true,
                                pauseOnFocus: false,
                                speed: 2
                            },
                        }}
                            extensions={{ AutoScroll }}>
                            <SplideSlide>
                                <div className='brands-container'>

                                    <div className='brands'>

                                        <div className='brand'>
                                            <img src={honda} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={yamaha} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={RE} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={jawa} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={suzuki} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={ktm} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={hero} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={tvs} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={bajaj} alt="Our Partners"></img>
                                        </div>

                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </section>

                </div>

                <section id='footer'>
                    <div className='footer'>

                        <footer>
                            <span>
                                @ Hindustan Automobiles
                            </span>
                        </footer>

                    </div>

                </section>

                <a className='scroll' href='#home'>
                    <button><i class="fa-solid fa-jet-fighter-up"></i></button>
                </a>
            </div>

        </>
    )
}

export default Home