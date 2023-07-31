import React, { useEffect, useRef } from 'react';

// Header
import 'animate.css';
import logo from '../images/The Piston Lounge.png'

// quality 
import quality from '../images/maintainance.svg'

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

// Jquery
import $ from 'jquery';

// AOS Animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

// react-tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// MUI imports
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// Modal style
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    width: '20rem',
    height: 'auto',
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const Home = () => {

    // 👇️ scroll to top on page load
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // funtion to slide the navbar
    function slide() {
        document.getElementById('side-navbar').style.width = "20rem";
    }

    // funtion to close the nav bar
    function close() {
        document.getElementById('side-navbar').style.width = "0";

    }


    // booking
    const form = useRef();
    const [getName, setName] = React.useState('');
    const [getPhone, setPhone] = React.useState('');
    const [getQuery, setQuery] = React.useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if (getName !== "" && getPhone !== "" && getQuery !== "") {

            emailjs.sendForm('service_t7mpdet', 'template_9drd373', form.current, 'DTYHmwwee9kgpN9ZT')
                .then((result) => {
                    toast("Thank you for choosing The Piston Lounge.\n Give us some time will get back to you soon.")
                    window.location.reload(false);
                }, (error) => {
                    toast.error("Not able to book service. Please check your connection or try again later.");
                    console.log(error.text);
                });
        } else {
            toast.error("Please fill all the fields");
        }
    };

    // smooth scrolling effet
    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );
    });

    //   init Aos animation
    useEffect(() => {
        AOS.init();
    }, [])


    // modal states
    const [open, setOpen] = React.useState(false);
    const handleOpen1 = () => setOpen(true);
    const handleClose1 = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);


    return (
        <>

            <div className='home-container'>

                <section id='header'>

                    <div className='header'>

                        <div className='menu-btn'>

                            <span className='btn' id='open' onClick={slide}><i class="fa-solid fa-bars"></i></span>

                        </div>

                        <div className='logo'>

                            <a href='#home'> <img src={logo} /></a>

                            <div className='title animate__animated animate__shakeX'>
                                <a href='#home'><span >THE <span className='half-title'>PISTON LOUNGE</span> </span></a>
                            </div>
                        </div>

                        <div className='side-navbar' id='side-navbar'>

                            <div className='close-hamburger'>
                                <span style={{ marginLeft: '1rem' }}>THE PISTON LOUNGE</span>

                                <button id='close' onClick={close}><i class="fa-solid fa-xmark"></i></button>

                            </div>



                            <div className='side-navItems' id='side-navItems'>


                                <a className="subnavbtn" href='#home' onClick={close}>
                                    <i class="fa-solid fa-home"></i>
                                    <span>Home</span>
                                </a>



                                <a className="subnavbtn" href='#services' onClick={close}>
                                    <i class="fa-solid fa-gear"></i>
                                    <span>Our Services</span>
                                </a>



                                <a className="subnavbtn" href='#booking' onClick={close}>
                                    <i class="fa-solid fa-user-pen"></i>
                                    <span >Book service</span>
                                </a>

                                <a className="subnavbtn" href='#contact' onClick={close}>
                                    <i class="fa-solid fa-phone"></i>
                                    <span>Contact Us</span>
                                </a>


                            </div>

                        </div>

                    </div>

                </section>

                <div className='home-sections'>

                    <section id='home' className='hero' data-aos="zoom-in">

                        <div className='downArrow'>
                            <i class="fa-solid fa-arrow-down-long"></i>
                            <span >SCROLL DOWN</span>
                        </div>


                    </section>

                    <section className='quality'>

                        <div className='sec-1' data-aos="fade-up">

                            <span>Quality Assured</span>

                            <span>
                                The best two wheeler services delivery with assured quality.
                            </span>

                            <ul class="circle-list">
                                <li>Skilled Mechanics</li>
                                <li>7 Day Service Warranty</li>
                                <li>Genuine Spares</li>
                                <li>Contactless Service</li>
                            </ul>

                        </div>

                        <div className='sec-2' data-aos="fade-up">
                            <img src={quality}></img>
                        </div>

                    </section>

                    <section id='services'>


                        <div className='service-container'>

                            <h1 style={{ textAlign: 'center' }} data-aos="fade-down">Our Services</h1>

                            <div className='service-details' id='service-details'>

                                <div className='service' id='service1' data-aos="fade-right">

                                    <div className='img'>
                                        <img src={brake} />
                                    </div>

                                    <h4>Brake Service</h4>

                                    <div className='information'>

                                        <p id='p1'>

                                            Regular bike brake service is crucial for safety, longevity, performance, and comfort. Properly maintained brakes ensure your safety while riding, prolong the lifespan of components, enhance stopping power, and provide a more enjoyable riding experience.
                                        </p>

                                    </div>
                                </div>

                                <div className='service' id='service2' data-aos="fade-left">
                                    <div className='img'>
                                        <img src={engine} />
                                    </div>

                                    <h4>Engine Service</h4>

                                    <div className='information'>
                                        <p id='p2'>
                                            Regular bike engine service is essential for performance, safety, longevity, fuel efficiency, and resale value. Maintaining your engine ensures proper functionality, prevents issues, reduces the risk of accidents, prolongs its lifespan, saves fuel costs, and enhances resale prospects.
                                        </p>
                                    </div>

                                </div>

                                <div className='service' id='service3' data-aos="fade-right">
                                    <div className='img'>
                                        <img src={wheel} />
                                    </div>

                                    <h4>Wheel Service</h4>

                                    <div className='information'>

                                        <p id='p3'>
                                            Regular bike wheel service ensures safety, performance, and longevity. It provides smoother rides, prevents accidents, and extends the lifespan of your bike components.it enhances comfort and aesthetics for an overall biking experience.

                                        </p>

                                    </div>
                                </div>

                                <div className='service' id='service4' data-aos="fade-left">
                                    <div className='img'>
                                        <img src={oil} />
                                    </div>

                                    <h4>Oil Service</h4>

                                    <div className='information'>

                                        <p id='p4'>
                                            Regular bike oil service ensures proper lubrication, cooling, and performance, extending engine life and preventing damage from contamination. Fresh oil reduces friction, increases horsepower, and improves fuel efficiency for a smooth ride.
                                        </p>
                                    </div>

                                </div>

                                <div className='service' id='service5' data-aos="fade-right">
                                    <div className='img'>
                                        <img src={battery} />
                                    </div>

                                    <h4>Battery Service</h4>

                                    <div className='information'>

                                        <p id='p5'>
                                            Regular bike battery service ensures reliable starting, proper electrical component functioning, and enhanced battery lifespan. It also promotes safety by preventing electrical issues and potential engine stalling while providing long-term cost savings.
                                        </p>
                                    </div>

                                </div>

                            </div>

                            <div className='pricing-container' data-aos="fade-up">

                                <h1 id='pricing' data-aos="fade-down">Pricing</h1>

                                <div className='listing' >

                                    <div className='pricing' >
                                        <h2>General Service <span>Without Oil</span></h2>

                                        <span>Rs 399/-</span>

                                        <span>Get to know more about this service </span>

                                        <p onClick={handleOpen1}>Click here</p>

                                        <a href='#booking'><button>Book Service</button></a>

                                        <Modal
                                            open={open}
                                            onClose={handleClose1}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>

                                                <Box sx={{
                                                    position: 'relative',
                                                    alignItems: 'center',
                                                    color: 'white',
                                                    left: '50%',
                                                    top: '-1rem',
                                                    fontSize: '1.5rem',
                                                    fontWeight: '900',
                                                    cursor: 'pointer'
                                                }}
                                                    onClick={handleClose1}
                                                >
                                                    <i class="fa-solid fa-xmark"></i>
                                                </Box>

                                                <div className='modal-header'>
                                                    <h2>General Service <span>Without Oil</span></h2>
                                                </div>

                                                <Box>
                                                    <ul className='serviceList'>
                                                        <li> <span> Cleaning</span> </li>
                                                        <li> <span> Chain Cleaning </span> </li>
                                                        <li> <span> Chain Lubrication </span> </li>
                                                        <li> <span> Brake Adjustment </span> </li>
                                                        <li> <span> Brake Pad Inspection </span> </li>
                                                        <li> <span> Brake Caliper Alignment </span> </li>
                                                        <li> <span> Gear Shifting Adjustment </span> </li>
                                                        <li> <span> Tire Inspection </span> </li>
                                                        <li> <span> Headset Adjustment </span> </li>
                                                        <li> <span> Cable Inspection </span> </li>
                                                    </ul>
                                                </Box>

                                            </Box>
                                        </Modal>

                                    </div>

                                    <div className='pricing'>
                                        <h2>General Service <span>With Oil</span></h2>

                                        <span>Rs 699/-</span>

                                        <span>Get to know more about this service </span>

                                        <p onClick={handleOpen2}>Click here</p>

                                        <a href='#booking'><button>Book Service</button></a>

                                        <Modal
                                            open={open2}
                                            onClose={handleClose2}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>

                                                <Box sx={{
                                                    position: 'relative',
                                                    alignItems: 'center',
                                                    color: 'white',
                                                    left: '50%',
                                                    top: '-1rem',
                                                    fontSize: '1.5rem',
                                                    fontWeight: '900',
                                                    cursor: 'pointer'
                                                }}
                                                    onClick={handleClose2}
                                                >
                                                    <i class="fa-solid fa-xmark"></i>
                                                </Box>

                                                <div className='modal-header'>
                                                    <h2>General Service <span>Without Oil</span></h2>
                                                </div>

                                                <Box>
                                                    <span style={{ color: 'rgb(189, 183, 183)' }}>
                                                        This service will cover all the tasks from general service without oil and adds oil-based component maintenance,such as
                                                    </span>

                                                    <ul className='serviceList'>
                                                        <li> <span> checking oil levels</span> </li>
                                                        <li> <span> Draining and topping up the oil </span> </li>
                                                        <li> <span> suspension forks </span> </li>
                                                        <li> <span> shock absorbers </span> </li>
                                                        <li> <span> nternal gear hubs </span> </li>
                                                        <li> <span> Brake and grar oil </span> </li>
                                                    </ul>
                                                </Box>

                                            </Box>
                                        </Modal>
                                    </div>

                                    <div className='pricing'>
                                        <h2>Special Service <span className='h2-span'>With Oil</span></h2>

                                        <span>Rs 799/-</span>

                                        <span>Get to know more about this service</span>

                                        <p onClick={handleOpen3}>Click here</p>

                                        <a href='#booking'><button>Book Service</button></a>

                                        <Modal
                                            open={open3}
                                            onClose={handleClose3}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>

                                                <Box sx={{
                                                    position: 'relative',
                                                    alignItems: 'center',
                                                    color: 'white',
                                                    left: '50%',
                                                    top: '-1rem',
                                                    fontSize: '1.5rem',
                                                    fontWeight: '900',
                                                    cursor: 'pointer'
                                                }}
                                                    onClick={handleClose3}
                                                >
                                                    <i class="fa-solid fa-xmark"></i>
                                                </Box>

                                                <div className='modal-header'>
                                                    <h2>General Service <span>Without Oil</span></h2>
                                                </div>

                                                <Box>
                                                    <span style={{ color: 'rgb(189, 183, 183)' }}>
                                                        This comprehensive service encompasses a thorough check and maintenance of the entire bike, including cleaning, oil-based component servicing, and it goes further with <strong> bike polishing and painting to restore its aesthetics and make it look brand new. </strong>
                                                    </span>
                                                </Box>

                                            </Box>
                                        </Modal>

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

                        </div>

                    </section>

                    <section className='servicing-images'>

                        <div className='servicing'>

                            <div className='section-1' >

                                <div className='sub-1' data-aos="fade-right">
                                    <img src={service1} />
                                </div>

                                <div className='sub-2' data-aos="fade-left">
                                    <p>
                                        <h1>PERIODIC SERVICE</h1>

                                        At our garage, we provide reliable periodic service to keep your bike in peak condition. Our skilled technicians perform thorough inspections, adjustments, and lubrication to ensure smooth and safe rides, giving you peace of mind on the road. Trust us to maintain your bike's performance and keep it running at its best.
                                    </p>
                                </div>
                            </div>

                            <div className='section-2'>

                                <div className='sub-3' data-aos="fade-right">
                                    <p>
                                        <h1>COMPLETE BIKE SERVICE</h1>

                                        Our full bike service covers all your motorcycle's needs, from inspections to tune-ups and fluid replacements. Ride with confidence knowing your bike is in excellent condition with our top-notch care and expertise. Experience the convenience and reliability of our comprehensive service for a smooth and efficient ride.
                                    </p>
                                </div>

                                <div className='sub-4' data-aos="fade-left">
                                    <img src={service2} />
                                </div>
                            </div>

                            <div className='section-3'>

                                <div className='sub-5' data-aos="fade-right">
                                    <img src={wasing} />
                                </div>

                                <div className='sub-6' data-aos="fade-left">

                                    <p>
                                        <h1>WASHING & POLISHING</h1>

                                        At our garage, we provide meticulous bike washing and polishing services to bring back the shine and luster to your motorcycle. Our skilled team ensures thorough cleaning, removing dirt and grime, and follows it up with expert polishing to leave your bike looking brand new and well-maintained. Trust us to give your two-wheeler the care and attention it deserves, leaving you with a gleaming and refreshed ride after each visit.
                                    </p>
                                </div>
                            </div>

                            <div className='section-4'>

                                <div className='sub-7' data-aos="fade-right">

                                    <p>
                                        <h1>PAINTING</h1>

                                        In our garage, we offer comprehensive services, including bike painting. Trust us to revitalize your bike's appearance with skilled and professional painting techniques, adding a fresh and vibrant look to your beloved ride. Let our team of experts handle your bike painting needs, ensuring excellent results and customer satisfaction.
                                    </p>
                                </div>

                                <div className='sub-8' data-aos="fade-left">
                                    <img src={painting} />
                                </div>
                            </div>

                        </div>

                    </section>

                    <section id='booking'>

                        <div className='booking-container' data-aos="flip-up">

                            <h1 id='book' data-aos="fade-down">Book Your Services</h1>

                            <form className='form' ref={form} onSubmit={sendEmail} >

                                <div className='input'>
                                    <i className="fa-solid fa-user"></i>
                                    <input type='text' id='name' name='name' placeholder='Enter your name' autoFocus autoComplete='off' onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className='input'>
                                    <i className="fa-solid fa-phone"></i>
                                    <input type='phone' id='phone' name='phone' placeholder='Enter your mobile number' autoComplete='off' onChange={(e) => setPhone(e.target.value)} />
                                </div>

                                <div className='input'>
                                    <i className="fa-solid fa-note-sticky"></i>
                                    <input type='text' id='details' name='details' placeholder='Tell us how we can help you?' autoComplete='off' onChange={(e) => setQuery(e.target.value)} />
                                </div>

                                <a className='serivce-link' href='#pricing'>Check our services here</a>

                                <button className='booking-btn' id='btn' type='submit'></button>

                            </form>
                        </div>
                        <ToastContainer />

                    </section>

                    <section id='contact'>

                        <div className='form-container' data-aos="fade-up">

                            <h1 data-aos="fade-down">Contact Us</h1>

                            <div className='center-info' >

                                <div className='address'>

                                    <h2>Address</h2>


                                    <div className='details '>
                                        <span><a href='https://goo.gl/maps/WoDP7swRrsGZ1fzi8' target="_blank">37/2 Bidi kamgar road, opp. axis bank ATM Machine, Chandan Nagar, Kharadi, Pune, Maharashtra, 411014</a></span>
                                    </div>

                                    <button className='address-btn'>
                                        <a href='https://goo.gl/maps/WoDP7swRrsGZ1fzi8' target="_blank">Get Directions <i class="fa-solid fa-road"></i></a>
                                    </button>

                                </div>

                                <div className='hours'>

                                    <h2>Open Hours</h2>


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

                                    <h2>Customer support</h2>

                                    <div className='info'>

                                        <div className='days'>
                                            <p><i class="fa-solid fa-envelope"></i></p>
                                            <p><i class="fa-solid fa-envelope"></i></p>
                                            <p><i class="fa-solid fa-phone"></i></p>
                                        </div>

                                        <div className='time'>
                                            <p>: &nbsp;&nbsp;thepistonlounge@gmail.com</p>
                                            <p>: &nbsp;&nbsp;tausifshaikh2505@gmail.com</p>
                                            <p>: &nbsp;&nbsp;8657445050</p>
                                        </div>

                                    </div>


                                </div>



                            </div>
                        </div>

                    </section>

                    <section id='slideshow' data-aos="zoom-in">

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
                                &copy; The Piston Lounge - 2023
                            </span>

                        </footer>

                        <div>
                            <p class="footer-heart">
                                Made with <g-emoji class="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
                                    <img class="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" />
                                </g-emoji> by <a href="https://itzzakib07.github.io/dopefolio/" target='_blank'>Akib Mulla</a>
                            </p>
                        </div>
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
