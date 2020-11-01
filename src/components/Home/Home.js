import React from 'react';
import { Link } from 'react-router-dom';

import interior1 from './../../resources/i-1.jpg';
import interior2 from './../../resources/i-2.jpg';
import interior3 from './../../resources/i-3.jpg';
import interior4 from './../../resources/i-4.jpg';
import serviceBuy from '../../resources/service-buy.svg'
import serviceRent from '../../resources/service-rent.svg'
import '../../Styles/Home.css';

function Home() {
    return (
        <>
            {/* ============= HEADER =========== */}
            <header>
                <div class="heading_text">
                    <div class="heading">
                        <h1>Find your dream home</h1>
                        <div class="underline"></div>
                    </div>
                    <div class="description">
                        <p>We work for yout to give a better platform. Where you can find your dream home.</p>
                        <p> - Dhruba Mitra</p>
                    </div>
                </div>
                <div class="heading_image">
                    <div class="slides">
                        <div class="slide"><img src={interior1} alt="" /></div>
                        <div class="slide"><img src={interior2} alt="" /></div>
                        <div class="slide"><img src={interior3} alt="" /></div>
                        <div class="slide"><img src={interior1} alt="" /></div>
                    </div>
                </div>
            </header>

            {/* ============= ABOUT ============= */}
            <section class="about">
                <div class="left">
                    <div class="image_box">
                        <img src={interior4} alt="" />
                    </div>
                </div>
                <div class="right">
                    <div class="options">
                        <div class="option one"><span>01.</span> Rent a flat</div>
                        <div class="option two"><span>02.</span>Buy a flat</div>
                        <div class="option three"><Link to='/items'>Explore now</Link></div>
                    </div>
                    <div class="services">
                        <h1>What we provide</h1>
                        <div class="underline"></div>

                        <div class="service">
                            <div class="logo"><img src={serviceRent} alt="" width="65px" /></div>
                            <div class="service-desc">
                                <h2>House Rent</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora neque laboriosam vero quia porro! Asperiores, nihil voluptatibus eius, soluta omnis fuga repellendus laboriosam quasi aut labore quaerat ex suscipit illo.</p>
                            </div>
                        </div>

                        <div class="service">
                            <div class="logo"><img src={serviceBuy} alt="" width="65px" /></div>
                            <div class="service-desc">
                                <h2>House Sell</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sapiente. Facere et, necessitatibus amet autem illo dignissimos omnis error natus quisquam fugit at eius. Quam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========= RECENT RENT SECTION ========= */}
            <section class="recent">
                <h1 class="head">Recently added</h1>
                <h2 class="subhead">For Rent <span>32 +</span></h2>

                <div class="flats">
                    {/* --- flat --- */}
                    <div class="flat">
                        <div class="flat-image">
                            <img src={interior1} alt="" />
                        </div>
                        <div class="flat-desc">
                            <h2 class="name">Lacy Straveue <span>apt. 053</span></h2>
                            <p class="location">Dhanmondi 32, Dhaka</p>
                            <p class="price">Starts form : <span>8,000 ৳</span></p>
                            <button type="button"><i class="far fa-eye"></i> details</button>
                        </div>
                    </div>
                    {/* --- flat --- */}
                    <div class="flat">
                        <div class="flat-image">
                            <img src={interior2} alt="" />
                        </div>
                        <div class="flat-desc">
                            <h2 class="name">Lacy Straveue <span>apt. 053</span></h2>
                            <p class="location">Dhanmondi 32, Dhaka</p>
                            <p class="price">Starts form : <span>8,000 ৳</span></p>
                            <button type="button"><i class="far fa-eye"></i> details</button>
                        </div>
                    </div>
                    {/* --- flat --- */}
                    <div class="flat">
                        <div class="flat-image">
                            <img src={interior3} alt="" />
                        </div>
                        <div class="flat-desc">
                            <h2 class="name">Lacy Straveue <span>apt. 053</span></h2>
                            <p class="location">Dhanmondi 32, Dhaka</p>
                            <p class="price">Starts form : <span>8,000 ৳</span></p>
                            <button type="button"><i class="far fa-eye"></i> details</button>
                        </div>
                    </div>
                    {/* --- flat --- */}
                    <div class="flat">
                        <div class="flat-image">
                            <img src={interior4} alt="" />
                        </div>
                        <div class="flat-desc">
                            <h2 class="name">Lacy Straveue <span>apt. 053</span></h2>
                            <p class="location">Dhanmondi 32, Dhaka</p>
                            <p class="price">Starts form : <span>8,000 ৳</span></p>
                            <button type="button"><i class="far fa-eye"></i> details</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
