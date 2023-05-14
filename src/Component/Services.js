import React from 'react';
import brake from '../images/brake.png';
import engine from '../images/engine.png';
import wheel from '../images/wheel.png';
import oil from '../images/oil.png';
import battery from '../images/battery.png';
import service1 from '../images/service1.jpg';
import service2 from '../images/service2.jpg';
import painting from '../images/painting.jpg';
import wasing from '../images/bikeWash.jpg';
import Slideshow from './Slideshow';




const Services = () => {


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



    return (
        <>

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


                            <a href='/Booking'><button>Book Service</button></a>
                        </div>

                        <div className='pricing'>
                            <h2>General Service <span>Without Oil</span></h2>

                            <span>399rs</span>

                            <span>This Service Includes </span>

                            <p>nw qkjvbehj vbqhie vkbjqiehvb qhjfbvqhw fbv    weiu hfbwq riuvkj qrvb</p>


                            <a href='/Booking'><button>Book Service</button></a>
                        </div>

                        <div className='pricing'>
                            <h2>Special Service <span className='h2-span'>With Oil</span></h2>

                            <span>499rs</span>

                            <span>This Service Includes </span>

                            <p>nw qkjvbehj vbqhie vkbjqiehvb qhjfbvqhw fbv    weiu hfbwq riuvkj qrvb</p>

                            <a href='/Booking'><button>Book Service</button></a>
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

                {/* <div className='partners'>

                    <h1>We have serviced all this brands</h1>
                    <Slideshow />
                </div> */}
                {/* 
                <div className='service-information'>
                    <p>
                        <h3>Why You Need Bike Repair services in Pune?</h3>

                        As a bike owner, one of your tasks is to take it to a bike repair shop on a regular basis. Remember, your bike does not have to malfunction before considering repairs. If you want your bike to remain in a flawless and safe condition, be sure to check it regularly for all essential repairs or changes.



                        When selecting the right bike service, there are sure things to consider or look for quality and characteristics. Uncalled-for to say, you only need an expert to handle all the repair work required for your bike.
                    </p>

                    <p>
                        <h3>What It Requires To Maintain Your Bike?</h3>



                        Maintaining your bike regularly is one way to avoid costly repairs caused by years of rough handling. Simply put, these additional enhancements to this popular bike could save you a lot of money down the road. If the repair does not help, book a professional bike repair service in Pune from ServingBee.



                        Faults due to lack of knowledge can cost you more than paying a specialized mechanic to complete the bike repair n Pune first. ServingBee promises to provide the best bike repair services  in Pune needed for bikes at reasonable prices, making your life easier, just a few steps from the comfort of your home, this is the most ideal and first choice.
                    </p>

                    <p>
                        <h3>How to Book Bike Repair Services in Pune?</h3>



                        You can place the request by visiting our ServingBee website and fill in your details and choosing the particular Service’ Bike Repair' and Clicking on Get Call back alternatively you Give us a call at 7373732921 and our team will take request for bike service. Upon confirmation of booking our service partner will contact you and assist with bike repair services in Pune.
                    </p>

                    <p>
                        <h3>What's Included as part of the Bike Repair Services in Pune?</h3>

                        Engine Oil Change
                        Brakes Check and Clean
                        Clutch Play Adjustment
                        Chain Lubrication and Adjustment
                        Spark Plug Clean
                        Electrical Wiring Check
                        Exterior Foam Wash


                        All The Bike Repair services in Pune At Servingbee Are Picked From The Best Pool In The Market And Some Of The Things We Bear In Mind Before We Hire Them:
                    </p>

                    <p>
                        <h3>Experience And Repute:</h3>



                        We usually select mechanics with many years of experience in Bike Repair services in Pune. This is because a mechanic with many years of experience has more knowledge and skills to provide better bike maintenance than one who has just graduated from high school. It's nice to know that the mechanic has a good reputation for quality bike service. This information can be used by other customers who have used your services.
                    </p>

                    <p>
                        <h3> Cost:</h3>



                        We know that some Bike Repair mechanics in Pune charge different prices for the services they provide. Some people charge high prices, while others may charge low prices to attract new customers. We usually choose a skilled worker with reasonable fees based on your budget. However, we will be very careful to watch out for bike repair mechanics  in Pune who may charge extremely low prices and provide poor service.
                    </p>

                    <p>
                        <h3>Certified:</h3>



                        A good mechanic will always abide by the law. Before hiring a mechanic to repair your bike in Pune , we make sure that he is licensed to provide the service. This is another guarantee that mechanics can provide quality services because service organizations usually only license qualified mechanics.
                    </p>

                    <p>
                        <h3>Availability Of Tools And Time:</h3>



                        Efficient bike mechanics have enough tools on their premises to undertake any work in order to meet the diverse needs of their customers. We typically select a mechanic with all the required tools and spare parts, in order to get the bike repair services required more effectively. It is also good to choose the one that will provide the bike  repair services in Pune required within the shortest time possible.
                    </p>

                    <p>
                        <h3>Reliability:</h3>



                        Many bike repair services will find ways to increase service fees, and may even charge clients for services that are in fact unnecessary. Some mechanics are also unable to complete the repairs on time, although they can complete the work correctly. In summary, it is very important to find reputable bike repair services in Pune so that you can experience quality service.;
                    </p>

                </div> */}

            </div>
        </>
    )
}

export default Services