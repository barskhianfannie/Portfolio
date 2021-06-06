import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Interests from '../Interests';

function Home () {
    return (
        <>
            <HeroSection />
            <Interests/>
            <Footer />
        </>
    )
}

export default Home;