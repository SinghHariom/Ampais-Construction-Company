// Components
import Loader from '../../Components/Loader/Loader';
import Hero from '../../Components/Hero/Hero';
import SubHero from '../../Parts/SubHero/SubHero';
//import Accordion from '../../Parts/Accordian/Accordian';
//import Partners from '../../Parts/Partners/Partners';
import ServicesOffered from '../../Components/ServicesOffered/ServicesOffered';
import CoreValues from '../../Parts/CoreValues/CoreValues';
import CallToActionForm from '../../Parts/Call-To-Action-Form/Call-To-Action-Form';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './Services.css';

function Services() {
  // title
  useTabTitle('Services');
  // current page
  useCurrentPage();

  return (
    <>
      <Loader/>
      <main id='main' className='services'>
      <Hero 
        title='construction services' 
        content='we build inspiring residential & Sports spaces'
      />
      <SubHero/>
      <ServicesOffered/>
      {/*<Accordion/>
      {/*<Partners/>*/}
      <CoreValues/>
      <CallToActionForm/>
    </main>
    </>
  );
}

export default Services;