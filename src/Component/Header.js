import React  from 'react';
import 'animate.css';
import logo from '../images/Logo.png'
import { useNavigate } from "react-router-dom";


const Header = () => {

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
        navigate('/Booking');
    }

    const contact = () => {
        navigate('/Contact');
    }

    return (
        <>

        <div className='header'>

            <div className='logo'>

                <a href='/Home'> <img src={logo} /></a>

                <div className='title animate__animated animate__shakeX'>
                    <a href='/Home'><span >Hindustan <span className='half-title'>Automobiles</span> </span></a>
                </div>
            </div>


            <header>
                <ul>
                    <li id='li' onClick={home}>Home</li>
                    <li onClick={services}>Our Services</li>
                    <li onClick={booking}>Book service</li>
                    <li onClick={contact}>Contact Us</li>
                </ul>
            </header>

        </div>
        </>
    )
}

export default Header