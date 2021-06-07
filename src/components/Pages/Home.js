import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Footer from '../Footer';
import Interests from '../Interests';
import SideBar from '../SideBar';

function Home () {
    return (
        <>
            <Hero />
            <Interests/>
            <Footer />
        </>
    )
}

export default Home;