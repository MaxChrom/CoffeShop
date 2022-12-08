import React from 'react'
import { useEffect, useState } from 'react'
import "../Styles/Home.scss"
import counter from "../../../../public/Images/counter.jpg"

function Home() {


    
  return (
    <div>
        <section className="main">
            <div className="main_title">
                <h1>Generic Hipster Coffee</h1>
                <h2>Specialty coffee, fresh food & local community.</h2>
            </div>
            <div className='main_img'>
                <img src={counter} alt="counter" />
            </div>
            <div className="main_info">
                <div className="main_info_hours">
                    <h3>Opening hours</h3>
                    <p>Sunday - Thursday: 8:00 - 11:00</p>
                    <p>Friday - Saturday: 8:00 - 01:00</p>
                </div>
                <div className="main_info_booking">
                    <h3>Book a table</h3>
                    <p>Call +1 415-321-4567</p>
                </div>
                <div className="main_info_address">
                    <h3>Address</h3>
                    <p>321 Ivy St.</p>
                    <p>San Francisco, CA 94102</p>
                </div>
            </div>
            <div className="main_map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5478138745257!2d-122.42566538471193!3d37.77719967975894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580989a43e76d%3A0x45f1b189ee3b07b3!2s321%20Ivy%20St%2C%20San%20Francisco%2C%20CA%2094102%2C%20Spojen%C3%A9%20st%C3%A1ty%20americk%C3%A9!5e0!3m2!1scs!2scz!4v1663319888158!5m2!1scs!2scz"
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>
    </div>
  )
}

export default Home