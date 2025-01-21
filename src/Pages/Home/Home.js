import React from 'react';
import Loader from '../../Components/Loader/Loader';
import Hero from '../../Components/Hero/Hero';
import HeroBtn from '../../Components/HeroBtn/HeroBtn';
import Construction from '../../Components/Construction/Construction';
import Information from '../../Components/Information/Information';
import Gallery from '../../Components/Gallery/Gallery';
import SubHero from '../../Parts/SubHero/SubHero';
import CallToAction from '../../Parts/Call-To-Action/Call-To-Action';
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';

//import Banner from '../../Components/Banner/Banner';

// Css
import './Home.css';
function Home() {
    // title
    useTabTitle('Home');
    // current page
    useCurrentPage();
  
    return (
    <>
      <Loader/>
      <main id='main' className='home'>
        <Hero title='Welcome to Ampais' content='We commit to society to develop smart, eco-friendly, and sustainable sports and residential infrastructure.'>
          <HeroBtn/>
        </Hero>
        <SubHero/>
        <Construction/>
        <Information/>
        <Gallery/>
        <CallToAction/>
      </main>
    </>
    );
  }
  
  export default Home;