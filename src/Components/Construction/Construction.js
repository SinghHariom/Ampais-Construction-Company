import React from "react";
import { Link } from 'react-router-dom';
// Components
import HedSection from '../../Components/HedSection/HedSection';
// Css
import './Construction.css';

// Fake Server
const data = [
  { 
    id: 1,
    frontIcon: 'icon-building',
    frontTitle: 'Consultation',
    frontContent: 'Our consultation services provide you with expert guidance and tailored advice to bring your vision to life.',
    backTitle: 'Expert Advice',
    backContent:'Whether you’re planning a new project or need insights on existing structures, our experienced consultants are here to help.'
  },
  
  {
    id: 2,
    frontIcon: 'icon-home',
    frontTitle: 'Construction',
    frontContent: 'Our construction services are dedicated to turning your dreams into reality.We use the highest quality materials.',
    backTitle: 'Project Management',
    backContent: 'We manage every aspect of the construction process with precision and excellence to ensure perfect timeline and budget.'
  },
  
  {
    id: 3,
    frontIcon: 'icon-refresh',
    frontTitle: 'Renovation',
    frontContent: 'Renovation is an art, and we excel at it.We prioritize your vision and comfort in every project.',
    backTitle: 'Creative Solutions',
    backContent: 'Whether it’s a single room or an entire building, our renovation services are designed to enhance and update your space.'
  },
  
  {
    id: 4,
    frontIcon: 'icon-truck',
    frontTitle: 'Design',
    frontContent: 'Our design services blend creativity with practicality to create stunning spaces and Turfs',
    backTitle: 'planning',
    backContent: 'From initial concepts to final touches,we collaborate with you to ensure your space reflects your style and meets your needs.'
  },
];

function Construction() {
  return (
    <div className='construction'>
      <div className='container'>
        <HedSection
          title="specialists in modern construction"
          content="Ampais Constructions prides itself on quality craftsmanship, meticulous attention to detail, and maintaining transparent communication with every client. Each project goes beyond just remodeling bathrooms, kitchens, or basements—it's about collaborating with the client to establish a shared vision and making it the cornerstone of the entire construction process. We take immense pride in delivering high-quality projects on time to every client. Our motivation is rooted in providing you with exceptional workmanship and ensuring complete customer satisfaction!"
        />

        <div className='parent-items'>
          {data.map(item=>{
            const {id,frontIcon,frontTitle,frontContent,backTitle,backContent} = item;

            return (
              <div key={id} className='card-parent'>
                <div className='rotatory-card'>
                  <section className='card-front'>
                    <i className={`card-front-icon ${frontIcon}`}></i>
                    <h1 className='title-md'>{frontTitle}</h1>
                    <p>{frontContent}</p>
                  </section>

                  <section className='card-back'>
                    <h4 className='title-sm'>{backTitle}</h4>
                    <p>{backContent}</p>
                    <Link to='/get-quote' className='btn btn-secondary'>get a quote</Link>
                  </section>
                </div>
              </div>
            );
          })}  
        </div>
      </div>
    </div>
  );
}

export default Construction;