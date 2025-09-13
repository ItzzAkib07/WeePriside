import React, { useEffect, useRef, useState } from 'react';
import SmoothScrollingLink from '../Component/SmoothScrollingLink';


// Header
import 'animate.css';
import logo from '../images/logo.jpg'

// quality 
import founder from '../images/sujit.jpg'
import cofounder from '../images/krishna.jpg'
import about from '../images/about.jpg'

// services
import geo from '../images/political.jpeg';
import poll from '../images/opinion.jpg';
import campaign from '../images/campaion.jpg';
import manifesto from '../images/manifesto.jpg';
import marketing from '../images/digital.jpg';

// client images 
import mathre from '../images/mathre.jpg';
import bhaskar from '../images/bhaskar.jpg';
import kaur from '../images/kaur.jpg';
import bains from '../images/bains.jpg';
import aap_logo from '../images/aap_logo.jpg';
import ncp_logo from '../images/ncp_logo.jpg';
import bcg_logo from '../images/bcg_logo.png';
import adani_logo from '../images/adani_logo.png';



// booking or contact
import emailjs from '@emailjs/browser';


// slideshow
// AOS Animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

// react-tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// MUI imports
import { Box, Grid, Card, CardContent, Typography, Avatar, TextField, Tooltip } from "@mui/material";



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

const founders = [
    {
        name: "Sujit Sahu",
        role: "Founder",
        img: founder,
        desc: `Sujit Sahu is the founder of Weepreside, a political consultancy shaped over the past six years.
           An engineer from Mumbai University and a passionate data enthusiast, he realized the power of
           data-driven strategies in transforming elections and inspiring meaningful change. With experience
           working alongside a wide spectrum of political parties and candidates across India, he strongly
           believes that real progress begins at the grassroots level, by bridging leaders with the voices
           and aspirations of the people.`
    },
    {
        name: "Krishna Shep",
        role: "Co-Founder",
        img: cofounder,
        desc: `Krishna Shep, the co-founder of Weepreside, brings more than five years of expertise in political
           consultancy, focusing on electronic campaigning, election management, and booth-level planning.
           He has successfully spearheaded data-driven, tech-powered campaigns across diverse constituencies,
           excelling in voter profiling, digital outreach, real-time booth monitoring, and war room operations.
           Recognized for blending innovation with grassroots execution, Krishna continues to shape effective,
           results-oriented strategies that drive Weepreside’s modern approach to electioneering.`
    }
];

const clients = [
    {
        name: "Suresh Gopinath Mhatre",
        constituency: "Bhiwandi",
        state: "Maharashtra",
        party: "NCP-SP",
        img: mathre,
    },
    {
        name: "Bhaskar Bhagre",
        constituency: "Dindori",
        state: "Maharashtra",
        party: "NCP-SP",
        img: bhaskar,
    },
    {
        name: "Madam Praneet Kaur",
        constituency: "Patiala",
        state: "Punjab",
        party: "BJP",
        img: kaur,
    },
    {
        name: "Harjot Singh Bains",
        constituency: "Anandpur Sahib",
        state: "Punjab",
        party: "AAP",
        img: bains,
    },
];

const clientswork = [
    {
        title: "Delhi MCD Election (AAP Party)",
        points: [
            "Managed election campaign for 110 seats",
            "Conducted survey for candidate selection",
            "Achieved 78% win rate (86 seats won)"
        ],
        logos: [aap_logo],   // 👈 wrap single logo in array
    },
    {
        title: "NCP Party Internal Survey (Chinchwad AE By poll 2023)",
        points: [
            "Conducted internal survey to inform candidate selection",
            "Contributed to data-driven decision making"
        ],
        logos: [ncp_logo],   // 👈 wrap single logo in array
    },
    {
        title: "Research & Study (Adani Firm & Boston Consulting Group)",
        points: [
            "Collaborated on Dharavi Redevelopment plan research",
            "Contributed to data analysis and strategic recommendation"
        ],
        logos: [adani_logo, bcg_logo]   // already array ✅
    }
];




const Home = () => {

    // scroll to top on page load
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
    const [getModal, setModal] = React.useState('');
    const [getQuery, setQuery] = React.useState('');

    // Function to send mail
    const sendEmail = (e) => {
        e.preventDefault();

        if (getName !== "" && getPhone !== "" && getModal !== "" && getQuery !== "") {
            // Send email when the checkbox is unchecked
            emailjs.sendForm('service_1hpvog4', 'template_s10e1ai', form.current, 'tiozmsqpHyfvx7sdX')
                .then((result) => {
                    toast("Thank you for choosing The Piston Lounge.\n Give us some time, we will get back to you soon.");
                    setTimeout(() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        // Clear the form fields
                        form.current.reset();
                        // Optionally, reset your state variables if you're using them
                        setName("");
                        setPhone("");
                        setModal("");
                        setQuery("");
                    }, 5000);
                })
                .catch((error) => {
                    toast.error("Not able to book the service. Please check your connection or try again later.");
                    console.log(error.text);
                });
        }
        else {
            toast.error("Please fill in all the fields.");
        }
    }


    //   init Aos animation
    useEffect(() => {
        AOS.init();
    }, [])



    // Landing page
    const [showFirstSection, setShowFirstSection] = useState(true);

    useEffect(() => {
        // Hide the first section after 10 seconds
        const timeoutId = setTimeout(() => {
            setShowFirstSection(false);
        }, 5000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);


    return (
        <>

            {/* landing page animation */}
            {showFirstSection && (
                <section className="one">
                    <h1 className='landing-h1'>
                        <span><span style={{ color: 'skyblue' }}>W</span>ee</span>
                        <br />
                        <span><span style={{ color: 'skyblue' }}>P</span>reside</span>
                    </h1>
                </section>
            )}



            {/* Main Container */}
            <section className='home-container'>

                {/* Header section */}
                <section id='header'>

                    <div className='header'>


                        {/* Open side - navbar button */}
                        <Tooltip title="Menu">
                            <div className='menu-btn'>
                                <span className='btn' id='open' onClick={slide}><i className="fa-solid fa-bars"></i></span>
                            </div>
                        </Tooltip>

                        {/* Logo section */}
                        <div className='logo'>

                            <SmoothScrollingLink to="home" >
                                <img src={logo} />
                            </SmoothScrollingLink>


                            <div className='title animate__animated animate__shakeX'>
                                <SmoothScrollingLink to="home" >
                                    <span >Wee Preside</span>
                                </SmoothScrollingLink>
                            </div>

                        </div>


                        {/* Side - navbar section  */}
                        <div className='side-navbar' id='side-navbar'>

                            {/* title and close navbar */}
                            <div className='close-hamburger'>
                                <span style={{ marginLeft: '1rem' }}>Wee Preside</span>

                                <button id='close' onClick={close}><i className="fa-solid fa-xmark"></i></button>

                            </div>

                            {/* Side - navItem section */}
                            <div className='side-navItems' id='side-navItems'>

                                <SmoothScrollingLink to="home" >
                                    <span className="subnavbtn"><i className="fa-solid fa-home"></i> Home</span>
                                </SmoothScrollingLink>

                                <SmoothScrollingLink to="about" >
                                    <span className="subnavbtn"> <i className="fa-solid fa-gear"></i> About Us</span>
                                </SmoothScrollingLink>

                                <SmoothScrollingLink to="services" >

                                    <span className="subnavbtn"> <i className="fa-solid fa-user-pen"></i> Our Services</span>
                                </SmoothScrollingLink>

                                <SmoothScrollingLink to="booking">

                                    <span className="subnavbtn"> <i className="fa-solid fa-phone"></i> Contact Us</span>
                                </SmoothScrollingLink>

                            </div>


                            {/* Social Icons */}
                            <Box sx={{
                                width: '100%',
                                textAlign: 'center',
                                position: 'absolute',
                                bottom: '6rem'

                            }}>
                                <span>
                                    <h2 id="social-head">Get In Touch With Us </h2>
                                </span>

                                <Box sx={{

                                }}>
                                    <ul style={{ padding: "0" }}>

                                        <li className="icons">
                                            <a href="https://www.facebook.com/profile.php?id=61550075405673&mibextid=ZbWKwL" target="_blank">
                                                <i className="fa-brands fa-facebook" ></i>
                                            </a>
                                        </li>

                                        <li className="icons">
                                            <a href="https://www.instagram.com/weepreside?igsh=YXBoa3h4NGQ2cmx6" target="_blank">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>

                                        <li className="icons">
                                            <a href="https://x.com/WeePreside/status/1798036176324161808?s=19" target="_blank">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li className="icons">
                                            <a href="https://wa.me/message/FXCIZ4L4CNDJK1" target="_blank">
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </a>
                                        </li>

                                    </ul>
                                </Box>

                            </Box>


                            {/* Navbar Footer */}
                            <Box sx={{
                                width: '100%',
                                textAlign: 'center',
                                position: 'absolute',
                                bottom: '0'

                            }}>
                                <footer>
                                    <span>
                                        &copy;2023, Wee Preside
                                    </span>
                                </footer>

                                <div>
                                    <p className="footer-heart">
                                        Made with <g-emoji className="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
                                            <img className="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" />
                                        </g-emoji> by <a href="https://itzzakib07.github.io/dopefolio/" target='_blank'>Akib Mulla</a>
                                    </p>
                                </div>

                            </Box>

                        </div>

                    </div>


                </section>

                {/* body section */}
                <section className='home-sections'>

                    {/* Hero section */}
                    <section id='home' className='hero'>

                        <div className='content'>
                            <span className='sub-heading'>Wee Stand for Transparency</span>
                            <span className='heading'><span style={{ color: 'skyblue' }}>W</span>ee <span style={{ color: 'skyblue' }}>P</span>reside</span>
                            <span className='role'>POLITICAL CONSULTANCY</span>
                            <span className='slogan'>A lack of transparency results in distrust and a deep sense of insecurity.</span>
                        </div>

                    </section>

                    <h1 id='about' style={{ textAlign: 'center', marginTop: '4rem', marginLeft: '1rem' }} data-aos="fade-down">About Us</h1>

                    {/* About section */}
                    <section className='quality'>

                        <div className='sec-1' data-aos="fade-up">
                            <p>
                                <h5 style={{ fontWeight: 'bold' }}>Strategic Insight for Winning Campaigns: Wee Preside</h5>

                                Wee Preside is a Passionate Political Consultancy who can conduct
                                comprehensive research and provide organized political campaign and
                                event support. Proficient at completing polling and conducting
                                demographic research, organizing political events, and providing
                                campaign assistance.
                            </p>
                        </div>

                        <div className='sec-2' data-aos="fade-up">
                            <img src={about}></img>
                        </div>

                    </section>

                    {/* Founders section */}
                    <Box sx={{ py: 2, px: { xs: 2, sm: 4, md: 8 }, mb: "2rem" }}>
                        <Typography
                            variant="h3"
                            align="center"
                            gutterBottom
                            sx={{
                                fontWeight: "bold",
                                mb: 6,
                                letterSpacing: 1.5,
                                color: "text.primary",
                                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem", lg: "3rem" }
                            }}
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Founders
                        </Typography>

                        <Grid container spacing={6} justifyContent="center" alignItems="stretch">
                            {founders.map((f, i) => (
                                <Grid item xs={12} md={6} key={i} sx={{ display: "flex" }}>
                                    <Card
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: i * 0.2 }}
                                        sx={{
                                            flex: 1, // ensures equal stretch
                                            borderRadius: 4,
                                            backgroundColor: "#fff",
                                            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            p: { xs: 3, sm: 4 },
                                            "&:hover": {
                                                transform: "translateY(-6px)",
                                                boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                                            },
                                            transition: "all 0.3s ease-in-out",
                                        }}
                                    >
                                        <Avatar
                                            src={f.img}
                                            alt={f.name}
                                            sx={{
                                                width: 150,
                                                height: 150,
                                                mb: 3,
                                                border: "5px solid #f5f5f5",
                                                boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
                                            }}
                                        />
                                        <CardContent
                                            sx={{
                                                flexGrow: 1, // makes content stretch evenly
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                                px: 0,
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                sx={{ fontWeight: "bold", mb: 0.5, color: "text.primary" }}
                                            >
                                                {f.name}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ color: "text.secondary", fontWeight: 500, mb: 2 }}
                                            >
                                                {f.role}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    lineHeight: 1.6,
                                                    textAlign: "justify",
                                                    color: "text.primary",
                                                    fontSize: "1rem",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {f.desc}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* sevices section */}
                    <section className='servicing-images' id='services'>

                        <h1 style={{ textAlign: 'center', marginTop: '3rem' }} data-aos="fade-down">Services</h1>

                        <div className='servicing'>

                            <div className='section-1' >

                                <p data-aos="zoom-in" style={{ padding: '0 .5rem' }}>
                                    We are political aficionados that enjoy methodically planning the best
                                    strategies, conceptualising ground-breaking campaigns, working on
                                    crafting and delivering the best messages, and engaging with the
                                    audience and influencing them to take action. We can be your one-stop
                                    shop for polling solutions and give you the tools you need to win the
                                    election. We use the most recent technology to make your job simpler.
                                    We support introducing total transparency and accountability into the
                                    political system, which will increase democracy's vitality, sturdiness,
                                    participatory nature, and representativeness. We have a range of
                                    services to make this happen.

                                </p>

                            </div>

                            <div className='section-2'>

                                <div className='sub-3' data-aos="fade-right">
                                    <p>
                                        <h1>Geo Political Profiling</h1>

                                        Geopolitical profiling comprises
                                        booth- or village-level profiling, which incorporates voting
                                        preferences, demographic voting, strength areas, and weaknesses
                                        with an influencer list to strengthen organisations.
                                    </p>
                                </div>

                                <div className='sub-4' data-aos="fade-left">
                                    <img src={geo} />
                                </div>
                            </div>

                            <div className='section-3'>

                                <div className='sub-5' data-aos="fade-right">
                                    <img src={poll} />
                                </div>

                                <div className='sub-6' data-aos="fade-left">

                                    <p>
                                        <h1>Opinion Polls</h1>

                                        If elections were held today, an impartial,
                                        unbiased opinion poll would be a crucial instrument for assessing
                                        the mood of your people. The state's mood swing is crucial in
                                        determining the future.
                                    </p>
                                </div>
                            </div>

                            <div className='section-4'>

                                <div className='sub-7' data-aos="fade-right">

                                    <p>
                                        <h1>Campaign Management</h1>

                                        The most crucial phase of an
                                        election is the campaigning phase. Wee Preside here has a team
                                        of experts who worked with IPAC and designed campaigns for
                                        Andhra Pradesh Chief Minister Jagan Reddy, Delhi Chief Minister
                                        Arvind Kejriwal, Punjab Chief Minister Bhagwant Mann, Jharkhand
                                        Chief Minister Hemant Soren, Bihar Chief Minister Nitish Kumar,
                                        and Ex-CMs of Maharashtra and Punjab Captain Amrinder Singh.

                                    </p>
                                </div>

                                <div className='sub-8' data-aos="fade-left">
                                    <img src={campaign} />
                                </div>
                            </div>

                            <div className='section-3'>

                                <div className='sub-5' data-aos="fade-right">
                                    <img src={manifesto} />
                                </div>

                                <div className='sub-6' data-aos="fade-left">

                                    <p>
                                        <h1>Manifesto Creation</h1>
                                        In order to create a successful
                                        manifesto, you must listen to your electorate, comprehend their
                                        needs, and ensure that you both acknowledge and reassure
                                        people that you are prepared to meet those demands. A team from
                                        Wee Preside worked on similar projects for the assembly elections
                                        in Gujarat, Punjab, and Karnataka at the moment. Minimum
                                        content and Maximum Connect is moto of Wee Preside.
                                    </p>
                                </div>
                            </div>

                            <div className='section-4'>

                                <div className='sub-7' data-aos="fade-right">

                                    <p>
                                        <h1>Digital Marketing</h1>
                                        The world is transitioning to digital, that
                                        much is true. Furthermore, it is crucial for you to be present where
                                        your target audience is. So, it is crucial to engage online and
                                        communicate with your voters. This is every political party's most
                                        useful and strategic tool post-COVID.
                                    </p>
                                </div>

                                <div className='sub-8' data-aos="fade-left">
                                    <img src={marketing} />
                                </div>
                            </div>

                        </div>

                    </section>

                    {/* Client section */}
                    <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 8 } }}>
                        <Typography
                            variant="h3"
                            align="center"
                            gutterBottom
                            sx={{
                                fontWeight: "bold",
                                mb: 6,
                                letterSpacing: 1.5,
                                color: "text.primary",
                                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem", lg: "3rem" }
                            }}
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Our Notable Individual Clients for LS 2024
                        </Typography>

                        <Grid container spacing={6} justifyContent="center">
                            {clients.map((c, i) => (
                                <Grid item xs={12} sm={6} md={3} key={i}>
                                    <Card
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: i * 0.2 }}
                                        sx={{
                                            borderRadius: 4,
                                            backgroundColor: "#fff",
                                            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                                            textAlign: "center",
                                            p: { xs: 2, sm: 3 },
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            "&:hover": {
                                                transform: "translateY(-6px)",
                                                boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                                            },
                                            transition: "all 0.3s ease-in-out",
                                        }}
                                    >
                                        <Avatar
                                            src={c.img}
                                            alt={c.name}
                                            sx={{
                                                width: 130,
                                                height: 130,
                                                mb: 2,
                                                border: "4px solid #f5f5f5",
                                                boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                                            }}
                                        />
                                        <CardContent sx={{ px: 0 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: "bold", mb: 1, color: "text.primary" }}
                                            >
                                                {c.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: "text.secondary", fontWeight: 500 }}
                                            >
                                                {c.constituency}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: "text.secondary", mb: 1 }}
                                            >
                                                {c.state}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ fontWeight: "bold", color: "primary.main" }}
                                            >
                                                {c.party}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Clients Work section */}
                    <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 8 } }}>
                        <Typography
                            variant="h3"
                            align="center"
                            gutterBottom
                            sx={{
                                fontWeight: "bold",
                                mb: 6,
                                letterSpacing: 1.5,
                                color: "text.primary",
                                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem", lg: "3rem" }
                            }}
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Our Notable Client Work
                        </Typography>

                        <Grid container spacing={6} justifyContent="center">
                            {clientswork.map((c, i) => (
                                <Grid item xs={12} md={10} key={i}>
                                    <Card
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: i * 0.2 }}
                                        sx={{
                                            borderRadius: 3,
                                            backgroundColor: "#fff",
                                            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                                            display: "flex",
                                            flexDirection: { xs: "column", sm: "row" }, // responsive row/col
                                            justifyContent: "space-between",
                                            alignItems: { xs: "center", sm: "flex-start" },
                                            p: { xs: 3, sm: 4 },
                                            "&:hover": {
                                                transform: "translateY(-6px)",
                                                boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                                            },
                                            transition: "all 0.3s ease-in-out",
                                        }}
                                    >
                                        {/* Left Side - Text */}
                                        <CardContent
                                            sx={{
                                                flex: 1,
                                                textAlign: { xs: "center", sm: "left" },
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: "bold", mb: 1, color: "text.primary" }}
                                            >
                                                {c.title}
                                            </Typography>
                                            {c.points.map((point, idx) => (
                                                <Typography
                                                    key={idx}
                                                    variant="body1"
                                                    sx={{
                                                        color: "text.secondary",
                                                        mb: 1,
                                                        fontSize: "0.95rem",
                                                        lineHeight: 1.6,
                                                    }}
                                                >
                                                    • {point}
                                                </Typography>
                                            ))}
                                        </CardContent>

                                        {/* Right Side - Logos */}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: 2,
                                                mt: { xs: 3, sm: 0 },
                                                minWidth: { sm: 120 },
                                            }}
                                        >
                                            {c.logos.map((logo, idx) => (
                                                <Box
                                                    key={idx}
                                                    component="img"
                                                    src={logo}
                                                    alt="client-logo"
                                                    sx={{
                                                        width: 80,
                                                        height: "auto",
                                                        objectFit: "contain",
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>


                    {/* Contact Section */}
                    <section id='booking'>

                        <div className='booking-container' data-aos="flip-up">

                            <h1 id='book' data-aos="fade-down">Contact Us</h1>

                            <form className='form' ref={form} onSubmit={sendEmail} style={{ marginTop: '3rem' }}>

                                <div className='input'>
                                    <i className="fa-solid fa-user"></i>
                                    <TextField id='name' name='name' label="Name" value={getName} variant="standard" autoComplete='off' onChange={(e) => setName(e.target.value)}
                                        sx={{ color: 'gray', width: '100%', borderBottom: '1px solid gray' }}
                                        InputLabelProps={{
                                            sx: {
                                                color: "gray",
                                            }
                                        }} />
                                </div>

                                <div className='input'>
                                    <i className="fa-solid fa-phone"></i>
                                    <TextField id='phone' name='phone' label="Phone number" value={getPhone} variant="standard" autoComplete='off' onChange={(e) => setPhone(e.target.value)}
                                        sx={{ color: 'gray', width: '100%', borderBottom: '1px solid gray' }}
                                        InputLabelProps={{
                                            sx: {
                                                color: "gray",
                                            }
                                        }} />
                                </div>

                                <div className='input'>
                                    <i className="fa-solid fa-city"></i>
                                    <TextField id='modal' name='modal' label="City" value={getModal} variant="standard" autoComplete='off' onChange={(e) => setModal(e.target.value)}
                                        sx={{ color: 'gray', width: '100%', borderBottom: '1px solid gray' }}
                                        InputLabelProps={{
                                            sx: {
                                                color: "gray",
                                            }
                                        }} />
                                </div>

                                <div className='input'>
                                    <i className="fa-solid fa-note-sticky"></i>
                                    {/* <input type='text' id='details' name='details' placeholder='Tell us how we can help you?' autoComplete='off' onChange={(e) => setQuery(e.target.value)} /> */}
                                    <TextField id='details' name='details' label="Tell us how we can help you?" value={getQuery} variant="standard" autoComplete='off' onChange={(e) => setQuery(e.target.value)}
                                        sx={{ color: 'gray', width: '100%', borderBottom: '1px solid gray' }}
                                        InputLabelProps={{
                                            sx: {
                                                color: "gray",
                                            }
                                        }} />
                                </div>

                                <button className='booking-btn' id='btn' type='submit'></button>

                            </form>
                        </div>
                        <ToastContainer />

                    </section>

                    {/* contact address Section */}
                    <section style={{ backgroundColor: 'black', marginTop: '1rem' }}>

                        <div className='form-container' data-aos="fade-up">

                            <div className='center-info' >

                                <div className='map'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120691.95186264327!2d72.95073472596198!3d19.036305363019153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1a8f1f81c29%3A0x7ad553b109514985!2sGami%20Industrial%20Park%20-%20By%20Gami%20Group!5e0!3m2!1sen!2sin!4v1721395112480!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ height: '100%', width: '100%', border: 'none' }} />
                                </div>


                                <div className='support'>

                                    <h2>Customer Support</h2>

                                    <div className='info'>

                                        <div className='days'>
                                            <p><i className="fa-solid fa-envelope"></i></p>
                                            <p><i className="fa-solid fa-envelope"></i></p>
                                            <p><i className="fa-solid fa-phone"></i></p>
                                        </div>

                                        <div className='time'>
                                            <p>:&nbsp;&nbsp;<a href="mailto:admin@thepistonbikelounge.com">admin@weepreside.com</a></p>
                                            <p>:&nbsp;&nbsp;<a href="mailto:tausifshaikh2505@gmail.com">krishna@gmail.com</a></p>
                                            <p>: &nbsp;&nbsp;1234567890</p>
                                        </div>

                                    </div>


                                </div>

                            </div>
                        </div>

                    </section>


                </section>

                {/* Footer section */}
                <section id='footer'>
                    <div className='footer'>

                        <footer>
                            <span>
                                &copy;2023, Wee Preside
                            </span>
                        </footer>

                        <div>
                            <p className="footer-heart">
                                Made with <g-emoji className="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
                                    <img className="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" />
                                </g-emoji> by <a href="https://itzzakib07.github.io/dopefolio/" target='_blank' rel="noreferrer noopener">Akib Mulla</a>
                            </p>
                        </div>
                    </div>

                </section>

                {/* WhatsApp Button */}
                <Tooltip title="Chat with us on Whatsapp" placement="left">
                    <a
                        href="https://wa.me/qr/XFG7BRNLHIQZB1"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="whatsapp"
                        aria-label="Chat with us on WhatsApp"
                    >
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                </Tooltip>


                {/* Scroll Top button */}
                <SmoothScrollingLink to="home" >
                    <Tooltip title="Scroll to Top" placement="left">
                        <span className='scroll'>
                            {/* <button> */}
                            <i className="fa-solid fa-arrow-up"></i>
                            {/* </button> */}
                        </span>
                    </Tooltip>
                </SmoothScrollingLink>

            </section>

        </>
    )
}

export default Home
