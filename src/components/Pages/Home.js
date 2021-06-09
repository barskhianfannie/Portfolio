import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Footer from '../Footer';
import Interests from '../Interests';
import SideBar from '../SideBar';
import Cards from '../Cards';
import ResumeViewer from '../ResumeViewer';

function Home () {
    return (
        <>
            <Hero />
            <Interests/>
            <Cards/>
            <ResumeViewer/>
            <Footer />
        </>
    )
}

export default Home;