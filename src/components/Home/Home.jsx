import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    
    return (
        <div className="home-container">
            <section>
                <h1> YOUR ONE-STOP SHOP FOR EVERYTHING YOU LOVE </h1>
                <h3> Welcome to Angadi! Why shop with us? </h3>
                <ul>
                    <li> Wide Range of Products: Find everything you need, from the latest tech gadgets to trendy clothing. </li>
                    <li> Fast & Secure Checkout: Enjoy a seamless shopping experience with quick and secure payment options. </li>
                </ul>
                <Link to="/shop"> <button> Shop Now </button> </Link> 
            </section>

            <section>
                <img src="/main-photo.png" alt="home" />
            </section>
        </div>
    )
}

export default Home;