import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Featured from '../Featured';
import './Home.css';
// import MailList from '../mailList';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <div className='homeContainer'>
        <Featured/>
      </div>
      <Footer />
    </>
  );
}

export default Home;