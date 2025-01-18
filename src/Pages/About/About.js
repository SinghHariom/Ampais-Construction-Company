// Components
import Loader from '../../Components/Loader/Loader';
import Hero from '../../Components/Hero/Hero';
import SubHero from '../../Parts/SubHero/SubHero';
import Inspiring from '../../Parts/Inspiring/Inspiring';
import OurTeam from '../../Parts/Our-Team/Our-Team';
import Works from '../../Components/Gallery/Gallery';
//import Parallax from '../../Parts/Parallax/Parallax';
//import Partners from '../../Parts/Partners/Partners';
import CallToActionForm from '../../Parts/Call-To-Action-Form/Call-To-Action-Form';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './About.css';

function About() {
  // title
  useTabTitle('About');
  // current page
  useCurrentPage();

  return (
  <>
    <Loader/>
    <main id='main' className='about'>
      <Hero
        title='construction with a difference'
        content='ampais construction puts the focus back on exceptional service'
      />
      <SubHero/>
      <Inspiring/>
      <OurTeam/>
      <Works/>
      <CallToActionForm/>
    </main>
  </>
  );
}

export default About;